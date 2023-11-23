import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    console.log('Hi there!');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Los Angeles',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('something went wrong');
    }
  };
  // call search Api
  //when component is first rendered.Bad Code
  //searchApi('pasta')
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
