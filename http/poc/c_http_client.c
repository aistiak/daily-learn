// open a socket connection in c 
// write stuff to connection 
// receive response back 
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <netdb.h>
#include <arpa/inet.h>

int main() {
    int sockfd, portno = 80;  // Default HTTP port for example.com
    struct sockaddr_in serv_addr;
    char server_address[] = "93.184.216.34";
    char buffer[1024];  // Buffer for receiving response

    // HTTP request header and body
    char request_header[] = "GET / HTTP/1.1\r\nHost: example.com\r\n\r\n";
    char http_body[] = "This is the HTTP body content.";

    // Create socket
    sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd < 0) {
        perror("socket creation failed");
        exit(EXIT_FAILURE);
    }

    // Set server address and port
    memset(&serv_addr, 0, sizeof(serv_addr));
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(portno);
    inet_pton(AF_INET, server_address, &serv_addr.sin_addr);

    // Connect to server
    if (connect(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0) {
        perror("connect failed");
        exit(EXIT_FAILURE);
    }

    // Send HTTP request header and body
    int bytes_sent = send(sockfd, request_header, strlen(request_header), 0);
    bytes_sent += send(sockfd, http_body, strlen(http_body), 0);

    // Receive response
    int bytes_received = recv(sockfd, buffer, sizeof(buffer), 0);
    if (bytes_received < 0) {
        perror("recv failed");
        exit(EXIT_FAILURE);
    } else {
        printf("Received %d bytes of response:\n", bytes_received);
        printf("%s\n", buffer);  // Print the received response
    }

    // Close socket
    close(sockfd);
    return 0;
}
