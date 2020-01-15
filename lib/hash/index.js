const crypto = require('crypto');

function hash(str) {
  const shasum = crypto.createHash('sha1'); // shasum은 Hash 클래스의 인스턴스입니다.
  shasum.update(str);

  return shasum.digest('hex');
}

module.exports = hash;
