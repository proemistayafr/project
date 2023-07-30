import axios from 'axios';

const BASE_URL = 'https://zerttesh.onrender.com'; 

const getPlaceInfo = async (latitude, longitude) => {
  try {
    const response = await axios.get(`${BASE_URL}/get_place_info/${latitude}/${longitude}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching place info:', error);
    return null;
  }
};

export default getPlaceInfo;
