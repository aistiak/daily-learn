#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <resolv.h>

#define MAX_ANSWER_SIZE 1024

int main() {
    // Domain name to resolve
    char domain_name[] = "example.com";  // Replace with the desired domain

    // Prepare DNS query
    struct res_query query;
    memset(&query, 0, sizeof(query));
    query.name = domain_name;
    query.class = 1;  // IN class for internet addresses
    query.type = T_A;  // Query for IPv4 addresses

    // Send DNS query
    u_char buf[MAX_ANSWER_SIZE];
    int response = res_send(&query, sizeof(query), buf, sizeof(buf));
    if (response < 0) {
        perror("res_send failed");
        exit(EXIT_FAILURE);
    }

    // Parse DNS response
    u_char answer[MAX_ANSWER_SIZE];
    int len = res_search(&query, C_IN, T_A, answer, sizeof(answer));
    if (len < 0) {
        perror("res_search failed");
        exit(EXIT_FAILURE);
    }

    // Print IP addresses
    for (int i = 0; i < len; i += sizeof(struct in_addr)) {
        struct in_addr *ip = (struct in_addr *)(answer + i);
        printf("IP address: %s\n", inet_ntoa(*ip));
    }

    // Close resolver
    res_nclose(&query);

    return 0;
}
