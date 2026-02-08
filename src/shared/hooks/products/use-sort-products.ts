import { useState } from "react";

export const useSortProducts = () => {

    const [sort, setSort] = useState<'asc' | 'desc'>('asc');

    const handleSortChange = () => {
        setSort((prevSort) => (prevSort === 'asc' ? 'desc' : 'asc'));
    };

    return { sort, handleSortChange };
    
}