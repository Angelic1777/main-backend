const {MongoClient} = require("mongodb");

 async function main() {
 }

     const url = "mongodb+srv://DREW1V:<G_2022>@drewiv.mcn92.mongodb.net/?retryWrites=true&w=majority";

     const client = new MongoClient(uri);

     try { 
        await client.connect();

        await listDatabases(client);
    
    } catch (e) {
       console.error(e);
     } 
       finally { 
        await client.close();
      }

    

    main().catch(console.error);
    
     async function listDatabases(client) {
       const databasesList = await client.db().admin().listDatabases();
     }
       console.log("Databases");
       databasesList.databases.forEach(db => {
           console.log('-${db.name}');

       }
        )  