import  { useState } from "react";
import { getProductsApi } from "../../api/products/config";
import type { Product } from "../../api";
import { delay } from "../../utils/delay";

export const useModalData = (afterModalProcessHandler?: () => void, mode?: 'add' | 'edit') => {

    const productsApi = getProductsApi()

    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [isSuccess, setSuccess] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const [editState, setEditState] = useState<Product>({
        id: 0,
        title: "",
        price: 0.0,
        description: "",
        category: "",
        image: ""
    });


    const onModalDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEditState({ ...editState, [e.target.name]: e.target.value });
      };
    
      const handleSubmit =  async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setError(false);
            setIsSaving(true);
            await delay(1000)

            if(mode === 'edit'){
                await productsApi.updateProduct(editState.id.toString(), editState)
            }
            if(mode === 'add'){
                await productsApi.createProduct(editState)
            }
            setSuccess(true);
            if(afterModalProcessHandler) {
                await delay(1000)
                afterModalProcessHandler();
                await productsApi.getProducts()
            }
        }
        catch (error: unknown) {
            if(error instanceof Error) {
                console.log(error.message);
                setError(true);

            }
        }
        finally {
            setIsSaving(false);
            setSuccess(false);
            setEditState({
                id: 0,
                title: "",
                price: 0.0,
                description: "",
                category: "",
                image: ""
            })
        }
        
    };



    const {
        id,
        title,
        price,
        description,
        category,
        image,
        
    } = editState

    return {
        id,
        title,
        price,
        description,
        category,
        image,
        isSaving,
        isSuccess,
        isError,
        editState,
        onModalDataChange,
        handleSubmit
    }
}