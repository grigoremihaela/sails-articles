/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    articleForm: function (req, res) {
      res.view('article-form')
    },

	create: function (req, res) {
        var params = req.params.all();
        Article.create({
        	    title: params.title, 
        	    content: params.content, 
        	    owner: req.session.passport.user, 
        	    category: params.category}).exec(function createCB(err,created){
            // return res.json({notice: 'Created article with title ' + created.title});
            return res.redirect('/');
        });
    },

    index: function(req, res) {
        Article.find({sort: 'createdAt DESC' }).populate('owner').exec(function (err, articles){
            Article.find({ where: { category: '1' }, sort: 'createdAt DESC', limit: 2 }).populate('owner').exec(function (err, firstWorldArticles) {
            Article.find({ where: { category: '11' }, sort: 'createdAt DESC', limit: 2 }).populate('owner').exec(function (err, firstArtArticles) {
            Article.find({ where: { category: '21' }, sort: 'createdAt DESC', limit: 2 }).populate('owner').exec(function (err, firstLifeArticles) {
                res.view('articles', {
                    articles: articles,
                    firstWorldArticles: firstWorldArticles,
                    firstArtArticles: firstArtArticles,
                    firstLifeArticles: firstLifeArticles
                });
            });
            });
            });
        });
    },

    indexWorld: function(req, res) {
        Article.find({ where: { category: '1' }, sort: 'createdAt DESC' }).populate('owner').exec(function(err, articles) {
            Article.find({ where: { category: '1' }, sort: 'createdAt DESC', limit: 2 }).populate('owner').exec(function (err, firstWorldArticles) {
            Article.find({ where: { category: '11' }, sort: 'createdAt DESC', limit: 2 }).populate('owner').exec(function (err, firstArtArticles) {
            Article.find({ where: { category: '21' }, sort: 'createdAt DESC', limit: 2 }).populate('owner').exec(function (err, firstLifeArticles) {
                res.view('world', {
                    articles: articles,
                    firstWorldArticles: firstWorldArticles,
                    firstArtArticles: firstArtArticles,
                    firstLifeArticles: firstLifeArticles
                });
            });
            });
            });
        });
         
    },

    indexArt: function(req, res) {
        Article.find({ where: { category: '11' }, sort: 'createdAt DESC' }).populate('owner').exec(function(err, articles) {
            Article.find({ where: { category: '1' }, sort: 'createdAt DESC', limit: 2 }).populate('owner').exec(function (err, firstWorldArticles) {
            Article.find({ where: { category: '11' }, sort: 'createdAt DESC', limit: 2 }).populate('owner').exec(function (err, firstArtArticles) {
            Article.find({ where: { category: '21' }, sort: 'createdAt DESC', limit: 2 }).populate('owner').exec(function (err, firstLifeArticles) {
                res.view('art', {
                    articles: articles,
                    firstWorldArticles: firstWorldArticles,
                    firstArtArticles: firstArtArticles,
                    firstLifeArticles: firstLifeArticles
                });
            });
            });
            });
        });
    },

    indexLife: function(req, res) {
        Article.find({ where: { category: '21' }, sort: 'createdAt DESC' }).populate('owner').exec(function(err, articles) {
            Article.find({ where: { category: '1' }, sort: 'createdAt DESC', limit: 2 }).populate('owner').exec(function (err, firstWorldArticles) {
            Article.find({ where: { category: '11' }, sort: 'createdAt DESC', limit: 2 }).populate('owner').exec(function (err, firstArtArticles) {
            Article.find({ where: { category: '21' }, sort: 'createdAt DESC', limit: 2 }).populate('owner').exec(function (err, firstLifeArticles) {
                res.view('life', {
                    articles: articles,
                    firstWorldArticles: firstWorldArticles,
                    firstArtArticles: firstArtArticles,
                    firstLifeArticles: firstLifeArticles
                });
            });
            });
            });
        });
    }

};

