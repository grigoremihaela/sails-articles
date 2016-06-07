/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {
        var params = req.params.all();
        Category.create({
        	name: params.name, 
        	articles: params.articles }).exec(function createCB(err,created){
//                return res.json({notice: 'Created category with name' + created.name});
              return res.redirect('/');
        });
    },
};

