'use strict';

const u = require('../util');

module.exports = function(places, icon) {
  return {
    icon_emoji: icon || ':blush:',
    attachments: places.map(function(place, idx) {
      return {
        color: u.getRandomRGB(),
        title: `${idx + 1}번 후보: ${place.dataValues.name}`,
        fields: [{
          title: '설명',
          value: place.dataValues.desc,
          short: true
        }, {
          title: '가격대',
          value: place.dataValues.price,
          short: true
        }, {
          title: '제보자',
          value: `@${place.dataValues.User.dataValues.name}`,
          short: true
        }]
      };
    })
  };
};
