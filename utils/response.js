exports.success = (res, data) => {
  return res.status(200).json({
    is_success: true,
    official_email: process.env.OFFICIAL_EMAIL,
    data: data
  });
};

exports.error = (res, code, message) => {
  return res.status(code).json({
    is_success: false,
    official_email: process.env.OFFICIAL_EMAIL,
    error: message
  });
};
