var User = require('../../models/user');

module.exports = function (api) {
    'use strict';
    api.route('/users')
        .post(function (request, response) {
            var user = new User();
            user.name = request.body.name;
            user.save(function (err) {
                if (err) response.send(err);
                response.json({ message: 'User created!' });
            });
        })
        .get(function (request, response) {
            User.find(function (err, users) {
                if (err)
                    response.send(err);
                response.json(users);
            });
        });

    api.route('/users/:user_id')
        .get(function (request, response) {
            User.findById(request.params.user_id, function (err, user) {
                if (err)
                    response.send(err);
                response.json(user);
            });
        })
        .put(function (request, response) {

            // use our bear model to find the bear we want
            User.findById(request.params.user_id, function (err, user) {

                if (err)
                    response.send(err);

                user.name = request.body.name;  // update the bears info

                // save the bear
                user.save(function (err) {
                    if (err)
                        response.send(err);

                    response.json({ message: 'User updated!' });
                });

            });
        })
        .delete(function (request, response) {
            User.remove({
                _id: request.params.user_id
            }, function (err, user) {
                if (err)
                    response.send(err);

                response.json({ message: 'Successfully deleted' });
            });
        });

    return api;
};