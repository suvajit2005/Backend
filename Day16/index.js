const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users");


app.use(express.json());

app.get("/info", async (req, res) => {
  const ans = await User.find({});
  res.send(ans);
});

app.post("/info", async (req, res) => {
  try {
    await User.create(req.body);
    res.send("Succesfully Inserted");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/info", async (req, res) => {
  await User.deleteOne({ name: "Vishal" });
  res.send("Deleted");
});

app.put("/info", async (req, res) => {
  await User.updateOne({ name: "Mohan" }, { age: 40, city: "Bangladesh" });
  res.send("Updated Succesfully");
});

main().then(() => {
  console.log("Connected to DB");
  app.listen(3000, () => console.log("Listening at port 3000"));
});

