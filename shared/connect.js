const {MongoClient} = require("mongodb");
module.exports = {
    db: null,
    async connect ()
    {
        try{
       const connection = await MongoClient.connect("mongodb+srv://root:root@cluster0.f8ukr.mongodb.net?retryWrites=true&w=majority");
       this.db = connection.db("Booking")
       console.log("Connection started")
      
       
       
        }
        catch(err)
        {
            console.error(err)
        }


    }
}