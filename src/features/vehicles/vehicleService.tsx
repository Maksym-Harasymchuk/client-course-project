import axios from "axios";

const API_URL = "http://localhost:5000/api/Cars/";

// Get cars
const getCars = async () => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  const response = await axios.get(API_URL);

  // const response = await axios.get(API_URL + ticketId, config);

  return response.data;
};

const getCar = async (carId: number) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const response = await axios.get(API_URL + carId);

  return response.data;
};

const getFilters = async () => {
  const responce = await axios.get(API_URL + "filters");

  return responce.data;
};

const vehicleService = {
  getCars,
  getCar,
  getFilters,
};

export default vehicleService;
