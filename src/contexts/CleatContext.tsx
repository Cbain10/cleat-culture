import { ReactNode, createContext, useContext, useState } from "react";
import { Cleat } from "../types/types";

type TCleatContext = {
    cleats: Cleat[];
    setCleatArray: (cleats: Cleat[]) => void;
}

export const CleatContext = createContext<TCleatContext>({
    cleats: [],
    setCleatArray: () => {}
});

type CleatProviderProps = {
    children: ReactNode;
}

export const CleatProvider: React.FC<CleatProviderProps> = ({ children }) => {
    const [cleats, setCleats] = useState<Cleat[]>([]);
    const setCleatArray = (cleats: Cleat[]) => {
        setCleats(cleats);
    }
    return <CleatContext.Provider value={{ cleats, setCleatArray }}>{children}</CleatContext.Provider>;
};

export const useCleats = () => useContext(CleatContext);
