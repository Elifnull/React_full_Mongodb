const UseJokesController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/jokes', UseJokesController.findAllJokes);
    app.get('/api/jokes/:id', UseJokesController.findOneJoke );
    app.put('/api/jokes/:id', UseJokesController.updateExistingJoke);
    app.post('/api/jokes', UseJokesController.createNewJoke);
    app.delete('/api/jokes/:_id', UseJokesController.deleteOneJoke);
}