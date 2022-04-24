const express = require('express')
const cluster = require('cluster')
const os  = require('os')
const app = express()

const numberOfCpu = os.cpus().length 

app.get('/',(req,res) => {
    for (let i = 0 ; i < 1e8 ; i++) {
        // psudo long running task
    }
    res.send(`ok from ${process.pid}`)
})

if(cluster.isMaster) {
    for ( let i = 0 ; i < numberOfCpu ; i++) {
        cluster.fork()
    }
    cluster.on('exit',(worker,code,signal) => {
        console.log(`worker ${worker.process.pid} died`)
    })

}else {

    app.listen(3000, () => console.log(`server running for instance ${process.pid}... `))
}