function createMetadata(name, init = {}) {
  let data = init;

  return {
    name,
    set: (keyOrValue, value) => {
      if (value === undefined) data = keyOrValue;
      else data[keyOrValue] = value;
    },
    get: (key) => {
      if (key === undefined) return data;
      return data[key];
    },
    concat: (others) => {
      Object.assign(data, others);
    }
  }
}

module.exports = createMetadata;

