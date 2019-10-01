const DataLoader = require('dataloader');
const { FamilleLoader } = require('./famille')
const { models, sequelize } = require('../models');

const t = (ids) => {
    return models.Taxon.findAll(
        {
            where: { 
                id: { 
                    [sequelize.Op.or]: ids 
                }
            }
        }
    )
    .then((t) => {
        return t.map((taxon) => {
            return {
                id: taxon.id,
                name: taxon.name,
                familleId: taxon.familleId,
                famille: FamilleLoader.load(taxon.familleId),
            }
        });
    });
};

const getTaxon = (field, ...values) => {
    return Promise.resolve(
        t(values)
    ).catch(e => {
        console.log(e);
    });
};

const TaxonLoader = new DataLoader(ids => getTaxon('id', ...ids));

module.exports.TaxonLoader = TaxonLoader;  