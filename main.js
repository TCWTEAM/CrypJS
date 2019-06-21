const crypto = require('crypto');
const {Buffer} = global;

exports.encrypt = function(text, password) {
    if (process.versions.openssl <= '1.0.1f') {
        throw new Error('Please upgrade your OPENSSL this version is heartbleed vulnerable');
    };
    let iv = crypto.randomBytes(16);
    let cyphs = crypto.createCipheriv('aes-256-cbc', Buffer.from(password), iv);
    let encryptedstring = cyphs.update(text);
    let finalencrypted = Buffer.concat([encryptedstring, cyphs.final()]);
    return `${iv.toString('hex')}:${finalencrypted.toString('hex')}`;
};

exports.decrypt = function(text, password) {
    let parts = text.split(":");
    let iv = Buffer.from(parts.shift(), 'hex');
    let encryptedstring = Buffer.from(parts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(password), iv);
    let decryptedstring = decipher.update(encryptedstring);
    let finalstring = Buffer.concat([decryptedstring, decipher.final()]);
    return finalstring.toString();
};