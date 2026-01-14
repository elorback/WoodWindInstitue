import { createContext, useState } from "react";
import type { ReactNode } from "react";

type NavbarContextType = {
    expanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarContext = createContext<NavbarContextType>({
    expanded: false,
    setExpanded: () => { },
});

interface NavbarProviderProps {
    children: ReactNode;
}

export const NavbarProvider: React.FC<NavbarProviderProps> = ({ children }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <NavbarContext.Provider value={{ expanded, setExpanded }}>
            {children}
        </NavbarContext.Provider>
    );
};

export default NavbarContext;
