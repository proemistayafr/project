import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; 

export interface PlaceInfo {
  place_name: string;
  interesting_facts: string;
}

const getPlaceInfo = async (latitude: number, longitude: number): Promise<PlaceInfo | null> => {
  try {
    const response = await axios.get(`${BASE_URL}/get_place_info/${latitude}/${longitude}`);
    return response.data as PlaceInfo;
  } catch (error) {
    console.error('Error fetching place info:', error);
    return null;
  }
};


export default getPlaceInfo;