import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
    const [gifs, setGifs] = useState([]);    
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //Obtener los gifs
        getGifs(category)
            .then(newGifs => setGifs(newGifs));
        //Cambiar el estado de isLoading
        setIsLoading(false);
    }, []);
    
    return {
        gifs,
        isLoading
    }
}
