// Asynchronous
const crypto = require('crypto');

crypto.randomBytes(256).toString('hex');

module.exports ={
    uri: 'mongodb://admin:admin123@ds163410.mlab.com:63410/mean-angular-2',
    secret: 'crypto'
}