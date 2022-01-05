
# Kubernetes   

### What is kubernetes ?
it is an open source container orchestration tool . it helps to automate software development , scaling and management .

### Architecture of kubernetes 
- kubernetes cluster 
    - network 
    - master node 
        - api gateway ( can be accessed through cli, UI , api/scripts)
        - control manager (detects state changes and recovers )
        - scheduler (schedules pods)
        - /etcd key value store (this stores an instance of kubernetes at any given state)
    - worker/salve nodes 
        - single worker node
            -  pods
                - container  
            -  container service (ex : docker)
            -  kubelet process (executes commands form master/scheduler)
            -  kube proxy (catches request form services and passed them to pods)


> Deployment > POD > Container 
###  components of kubernetes 

__Deployment__ tells kubernetes how to create/modify instances of the pods that holds containerized application 

__external services__ are services that open ways for external access like browser 

__Ingress__ does forwarding . ingress can handles customer domain for application as default access urls are not very practical

__internal services__ only accessable inside kubernetes network 

__config map__ ways to store configs externally in kubernetes 

__secret__ just like config map but for secret data , for example username and password

__service__ is a static component that can work as a load balancer 

> the smallest entity in kubernetes is a pod , but we dont interact with pods directly rather we use ___Deployment___ 

> its not a good practice to write databases in Deployments , for database we should use a component called ___StatefulSet___ (working with stateful set is tedious ) 





### data storage 
data are stored in a way called volume 

types of volume are 

- local 
- remote 

### A sample kubernetes yml file 
 > kubectl // todo 


### simple poc 