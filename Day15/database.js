const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://suvajitsamanta2005:Suvajit%402005@cluster0.hfkejna.mongodb.net/MIDNAPORE_COLLEGE?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
//console.log(client)

async function main() {
  await client.connect();
  console.log('Connected successfully to MongoDB Atlas');

  const db = client.db("MIDNAPORE_COLLEGE");
  const collection = db.collection("BCA");

  // Insert one
  const inserttResult = await collection.insertOne({ name: "Soveer", age: 40 });
  console.log('Inserted document =>', inserttResult);

  // Insert many
  const insertResult = await collection.insertMany([
    { a: 1 },
    { a: 2 },
    { a: 3, name: "suvajit" }
  ]);
  console.log('Inserted documents =>', insertResult);

  // Find
  const filteredDocs = await collection.find({ a: 3 }).toArray();
  console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
