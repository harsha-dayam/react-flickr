import axios from 'axios';

export const FETCH_IMAGES = 'FETCH_IMAGES';

export function fetchImages(tags) {

const request = axios.get(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${tags}&format=json&nojsoncallback=?`);

return {
    type: FETCH_IMAGES,
    payload: request
  };  
}
