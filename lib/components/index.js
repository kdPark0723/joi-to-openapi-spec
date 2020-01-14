const createMetadata = require('../metadata/create-parent-metadata');

const components = createMetadata('components');

components.add(require('./headers'));
components.add(require('./callbacks'));
components.add(require('./examples'));
components.add(require('./links'));
components.add(require('./parameters'));
components.add(require('./requestBodies'));
components.add(require('./responses'));
components.add(require('./schemas'));
components.add(require('./securitySchemes'));

module.exports = components;
