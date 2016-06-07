/**
 * AuthController
 *
 */
var passport = require('passport');
module.exports = {

  register: function (req, res) { 
      var params = {username: req.body.username, email: req.body.email, password: req.body.password, avatar:'images/img/avatar.jpg'};

      User.create(params).exec(function(err, user) {
        if (err) {
          res.serverError(err);
        }
        else {
//          res.send(user);
//          return res.redirect('/login');
          passport.authenticate('local')(req, res, function () {
              res.redirect('/');
          })
        }
      });
  },

  getRegister: function (req, res) {  
    if (req.isAuthenticated()) {
      return res.redirect('/users');
    }
    else{
      res.view('auth/signup')
    }
  },

  login: function (req, res) {
    if (req.isAuthenticated()) {
      return res.redirect('/user');
    }
    else{
      res.view()
    }
  },
/*
  process: function(req, res){
    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
//        return res.send({ message: 'login failed' });
        res.send(err);
        return res.redirect('/login');
      }
      req.logIn(user, function(err) {
        if (err) res.send(err);
//        return res.send({ message: 'login successful' });
          return res.redirect('/user');
      });
    })(req, res);
  },
*/
  process: function(req, res) {
        passport.authenticate('local', function(err, user, info) {
            if( (err)||(!user) ) {
                
                return res.redirect('/login');
                res.send(err);
            }
            req.logIn(user, function(err) {
                if(err) res.send(err);
            //    return res.json(user);
            /*
                return res.send({
                    message: 'login successful'
                });
            */
                return res.redirect('/');
            });
        }) (req, res);
    },

  logout: function (req,res){
    req.logout();
//    res.send('logout successful');
    return res.redirect('/')
  }
};

/**
 * Sails controllers expose some logic automatically via blueprints.
 *
 * Blueprints are enabled for all controllers by default, and they can be turned on or off
 * app-wide in `config/controllers.js`. The settings below are overrides provided specifically
 * for AuthController.
 *
 * NOTE:
 * REST and CRUD shortcut blueprints are only enabled if a matching model file
 * (`models/Auth.js`) exists.
 *
 * NOTE:
 * You may also override the logic and leave the routes intact by creating your own
 * custom middleware for AuthController's `find`, `create`, `update`, and/or
 * `destroy` actions.
 */

module.exports.blueprints = {

  // Expose a route for every method,
  // e.g.
  // `/auth/foo` =&gt; `foo: function (req, res) {}`
  actions: true,
  
  // Expose a RESTful API, e.g.
  // `post /auth` =&gt; `create: function (req, res) {}`
  rest: true,
  
  // Expose simple CRUD shortcuts, e.g.
  // `/auth/create` =&gt; `create: function (req, res) {}`
  // (useful for prototyping)
  shortcuts: true

};