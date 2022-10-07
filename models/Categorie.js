const mongoose = require("mongoose");
const { Schema } = mongoose;
const Joi = require("joi");

const categorieSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 25,
  },
});

const Categorie = mongoose.model("Categorie", categorieSchema);

//Validating the categorie model at the http level
function validateCategorie(categ) {
  const schema = Joi.object({ name: Joi.string().min(3).required() });
  return schema.validate(categ);
}

exports.categorieSchema = categorieSchema;
exports.Categorie = Categorie;
exports.validateCategorie = validateCategorie;
