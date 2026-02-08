import { useState, useDeferredValue, type ChangeEvent } from "react";


export const useSearchProducts = () => {
  const [searchTerm, setSearchTermState] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTermState(event.target.value);
  };

  return { deferredSearchTerm, handleSearchTermChange, searchTerm };
}
