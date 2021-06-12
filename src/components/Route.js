import { useCallback, useEffect, useState} from 'react';

const Route = ({ path, children }) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        //Ici c'est ue fonction de clean UP pour l'event listener
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };

    });//avec un array vide on le run only une seule fois au moment ou le composant est rendu a l'ecran

    return currentPath === path ?
    children: 
    null;
}
export default Route;