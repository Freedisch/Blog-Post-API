const express = require("express");
const route = express.Router();
const controllers = require("../controllers/BlogControllers");

//Routes
route.get("/", controllers.get_all_categories);
route.get("/blogs", controllers.get_all_blog);

route.post("/", controllers.create_categorie);
route.post("/blogs", controllers.create_blog);

route.get("/:id", controllers.get_categorie);
route.get("/blogs/:id", controllers.get_blog);

//Put routes
route.patch("/:id", controllers.update_categorie);
route.patch("blogs/:id", controllers.update_blog);

//exporting routes
module.exports = route;
