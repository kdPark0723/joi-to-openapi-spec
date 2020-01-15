const addParameters = require('../parameter/add-parameters');

function addPath(document, path) {
  const parameters = addParameters(document, path.parameters);

  const pathInfo = {};
  pathInfo[path.method] = {};
  if (path.description) pathInfo[path.method].description = path.description;
  if (path.summary) pathInfo[path.method].summary = path.summary;
  pathInfo[path.method].parameters = parameters;

  document.paths.set(path.path, pathInfo);
}

module.exports = addPath;
