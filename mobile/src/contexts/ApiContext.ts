import { createContext } from "react";
import { ApiContextType } from "../types/apiContextType";

const ApiContext = createContext<ApiContextType>({} as ApiContextType);

export default ApiContext