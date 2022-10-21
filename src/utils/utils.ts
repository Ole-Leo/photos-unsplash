import axios from 'axios';
import { Photo } from '../data';

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
const URL = `${process.env.REACT_APP_API_URL}?client_id=${API_KEY}&per_page=30&query=`;
const baseSrc =
  'https://images.unsplash.com/photo-1632579062869-2cce90b32249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80';

const fetchPhotos = async (setState: Function, query: string) => {
  try {
    const response = await axios.get(URL + query);
    setState(response.data.results);
  } catch (error) {
    console.error(error);
  }
};

const photosLayout = (photosData: Photo[]) => {
  return photosData.map(photo => ({
    key: photo.id,
    src: photo.urls.regular,
    alt: photo.alt_description,
    width: photo.width,
    height: photo.height,
  }));
};

export { fetchPhotos, photosLayout, baseSrc };
