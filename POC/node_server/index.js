
const http = require("http")


const routes =
{
    "/test": {

        path: '/test',
        cbs: [
            function (req, res, next) {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                console.log('in fn1')
                // res.end('Hello test \n');
                return next()

            },
            function (req, res, next) {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                console.log('in fn2')
                res.end('Hello test 2 \n');

            },
        ]
    },
    "/status": {

        path: '/status',
        cbs: [function (req, res) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('ok\n');
        }]
    },
}

function addRoute() {
    console.log(` --- adding route ---`)
    console.log({arguments})
    const path = arguments[0]
    const rest = Object.values(arguments)
    rest.shift()
    console.log({path,rest})
    routes[path] = {
        path,
        cbs: rest
    }

    console.log(routes)
}
// server.on('request',(e)=>{
//     // console.log(` --- request event --- `)
//     // console.log(e.url)
//     // console.log(e.method)
//     // console.log(e.headers)
//     const path = e.url 

//     const _t = routes[path]

//     _t.cb(e)
// })

var fn1 = function (req, res, next) {
    console.log('in fn1')
    next()
}
var fn2 = function (req, res, next) {
    console.log('in fn2')
    next()
}
var fn3 = function (req, res, next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log('in fn3')
    res.end('Hello test 3\n');
}

addRoute(
    `/poc`,
    fn1,
    fn2,
    fn3
)


const server = http.createServer((req, res) => {
    // console.log(req.path)
    // console.log(req.url)
    // res.writeHead(200,{'Content-Type':'text/plain'});
    // res.end('Hello World \n');
    const path = req.url

    const _t = routes[path]
    console.log({ _t })
    if (!_t) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('not found \n');
        return
    }

    let _r = null

    for (let i = 0; i < _t.cbs.length; i += 1) {

        // if next is called then continue 
        // else return s
        let called = false
        const next = function () {
            called = true
            console.log({ called })
            return
        }
        console.log({ called })
        console.log({ [`_t.cbs[${i}]`]: _t.cbs[i] })
        _r = _t.cbs[i](req, res, next)
        console.log({ called, _r })
        if (!called) return _r

    }
    return _r;
})
server.listen(3008, (e) => {
    console.log(`---server running ---`)
})



var _r = {}


