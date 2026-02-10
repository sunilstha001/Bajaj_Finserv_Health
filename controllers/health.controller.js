const response = require('../utils/response');

exports.healthCheck = (req, res) => {
  return response.success(res, null);
};
