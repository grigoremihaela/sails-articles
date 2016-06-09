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
            Article.find({ where: { category: '1' }, sort: 'updatedAt DESC', limit: 2 }).populate('owner').exec(function (err, firstWorldArticles) {
            Article.find({ where: { category: '11' }, sort: 'updatedAt DESC', limit: 2 }).populate('owner').exec(function (err, firstArtArticles) {
            Article.find({ where: { category: '21' }, sort: 'updatedAt DESC', limit: 2 }).populate('owner').exec(function (err, firstLifeArticles) {
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
        Article.find({ where: { category: '1' }, sort: 'updatedAt DESC' }).populate('owner').exec(function(err, articles) {
            Article.find({ where: { category: '1' }, sort: 'updatedAt DESC', limit: 2 }).populate('owner').exec(function (err, firstWorldArticles) {
            Article.find({ where: { category: '11' }, sort: 'updatedAt DESC', limit: 2 }).populate('owner').exec(function (err, firstArtArticles) {
            Article.find({ where: { category: '21' }, sort: 'updatedAt DESC', limit: 2 }).populate('owner').exec(function (err, firstLifeArticles) {
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
        Article.find({ where: { category: '11' }, sort: 'updatedAt DESC' }).populate('owner').exec(function(err, articles) {
            Article.find({ where: { category: '1' }, sort: 'updatedAt DESC', limit: 2 }).populate('owner').exec(function (err, firstWorldArticles) {
            Article.find({ where: { category: '11' }, sort: 'updatedAt DESC', limit: 2 }).populate('owner').exec(function (err, firstArtArticles) {
            Article.find({ where: { category: '21' }, sort: 'updatedAt DESC', limit: 2 }).populate('owner').exec(function (err, firstLifeArticles) {
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
        Article.find({ where: { category: '21' }, sort: 'updatedAt DESC' }).populate('owner').exec(function(err, articles) {
            Article.find({ where: { category: '1' }, sort: 'updatedAt DESC', limit: 2 }).populate('owner').exec(function (err, firstWorldArticles) {
            Article.find({ where: { category: '11' }, sort: 'updatedAt DESC', limit: 2 }).populate('owner').exec(function (err, firstArtArticles) {
            Article.find({ where: { category: '21' }, sort: 'updatedAt DESC', limit: 2 }).populate('owner').exec(function (err, firstLifeArticles) {
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
    },

    edit: function(req, res) {
      Article.findById( req.param('id') ).populate('owner').populate('category').exec(function(err, article) {
          if (err) {
            return res.send(err, 500);
          } else {
            if (article.length) {
                res.view('article/edit', {
                    article: article[0]
                });
            } else {
              res.send('Human not found', 500);
            }
          }
        });
    },

    update: function(req, res) {
        var params = req.params.all();

        Article.update({id: params.id}, 
                       {title: params.title, content: params.content, category: params.category}).exec(function afterwards(err, updated){
            if (err) {
              // handle error here- e.g. `res.serverError(err);`
              return res.send({message: 'Could not update the records', err: err}, 500);
            }
        //    console.log(updated[0]);
            return res.redirect('/');
        });
    }

};

