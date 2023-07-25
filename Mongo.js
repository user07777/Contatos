const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');


async function insert(data) {
  await client.connect();
  //console.log("conexao feita")
  const db = client.db("contatos");
  const collection = db.collection('contatos');
  collection.insertOne(data).catch(err => console.log(err))
}

async function findContacts(usr="") {
  await client.connect();
  //console.log("conexao feita")
  const db = client.db("contatos");
  const collection = db.collection('contatos');
  return usr=="" ? collection.find().toArray() : collection.find({name:usr}).toArray()
}

async function deleteContact(usr) {
  await client.connect();
  //console.log("conexao feita")
  const db = client.db("contatos");
  const collection = db.collection('contatos');
  return collection.deleteOne({name:usr})
}
module.exports =  {
  insert,findContacts,deleteContact
}