//Rooms
const { ObjectId } = require("mongodb")
var mongo = require("../shared/connect")

module.exports.getProduct = async (req ,res , next) =>{
try{
    var response = await mongo.db.collection("room").find().toArray()
    console.log("response")
    console.log(response)
    res.send(response);
    

}catch(err)
{
console.error(err);
res.status(500).send(err);
}
}

module.exports.createProduct = async(req , res , next) =>
{
    try{
        var response = await mongo.db.collection("room").insertOne(req.body)
        res.send(response)

    }catch(err)
    {
console.error(err);
res.status(500).send(err);
    }
}
module.exports.updateProduct = async (req , res , next) =>
{
    try{
           var response = await mongo.db.collection("Products").updateOne({_id:ObjectId(req.params.id)} , {$set:{...req.body}}) 
           res.send(response)
    }catch(err)
    {
        console.error(err);
        res.status(500).send(err); 
    }
}
module.exports.deleteProduct = async (req , res , next) =>
{
    try{
           var response = await mongo.db.collection("Products").remove({_id:ObjectId(req.params.id)}) 
           res.send(response)
    }catch(err)
    {
        console.error(err);
        res.status(500).send(err); 
    }
}
