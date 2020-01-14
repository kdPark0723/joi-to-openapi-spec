function createArrayMetadata(name, init = []) {
  let data = init;

  return {
    name,
    set: (value) => {
      data = value;
    },
    add: (value) => {
      data.push(value);
    },
    get: (index) => {
      if (index === undefined) return data;
      return data[index];
    },
    concat: (value) => {
      data.push(...value);
    }
  }
}

module.exports = createArrayMetadata;

