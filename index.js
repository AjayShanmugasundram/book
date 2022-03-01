const express = require("express");
const mongo = require("./shared/connect")
const productRouter = require("./routes/products")
const registerRouter = require("./routes/register")
const app = express();

app.use(express.json());
mongo.connect()
app.use("/product",productRouter)
app.use("/register",registerRouter)
const port = process.env.PORT || 3000;

app.listen(port,function(){

console.log("Success")

})


