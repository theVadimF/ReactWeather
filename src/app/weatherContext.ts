import { createContext } from "react";
import { TomorrowIO } from "src/assets/tommorow_io_interface";

export const WeatherContext = createContext<TomorrowIO | undefined>(undefined);
