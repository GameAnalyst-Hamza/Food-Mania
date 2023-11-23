import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer _UacmylGIZxh4GcAjjrdkwBEjBjZ-ay9MI9tb2EQ5PD7L7tvl6O0OBvoK5fSfQV7FdI_GkfSGXgPXGVdEZacxLtk-OI8vr4VOnHFi9ZbNUh-iJzIRAliLubHTiqrXnYx',
  },
});
