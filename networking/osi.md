
# OSI ( Open Systems Interconnection )

- what is osi model 
- what are the components of it 
- what is the relation and difference between osi and tpc/ip model 
- what is tpc handshake and how does it work 



# osi model 
It is a conceptual framework of how applications communicate over the network 
there are 7 layers in the system 

[7] application \
[6] presentation \
[5] session \
[4] Transport \
[3] Network \
[2] Data Link \
[1] Physical 

**application**
- this is the layer most users interact with 
- provides services to the end users
- these services are protocols that work with the data ex : http 
- application layer passes data to or receives data from the presentation layer 

**presentation**
- does the task of syntax processing or converting data from one format to another
- ex : SSL encrypts data with PPK 

**session**
- at this layer connection between devices occur 
- is also responsible of authentication and reconnection if network interruption  occurs 

**transport**
- is responsible for transmission of data across network connections 
- this layer coordinates how much data to send how fast and where it goes 
- the widely known services that provide these services are TPC (Transmission control protocol )or UDP (User datagram protocol )

**network**
- handles the routing of data 
- after  data comes ot this layer each frame  of data is examined to conclude if the data has reached its ultimate target 
- the layer send data to the correct destination and receives incoming transmissions 
- the IP portion of the TPC/IP is the commonly known network layer for the internet 
- this layer also manages the mapping of logical addresses and physical addresses 
- for IP addresses this is accomplished through ARP (Address Resolution Protocol )

**Data Link**
- layer 2 , most complex of the layers 
- is divided into sub layers called 
    - MAC (Media Access Control)
    - LLC (Logical Link Control )

- the layer sets up link across physical networks
- receives data from physical layers , checks for transmission errors and packages the bits into data frames 
- and from there it manages physical addressing methods for the MAC or LLC 
- an example of MAC layer includes 802.11 wireless specifications as well as ethernet 

**Physical Layer**
- layer 1 , electrical of physical layer of the model
- this layer encompasses network cables , power card , connectors , transceivers , electric voltages , pulses of light etc


### TPC/IP
- it can be both 4 or  layers , by default 4 layer  
- OSI (Physical + Data Link) = TPC/IP(Network Access Layer)
- OSI(Network Layer) = TCP/IP(Internet Layer)
- OSI(Transport) = TCP/IP(Transport)
- OSI(Application + Session + Transport) = TCP/IP(Application Layer)
- for 5 layer TCP/IP the Physical and Data Link are separate layers 

 

## OSI VS TPC/IP 
- OSI is a theoretical model and TCP/IP is practical 
- TPC/IP was implemented by ARPANET and funded by DARPA
- In TCP/IP  application layer does process to process delivery 

Application -> data generate 
transport -> Segment 
Internet Layer -> packet 
Network Access -> Frame (data frame)



### REFS 
- 