/*-------------------- Imports --------------------*/

import { useState, useEffect } from 'react';

/*-------------------- Functions --------------------*/

// Favorite List Function
export const useFavorite = (gameID, characterID) => {
    const uniqueID = `${gameID}${characterID}`;
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isAlreadyFavorite = savedFavorites.includes(uniqueID);
        setIsFavorite(isAlreadyFavorite);
    }, [uniqueID]);

    const toggleFavorite = (e) => {
        e.stopPropagation();
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
            const updatedFavorites = savedFavorites.filter(fav => fav !== uniqueID);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            savedFavorites.push(uniqueID);
            localStorage.setItem('favorites', JSON.stringify(savedFavorites));
        }
    setIsFavorite(prevState => !prevState);
    };

    return { isFavorite, toggleFavorite };
};