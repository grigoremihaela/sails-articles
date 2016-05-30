/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function (req, res) {
        var params = req.params.all();
        Article.create({
        	    title: params.title, 
        	    content: params.content, 
        	    owner: params.owner, 
        	    category: params.category}).exec(function createCB(err,created){
            return res.json({
              notice: 'Created article with title ' + created.title
            });
        });
    },
};

