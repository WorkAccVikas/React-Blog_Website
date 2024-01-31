const express = require("express");
const app = express();
const cors = require("cors");
const blogs = require("./data/blogsData");
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blog server is running!");
});

app.get("/blogs", (req, res) => {
  return res.send(blogs);
});
app.get("/blogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.filter((b) => b.id === id);
  return res.send(blog);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
