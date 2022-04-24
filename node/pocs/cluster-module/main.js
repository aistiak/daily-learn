const express = require('express')

const app = express() 

app.get('/',(req,res) => {
    for (let i = 0 ; i < 1e8 ; i++) {
        // psudo long running task
    }
    res.send('ok')
})

app.listen(3000, () => console.log(`server running ... `))