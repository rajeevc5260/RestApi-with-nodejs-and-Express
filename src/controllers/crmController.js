import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

// creating the collecton
export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((error, contact) => {
    if (error) {
      res.send(error);
    }
    res.json(contact);
  });
};

// finding the collection
export const getContacts = (req, res) => {
  Contact.find({}, (error, contact) => {
    if (error) {
      res.send(error);
    }
    res.json(contact);
  });
};

// Finding the particular collection
export const getContactId = (req, res) => {
  Contact.findById(req.params.contactID, (error, contact) => {
    if (error) {
      res.send(error);
    }
    res.json(contact);
  });
};

// updating the particular collection
export const updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactID },
    req.body,
    { new: true, useFindAndModify: false },
    (error, contact) => {
      if (error) {
        res.send(error);
      }
      res.json(contact);
    }
  );
};

//deleteing the particular collection
export const deleteContact = (req, res) => {
  Contact.remove({ _id: req.params.contactID }, (error, contact) => {
    if (error) {
      res.send(error);
    }
    res.json({ message: "Successfully Deleted" });
  });
};
