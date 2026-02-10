require('dotenv').config();

const express = require('express');
const app = express();

const bfhlRoutes = require('./routes/bfhl.routes');
const healthRoutes = require('./routes/health.routes');

app.use(express.json({ limit: '10kb' }));

app.use('/bfhl', bfhlRoutes);
app.use('/health', healthRoutes);

app.use((err, req, res, next) => {
  return res.status(500).json({
    is_success: false,
    official_email: process.env.OFFICIAL_EMAIL,
    error: 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
