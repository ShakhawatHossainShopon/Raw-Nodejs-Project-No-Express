const { StringDecoder } = require("string_decoder")
const url = require("url")
const handler = {}
handler.handleReqRes = (req, res) => {
    const parseUrl = url.parse(req.url, true)
    const path = parseUrl.pathname
    const method = req.method.toLowerCase()
    const queryStringObject = parseUrl.query
    const headerObject = req.headers
    const bodyObject = req.body
    const decoder = new StringDecoder("utf-8")
    let realData = ""
    req.on("data", (buffer) => {
        realData += decoder.write(buffer)
    })
    req.on("end", () => {
        realData += decoder.end()
        console.log(realData);
        res.end("hello world")
    })
}


module.exports = handler