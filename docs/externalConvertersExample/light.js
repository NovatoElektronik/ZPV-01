const modernExtend = require('zigbee-herdsman-converters/lib/modernExtend');
const {light} = modernExtend;

const definition = {
    zigbeeModel: ['myZigbeeModel'],
    model: 'myModel',
    vendor: 'myVendor',
    description: 'My super lamp!',
    // Note that fromZigbee, toZigbee, exposes (and more) are missing here since we use modern extend.
    // Modern extends contain all of them and are the preferred way of suppurting new devices.
    extend: [
        light({colorTemp: {range: undefined}, color: true}),
    ],
};

module.exports = definition;