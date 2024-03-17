// 1. import json server

const jsonServer = require('json-server')

// 2. create a server application using jsonserver
const doctorServer = jsonServer.create()


// 3. setup path for db.json
const router = jsonServer.router('db.json')

// 4. return middleware
const middleware = jsonServer.defaults()


// 5. setup a port number
const port = 3005

// 6. use in doctorServer
doctorServer.use(middleware)
doctorServer.use(router)

// 7. to run the server
doctorServer.listen(port,()=>{
    console.log("doctor server listening on port" + port);
})