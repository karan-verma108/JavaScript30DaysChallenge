const fetchAnyApi = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return 'Error fetching the api';
  }
};

export default fetchAnyApi;
