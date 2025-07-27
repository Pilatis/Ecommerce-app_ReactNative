type ReturnType = {
  data?: any;
  errors?: any;
  status?: number;
};

export interface ApiContextType {
  api: {
    get: (path: string, params?: any) => Promise<ReturnType>;
    post: (path: string, params?: any) => Promise<ReturnType>;
  };
}
