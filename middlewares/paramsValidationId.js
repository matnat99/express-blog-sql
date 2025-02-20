const middlewareValidationId = (req, res, next) => {
  req.params.id = Number(req.params.id);

  if (isNaN(req.params.id)) {
    return res.status(400).json({
      error: "Il parametro ID inserito no è un numero",
    });
  }
  next();
};

module.exports = middlewareValidationId;
