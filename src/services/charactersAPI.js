import axios from 'axios';

require('dotenv').config();

const {
  REACT_APP_HAWKINS_URL,
  REACT_APP_HAWKINS_TIMEOUT,
  REACT_APP_UPSIDEDOWN_URL,
  REACT_APP_UPSIDEDOWN_TIMEOUT,
} = process.env;

const DEFAULT_TIMEOUT = REACT_APP_HAWKINS_TIMEOUT || REACT_APP_UPSIDEDOWN_TIMEOUT;
const URL = REACT_APP_HAWKINS_URL || REACT_APP_UPSIDEDOWN_URL;
class CharactersService {
  constructor({ url = URL, timeout = DEFAULT_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
