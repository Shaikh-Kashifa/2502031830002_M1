import express from "express";
import Contact from "../models/contacts.models.js";

const router = express.Router();

// Home
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.render("home", { contacts });
});

// Show Contact
router.get("/show-contact/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("show-contact", { contact });
});

// Add Contact Form
router.get("/add-contact", (req, res) => {
  res.render("add-contact");
});

// Add Contact
router.post("/add-contact", async (req, res) => {
  await Contact.create(req.body);
  res.redirect("/");
});

// Update Form
router.get("/update-contact/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("update-contact", { contact });
});

// Update Contact
router.post("/update-contact/:id", async (req, res) => {
  await Contact.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

// Delete Contact
router.get("/delete-contact/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

export default router;
