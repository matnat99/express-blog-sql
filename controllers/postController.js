const connection = require("../data/db_blog");

// Index
const index = (req, res) => {
  const sql = "SELECT * FROM posts";

  connection.query(sql, (err, results) => {
    if (err)
      return res.status(500).json({
        error: "Database query failed",
      });

    res.json(results);
  });
};

// Show
const show = (req, res) => {
  const id = req.params.id;

  const postSql = "SELECT * FROM posts WHERE id = ?";

  connection.query(postSql, [id], (err, results) => {
    if (err)
      return res.status(500).json({
        error: "Database query failed",
      });

    if (results.length === 0)
      return res.status(404).json({
        error: "Post not found",
      });

    res.json(results[0]);
  });
};

// Store
const store = (req, res) => {
  const newId = posts[posts.length - 1].id + 1;

  const newPost = {
    id: newId,
    ...req.body /* = title: req.body.title,
                   = content: req.body.content,
                   = image: req.body.image,
                   = tags: req.body.tags,*/,
  };

  posts.push(newPost);

  res.status(201).json(newPost);
};

// Update
const update = (req, res) => {
  const { id } = req.params;

  const post = posts.find((postElm) => postElm.id == id);

  post.title = req.body.title;
  post.content = req.body.content;
  post.image = req.body.image;
  post.tags = req.body.tags;

  if (!post) {
    return res.status(404).json({
      error: "not found",
      message: "Post non trovato",
    });
  }

  res.json(post);
};

// Modify
const modify = (req, res) => {
  const { id } = req.params;

  const post = posts.find((postElm) => postElm.id == id);

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  post.image = req.body.image || post.image;
  post.tags = req.body.tags || post.tags;

  if (!post) {
    return res.status(404).json({
      error: "not found",
      message: "Post non trovato",
    });
  }

  res.json(post);
};

// Destroy
const destroy = (req, res) => {
  const postSql = "DELETE FROM posts WHERE id = ?";

  const id = req.params.id;

  connection.query(postSql, [id], (err) => {
    if (err)
      return res.status(500).json({
        error: "Failed to delete pizza",
      });
    res.sendStatus(204);
  });
};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
