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
            // return res.json({notice: 'Created article with title ' + created.title});
            return res.redirect('/');
        });
    },

    index: function(req, res) {
        Article.find({sort: 'createdAt DESC' }, function(err, articles) {
            res.view('articles', {
                articles: articles
            });
        });

    },

    indexWorld: function(req, res) {
        Article.find({ where: { category: '1' }, sort: 'createdAt DESC' }, function(err, articles) {
            res.view('world', {
                articles: articles
            });
        });

    },

    indexArt: function(req, res) {
        Article.find({ where: { category: '11' }, sort: 'createdAt DESC' }, function(err, articles) {
            res.view('art', {
                articles: articles
            });
        });
    },

    indexLife: function(req, res) {
        Article.find({ where: { category: '21' }, sort: 'createdAt DESC' }, function(err, articles) {
            res.view('life', {
                articles: articles
            });
        });
    }

};

