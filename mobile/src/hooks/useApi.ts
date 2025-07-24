import { useContext } from 'react';
import { ApiContextType } from '../types/apiContextType';
import ApiContext from '../contexts/ApiContext';

const useApi = (): ApiContextType => {
  const context = useContext(ApiContext);

  return context;
};

export default useApi;
