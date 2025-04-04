const http = require("http")
const { handleReqRes } = require("./helpers/handleReqRes")
const app = {}

app.config = {
    port: 3000
}

app.createServer = () => {
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, () => {
        console.log(`listening to port number ${app.config.port}`);

    })
}

app.handleReqRes = handleReqRes

app.createServer()