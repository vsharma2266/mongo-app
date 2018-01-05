const Artist = require('../models/artist');

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 */
module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {

    const criteriaObj = {};
    if (criteria.name)
        name: criteria.name;
    //    const criteriaObj =  { $text: { $search: criteria.name } };

    if (criteria.age) {
        criteriaObj.age = { $lte: criteria.age.max, $gte: criteria.age.min };
    }
    if (criteria.yearsActive) {
        criteriaObj.yearsActive = { $lte: criteria.yearsActive.max, $gte: criteria.yearsActive.min };
    }


    const artist = Artist.find(criteriaObj)
        .sort({ [sortProperty]: 1 })
        .skip(offset)
        .limit(limit);

    return Promise.all([artist, Artist.find(criteriaObj).count()])
        .then((a) => {
            return { all: a[0], count: a[1], offset: offset, limit: limit };
        })

};
