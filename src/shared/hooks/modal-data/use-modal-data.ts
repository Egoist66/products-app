import  { useState } from "react";

export const useModalData = () => {
    const [id, setId] = useState<number>(0);
      const [title, setTitle] = useState<string>("");
      const [price, setPrice] = useState<number>(0.0);
      const [description, setDescription] = useState<string>("");
      const [category, setCategory] = useState<string>("");
      const [image, setImage] = useState<string>("");
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Send data to server
    };

    return {
        id,
        setId,
        title,
        setTitle,
        price,
        setPrice,
        description,
        setDescription,
        category,
        setCategory,
        image,
        setImage,
        handleSubmit
    }
}