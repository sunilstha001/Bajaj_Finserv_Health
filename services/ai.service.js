const axios = require('axios');

const MODEL = 'gemini-2.5-flash'; 

exports.askAI = async (question) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      console.error('AI SERVICE ERROR: Missing API Key');
      return 'Unknown';
    }

    const url = `https://generativelanguage.googleapis.com/v1/models/${MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await axios.post(
      url,
      {
        contents: [{ parts: [{ text: question }] }]
      },
      { 
        timeout: 8000,
        headers: { 'Content-Type': 'application/json' }
      }
    );

    const text = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) return 'Unknown';

    return text.trim(); 

  } catch (err) {
    console.error('AI SERVICE ERROR:', err.response?.data?.error?.message || err.message);
    return 'Unknown';
  }
};