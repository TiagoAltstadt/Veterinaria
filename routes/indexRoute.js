var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Veterinaria Nueva Estrada" });
});
router.get("/aboutUs", function (req, res, next) {
  res.render("aboutUs", { title: "Veterinaria Nueva Estrada: Sobre Nosotros" });
});
router.get("/company", function (req, res, next) {
  res.render("company", { title: "Veterinaria Nueva Estrada: Compañia" });
});
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Veterinaria Nueva Estrada: Contacto" });
});

module.exports = router;
