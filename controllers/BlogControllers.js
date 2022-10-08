const express = require("express");
const mongoose = require("mongoose");
const { Blog, validateBlog } = require("../models/Blog");
const { Categorie, validateCategorie } = require("../models/Categorie");

//HANDLING GET REQUESTS
exports.get_all_categories = async (req, res) => {
  const categories = await Categorie.find().sort("name");
  res.send(categories);
};

exports.get_categorie = async (req, res) => {
  const categorie = await Categorie.findOne({ _id: req.params.id });
  if (!categorie) return res.status(404).send("categorie not found");
  res.send(categorie);
};

exports.get_all_blog = async (req, res) => {
  const blogs = await Blog.find().sort("title");
  res.send(blogs);
};

exports.get_blog = async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id });
  if (!blog) return res.status(404).send("The blog requested doesn't exists");
  res.send(blog);
};

// Handling POST requests
exports.create_categorie = async (req, res) => {
  const { error } = validateCategorie(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let categorie = new Categorie({
    name: req.body.name,
  });
  categorie = await categorie.save();
  res.send(categorie);
};

exports.create_blog = async (req, res) => {
  const { error } = validateBlog(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const categorie = await Categorie.findOne({ _id: req.body.categorieId });
  if (!categorie) return res.status(404).send(req.body.categorieId);

  let blog = new Blog({
    title: req.body.title,
    categorie: {
      _id: categorie._id,
      name: categorie.name,
    },
    content: req.body.content,
    //image: req.body.image,
  });

  blog = await blog.save();
  res.send(blog);
};

//Handling PATCH requests
exports.update_categorie = async (res, req) => {
  const { error } = validateCategorie(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const categorie = await Categorie.findByIdAndUpdate({ _id: req.params.id });
  if (!categorie) return res.status(500).send("Categorie not founs");
  res.send(categorie);
};

exports.update_blog = async (req, res) => {
  const { error } = validateCategorie(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  const blog = await Blog.findByIdAndUpdate({ _id: req.params.id });
  if (!blog) return res.status(500).send("Bad request");
  res.send(blog);
};

//Handling DELETE requests
