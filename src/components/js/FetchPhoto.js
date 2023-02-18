import axios from 'axios';

export const fetchPhoto = async (searchQuery, pageNumber) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${pageNumber}&key=31998219-af28b4c3092b69ebd942adff0&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data.hits;
};
