import React from 'react'
import ProvidersContext from '../contexts/ProvidersContext'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProvidersContext.Provider value={undefined}>{children}</ProvidersContext.Provider>
  )
}

export default Providers