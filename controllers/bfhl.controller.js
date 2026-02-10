const validator = require('../utils/validator');
const response = require('../utils/response');
const mathService = require('../services/math.service');
const aiService = require('../services/ai.service');

exports.handleBFHL = async (req, res) => {
  try {
    const validation = validator.validateBFHL(req.body);
    if (!validation.valid) {
      return response.error(res, 400, validation.message);
    }

    const key = Object.keys(req.body)[0];
    const value = req.body[key];

    let result;

    switch (key) {
      case 'fibonacci':
        result = mathService.fibonacci(value);
        break;

      case 'prime':
        result = mathService.primeFilter(value);
        break;

      case 'lcm':
        result = mathService.lcm(value);
        break;

      case 'hcf':
        result = mathService.hcf(value);
        break;

      case 'AI':
        result = await aiService.askAI(value);
        break;

      default:
        return response.error(res, 400, 'Invalid key');
    }

    return response.success(res, result);
  } catch (err) {
    return response.error(res, 500, 'Processing failed');
  }
};
