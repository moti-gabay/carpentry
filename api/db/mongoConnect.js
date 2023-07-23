const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://localhost:27017/idf8');
  await mongoose.connect('mongodb+srv://moti2:Mg206491300@cluster0.7tjbdlb.mongodb.net/idf8');
  console.log("mongo connect idf8 atlas");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}