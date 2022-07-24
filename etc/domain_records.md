# How Domain Names work
###### tags: `learning` `domain` `www` `cname`

- ICANN is a non profit organization that looks over domain name registration , which domain belongs to whome 
- when i register a domain name , the information is stored with my email address and other information 
- whois is a tool (unix) what can be used to look up this information 
- domain configs are stored as dns recordes  in hosted zones 
- the informations ares (commonly used)
    - A (Host address)
    - AAAA (IPv6 host address)
    - ALIAS (Auto resolved alias)
    - CNAME (Canonical name for an alias)
    - MX (Mail eXchange)
    - NS (Name Server)
    - PTR (Pointer)
    - SOA (Start Of Authority)
    - SRV (location of service)
    - TXT (Descriptive text)
- these records can be modified to indicate where the domain will be pointing 