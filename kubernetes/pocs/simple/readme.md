we are going to have 2 applications 
- mongo express 
- mongdb server 

workflow 
- first we are going to create a mongodb pod 
- in order to talk to the pod we are going to need a service 
- so we are going to create an internal service , which means no external request are allowed to the mongo pod , only components inside the same cluster can talk to it 
- then we are going to create a mongo express deployment 
- the express will need mongourl to connect to database , and username and password of the database 
- we pass these information to express through express Deployment.yml file through environmental variables 
- so to store the configs (url) we are going to create a __ConfigMap__ 
- and to store the username and password we are going to create a __Secret__ 
- and we are going the reference both inside the Deployment.yml file (NB. when specifying secret the value must be base64 encoded) 
- we can base64 a string in terminal/cmd by `echo -n 'text' | base64` command

### after all that 
- we will need to communicate express with the outside word , for that we are going to create an external service , so external services will be able to talk to the pod 
- the pod url usually is `http://${id-addr-of-node}:${port-of-external-service}`

- order of creation matters dependencies must be created first 

### so the request flow will look something like 

browser > external service of mongo-express >  mongo express pod > internal service of mongodb > mongodb pod


### commands 

create mongo secret

```
kubectl apply -f mongo-secret.yml
```

get secret 

```
kubectl get secret 
```

deploy mongodb

```
kubectl apply -f mongo.yml 
```

get all 

```
kubectl get all 
```
get pods 

```
kubectl get pod
kubectl get pod -o wide # returns with ip-addr
```

watch container 

```
kubectl get pod --watch
```

describe a pod / service / secret 

```
kubectl describe pod pod-name
kubectl describe service service-name
kubectl describe secret secret-name
```

