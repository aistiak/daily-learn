

Creating a container involves using Linux namespaces and control groups (cgroups) to isolate processes and resource usage. The unshare command can be used to create a new namespace, and tools like systemd-nspawn or lxc can simplify this process. Here, I'll provide a basic example using unshare to create a minimal container with its own PID namespace.Using unshare:

Create a Root File System for the Container:
Start by creating a basic root file system for your container. This can be as simple as a directory containing the minimal filesystem structure.
mkdir -p ~/mycontainer/rootfs



Populate the Root File System:
Populate the root file system with the minimal set of files required for a functional Linux environment. This might include binaries like /bin/bash, libraries, and essential configuration files.
# Example: Copy necessary files (adjust as needed)
cp -a /bin/bash /bin/ls /lib64 /lib/x86_64-linux-gnu ~/mycontainer/rootfs/



Create a Simple Init Script:
Create a simple init script that will be the entry point for your container. Save this script, e.g., as init.sh, inside the root file system.
# init.sh
#!/bin/bash

# Mount necessary filesystems
mount -t proc proc /proc
mount -t sysfs sys /sys

# Run a shell as the container's main process
exec /bin/bash



Set Up Cgroups:
Create a cgroup for your container. Cgroups control the resource allocation for processes within the container.
sudo cgcreate -g memory,cpu:/mycontainer



Run the Container with unshare:
Use the unshare command to create a new process namespace and execute the init script within it.
sudo unshare --fork --pid --mount-proc=$HOME/mycontainer/rootfs/proc ./mycontainer/rootfs/init.sh

This command will launch a new shell within the container's PID namespace.

Notes:

The provided example is minimal and doesn't cover network namespaces, file system namespaces, etc. Expanding this example to a fully functional container would require more setup.


Containerization tools like Docker simplify this process by handling various details such as image creation, network setup, and automated resource management.


For production use, consider using established containerization tools like Docker, Podman, or container orchestration systems like Kubernetes. These tools offer additional features, security, and manageability.

Remember that creating a secure and functional container involves more than just using namespaces and cgroups. It's essential to consider aspects like networking, security, and resource management. If you are interested in containerization for production use, I recommend using established containerization tools rather than reinventing the wheel.

## Ref 
- https://www.freecodecamp.org/news/build-your-on-custom-container-without-docker/