import React from 'react';
import ProvidersContext from '../contexts/ProvidersContext';
import ApiProvider from './ApiProvider';
import AuthProvider from './AuthProvider';
import ProductsProvider from './ProductsProvider';
import CategoryProvider from './CategoryProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProvidersContext.Provider value={undefined}>
      <ApiProvider>
        <AuthProvider>
          <ProductsProvider>
            <CategoryProvider> 
              {children}
              </CategoryProvider>
          </ProductsProvider>
        </AuthProvider>
      </ApiProvider>
    </ProvidersContext.Provider>
  );
};

export default Providers;
