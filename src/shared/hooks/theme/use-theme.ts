import { useEffect, useState } from "react";
import { useLS } from "../service/use-ls";

export const useTheme = () => {
    const {getSync, set} = useLS()
    const [theme, setTheme] = useState<'light' | 'dark'>(getSync('theme') || 'light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };


    useEffect(() => {
        document.documentElement.setAttribute('data-mantine-color-scheme', theme);
        set<'light' | 'dark'>('theme', theme)

        
    }, [theme, getSync, set]);

  

    return {
        theme,
        toggleTheme
    }
}