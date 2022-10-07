const express = require("express");
const mongoose = require("mongoose");
const { Blog, validateBlog } = require("../models/Blog");
const { Categorie, validateCategorie } = require("../models/Categorie");

//HANDLING GET REQUESTS
exports.get_all_categories = async (req, res) => {
  const categories = await Categorie.find.sort("name");
  res.send(categories);
};

exports.get_categorie = async (req, res) => {
  const categorie = await Categorie.findById(req.params.categorieId);
  if (!categorie) return res.status(404).send("categorie not found");
  res.send(categorie);
};
