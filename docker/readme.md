# docker 

- what is docker 
- what is a docker image
- what is docker container 
- what is docker registry 
- how to create/remove/list  docker image 
- how to run/remove/pause/list a docker container 
- images and registry 
- docker basic commands 
- docker architecture 

### docker 
- docker is an application build and deployment tool 

### docker image 
- it is a read only template 
- contains a set of instructions for creatig a 
container 
- lightweight , standalone , executable package of software that includes everything needed to run an application : code , runtime , system tools , system libraries and settings 

### docker registry 
- a docker registy is a storage and distribution for ___named___ docker images 

### container 
- it is a running instance of an image 


### managing images 
- you can pull pre-existing images from public docker registy and run then or can use them as base images to create your own images 
- usually a file named `Dockerfile` is used to create a custom docker image
- after creating the file `docker build` command is used to build an image from that file 
- the image can be named / tagged and pushed to docker registry 

Refs :
- https://codefresh.io/docker-tutorial/build-docker-image-dockerfiles/ 

### managing docker containers 

```
docker run -d -p 8082:80 --ip 127.0.0.1 --hostname demo.com --name nginx-local nginx 
```

hear a nginx container is created if nginx image is not avaiable locally then it would be downloaded first 
- `-d` rund the container id detached mode 
- `-p` maps post external to container internal 
- `--ip` specifies the ip in the host machine 
- `--hostname` specifies hostname inside the container 
- `--name` gives the container a custom name , otherwise a random name will be given 

```
docker logs --follow nginx-local 
```
this will log the logs inside the container and follow them 

### create new container and enter in bash mode 

```
docker run -it alpine 
```

### enter a container in bash mode 

```
docker container <container-id> --exec bash
```

