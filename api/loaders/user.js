const DataLoader = require('dataloader');
const { models, sequelize } = require('../models');

const u = (ids) => {
    return models.User.findAll(
        {
            where: { 
                id: { 
                    [sequelize.Op.or]: ids 
                }
            }
        }
    )
    .then((u) => {
        return u.map((user) => {
            return {
                id: user.id,
                username: user.username,
            }
        });
    });
};

const getUser = (field, ...values) => {
    return Promise.resolve(
        u(values)
    ).catch(e => {
        console.log(e);
    });
};

const UserLoader = new DataLoader(ids => getUser('id', ...ids));

module.exports.UserLoader = UserLoader;