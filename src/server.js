const app = require("./index")
const connect = require("./configs/db.js")

app.listen(2345, async function () {
    await connect();
    console.log("listening on port 2345");
})