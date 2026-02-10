exports.validateBFHL = (body) => {
  const keys = Object.keys(body);

  if (keys.length !== 1) {
    return { valid: false, message: 'Only one key allowed' };
  }

  const key = keys[0];
  const value = body[key];

  if (key === 'fibonacci' && !Number.isInteger(value)) {
    return { valid: false, message: 'Fibonacci requires integer' };
  }

  if (['prime', 'lcm', 'hcf'].includes(key)) {
    if (!Array.isArray(value) || value.some(v => typeof v !== 'number')) {
      return { valid: false, message: `${key} requires integer array` };
    }
  }

  if (key === 'AI' && typeof value !== 'string') {
    return { valid: false, message: 'AI requires string' };
  }

  return { valid: true };
};
