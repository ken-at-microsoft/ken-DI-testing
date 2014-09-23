express = require ("express")
app = express()

app.get ("/", function (req, res) {
	res.send("hello!")
})

port = process.env.PORT || 1337

console.log("listening on", port)

app.listen(port)
