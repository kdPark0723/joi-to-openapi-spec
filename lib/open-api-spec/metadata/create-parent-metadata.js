function createParentMetadata(name) {
  let metaData = {};

  return {
    name,
    set: (keyOrValue, value) => {
      if (value === undefined) metaData = keyOrValue;
      else metaData[keyOrValue].set(value);
    },
    get: (key) => {
      if (key === undefined) {
        const response = {};
        for (let [key, value] of Object.entries(metaData)) {
          response[key] = value.get();
        }

        return response;
      }
      return metaData[key].get();
    },
    add: (childMetaData) => {
      metaData[childMetaData.name] = childMetaData;
    },
    concat: (others) => {
      Object.assign(metaData, others);
    },
    data: () => {
      const build = () => {
        const response = {};
        for (let [key, value] of Object.entries(metaData)) {
          response[key] = value.get();
        }

        return response;
      };

      return {
        ...metaData,
        build
      };
    }
  }
}

module.exports = createParentMetadata;

