const passport = require('passport');
const local = require('./localStrategy');

const User = require('../models/user');
const Post = require('../models/post');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findOne({where: { id } ,
        include: [{
            model: User,
            attributes: ['id', 'nick'], // 비밀번호까지 조회하면 안되니까 일일히 지정해 주는 것
            as: 'Followers',
        }, {
            model: User,
            attributes: ['id', 'nick'],
            as: 'Followings'
        }],
        })
            .then(user => done(null, user))
            .catch(err => done(err));
    });

    local();
}