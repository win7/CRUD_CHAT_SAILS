/**
 * ContactController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	new: function (req, res) {
    console.log("New contact");
    return res.view("contact/new", {
      title: "New Contact"
    });
  },

  create: function (req, res) {
  	console.log("Create Contact");
	  /* await Contact.create(req.allParams());
	  res.json({status: "Ok"}); */
	  Contact.create(req.allParams())
    .then(function (_contact) {
      return res.redirect("/find_all_contact");
    })
    .catch(function (err) {
      return res.view("contact/new", {
        title: "Create contact",
        contact: req.allParams()
      });
    });
	},

  findone: function (req, res) {
    console.log("Find one contact");
    Contact.findOne({
      where: {id: req.param("id")}
    })
    .then(function (_contact) {
      if (_contact) {
        return res.view("contact/update", {
	        title: "Edit contact",
          contact: _contact
        });
      } else {
        return res.notFound();
      }
    })
    .catch(function (err) {
      return res.serverError(err);
    });
  },

  findall: function (req, res) {
    console.log("Find all contact");
    Contact.find({
      sort: "id ASC"
    })
    .then(function (_contact) {
      return res.view("contact/find_all", {
        title: "List contact",
        contact: _contact
      });
    })
    .catch(function (err) {
      return res.serverError(err);
    });
  },

  update: function (req, res) {
    console.log("Update contact " + JSON.stringify(req.allParams()));
    Contact.update({id: req.param("id")}, req.allParams())
    .then(function (_contact) {
      return res.redirect("/find_all_contact");
    })
    .catch(function (err) {
      Contact.findOne({id: req.param("id")})
      .then(function (_contact) {
        if (_contact) {
          return res.view("contact/update", {
            title: "Editar contacte",
            contact: _contact
          });
        } else {
          return res.notFound();
        }
      })
      .catch(function (err) {
        return res.serverError(err);
      });
    });
  },

  delete: function (req, res) {
    console.log("Delete contact");
    Contact.destroy({id: req.param("id")})
    .then(function (_contact) {
      return res.redirect("/find_all_contact");
    })
    .catch(function (err) {
      return res.serverError(err);
    });
  },

};

