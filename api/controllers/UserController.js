/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	/**
   * `UserController.index()`
   */

  index: function(req, res) {
    console.log("Looking for index.ejs");
    User.find(function(err, users) {
      console.log(JSON.stringify(users));
      res.view({
        users: users
      });
    });
  },


  /**
   * `UserController.create()`

  create: function(req, res){
    var params = req.params.all()
  
    User.create({username: params.name}).exec(function createCB(err,created){
      return res.json({
        notice: 'Created user with username ' + created.name
      });
    });
  },
  */

  /**
   * `UserController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },


  /**
   * `UserController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `UserController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }

};

