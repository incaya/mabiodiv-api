const DataLoader = require('dataloader');
const { models, sequelize } = require('../models');

const f = (ids) => {
    return models.Famille.findAll(
        {
            where: { 
                id: { 
                    [sequelize.Op.or]: ids 
                }
            }
        }
    )
    .then((f) => {
        return f.map((famille) => {
            return {
                id: famille.id,
                name: famille.name,
            }
        });
    });
};

const getFamille = (field, ...values) => {
    return Promise.resolve(
        f(values)
    ).catch(e => {
        console.log(e);
    });
};

const FamilleLoader = new DataLoader(ids => getFamille('id', ...ids));

module.exports.FamilleLoader = FamilleLoader;  