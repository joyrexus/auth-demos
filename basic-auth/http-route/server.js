var basic = require("basic")
var Router = require("routes-router")
var http = require("http")

function sendBasicError(req, res) {
    res.statusCode = 401
    res.setHeader("WWW-Authenticate", "Basic realm=\"Secure Area\"")
    res.end("Unauthorized")
}

var auth = basic(function (user, pass, callback) {
    if (user === "jones" && pass === "123") {
        return callback(null)
    }

    callback(new Error("Access Denied"))
})

var app = Router()

app.addRoute("/login", function (req, res) {
    auth(req, res, function (err) {
        if (err) {
            return sendBasicError(req, res)
        }

        res.end("authorized!")
    })
})


app.addRoute("*", function (req, res) {
    res.end("hello! try /login")
})

var adminServer = http.createServer(app)
adminServer.listen(8000)
console.log("basic authed login server listening on port 8000")
