import React from 'react';
import ProvidersContext from '../contexts/ProvidersContext';
import ApiProvider from './ApiProvider';
import AuthProvider from './AuthProvider';
import ProductsProvider from './ProductsProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProvidersContext.Provider value={undefined}>
      <ApiProvider>
        <AuthProvider>
          <ProductsProvider>
            {children}
          </ProductsProvider>
        </AuthProvider>
      </ApiProvider>
    </ProvidersContext.Provider>
  );
};

export default Providers;
