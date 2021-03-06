/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');
// var md5 = require('md5');

module.exports = {

    attributes: {

        id: {
          type: 'integer',
          unique: true,
          primaryKey: true
        },

        username: {
            type: 'string',
//            required: true,
//            unique: true
        },

        email: {
            type: 'string',
            required: true,
            unique: true
        },

        password: {
            type: 'string',
            required: true
        },

        avatar: {
            type: "String"
        },

        // override default toJSON
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        },

        // Add a reference to Articles
        articles: {
          collection: 'article',
          via: 'owner'
        }

    },

    beforeCreate: function(user, cb) {
      bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) {
                console.log(err);
                cb(err);
            } else {
                user.password = hash;
                console.log(hash);
                cb(null, user);
            }
          });
      });
    }
/*
  beforeCreate: function(user, cb) {
    user.password = md5(user.password);
    cb();
  }
*/
};



