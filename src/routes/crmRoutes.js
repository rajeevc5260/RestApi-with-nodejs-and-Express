import {
  addNewContact,
  getContacts,
  getContactId,
  updateContact,
  deleteContact
} from "../controllers/crmController";
const routes = (app) => {
  app
    .route("/contact")
    //read
    .get((req, res, next) => {
      //middleWare
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    //create
    .post(addNewContact);

  app
    .route("/contact/:contactID")
    .get(getContactId) //find by particular ID
    //update
    .put(updateContact)
    //delete
    .delete(deleteContact);
};

export default routes;
