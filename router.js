Meteor.Router.add({
  "/home": { to: "home" },

  "/contact": function(){
  	return "contact";
  }

  //'*': 'not_found'
});