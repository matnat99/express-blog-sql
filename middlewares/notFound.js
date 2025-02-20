const notFound = (req, res, next) => {
  if (!post) {
    return res.status(404).json({
      error: "not found",
      message: "Pagina non trovata",
    });
  }

  next();
};

module.exports = notFound;
