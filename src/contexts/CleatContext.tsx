import { ReactNode, createContext, useContext, useState } from "react";
import { Cleat } from "../types/types";

type TCleatContext = {
    cleats: Cleat[] | undefined;
    setCleats: (cleats: Cleat[] | undefined) => void;
}

export const CleatContext = createContext<TCleatContext>({
    cleats: [],
    setCleats: () => {}
});

type CleatProviderProps = {
    children: ReactNode;
}

export const CleatProvider: React.FC<CleatProviderProps> = ({ children }) => {
    const [cleats, setCleats] = useState<Cleat[] | undefined>();
    return <CleatContext.Provider value={{ cleats, setCleats }}>{children}</CleatContext.Provider>;
};

export const useCleats = () => useContext(CleatContext);
