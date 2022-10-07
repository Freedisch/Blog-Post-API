const { categorieSchema, validateCategorie } = require("./Categorie");
const mongoose = require("mongoose");
const Joi = require("joi");
const { Schema } = mongoose;

//Creating Blog schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 25,
  },
  categorie: {
    type: categorieSchema,
    required: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  image: {
    type: Buffer,
    required: false,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

//Validating Blog request at http level
function validateBlog(blog) {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    categorieId: Joi.string().required(),
    content: Joi.string().min(3).required(),
    image: Joi.any(),
  });
  return schema.validate(blog);
}

//Exporting
exports.Blog = Blog;
exports.validateBlog = validateBlog;
