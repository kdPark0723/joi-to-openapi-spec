const createMetadata = require('./metadata/create-parent-metadata');

const document = createMetadata('document');

document.add(require('./openapi'));
document.add(require('./info'));
document.add(require('./servers'));
document.add(require('./components'));
document.add(require('./paths'));
document.add(require('./security'));
document.add(require('./tags'));

module.exports = document.data();
