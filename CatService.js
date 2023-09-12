require('dotenv').config();
const axios = require('axios');

class CatService {
  async getRandomCatImage() {
    try {
      const link = `https://api.thecatapi.com/v1/images/search?size=full&api_key=${process.env.CAT_API_KEY}`;
      const response = await axios.get(link);
      return response.data[0].url;
    } catch (error) {
      return "https://cdn2.thecatapi.com/images/3v5.jpg"
    }
  }
}

module.exports = CatService;
