//je créer mon context grace a createContext
import {
    createContext,
    useContext,
    useEffect,
    useState,
  } from 'react';
  //PropTypes exporte un ensemble de validateurs 
//qui peuvent être utilisés pour s’assurer que la donnée que vous recevez est valide (validation de types)
  import PropTypes from 'prop-types';


   //je défini le nom de mon context avec pour point de départ 'vide'
  const UserContext = createContext(null);

  //je rappel tous les composant grace à "children"
  const UserProvider = ({ children }) => {

   //l'action que je souhaite avec mon context
    const [user, setUser] = useState(
      localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    );
  
    //mise à jour de mon user
    useEffect(() => {
      //je récupère et valide le user
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
         //sinon je l'enlève
        localStorage.removeItem('user');
      }
    }, [user]);
  
    return (
     
      // je me donne la possibilité d'envoyer mon contexte, ses actions et ses maj (grace à value) sur les composants grace à Provider
      <UserContext.Provider value={{ user, setUser }}>
        { children }
      </UserContext.Provider>
    );
  };


  //je m'assure qu'un message d'avertissement s'affiche lorsque
  // la prop n'est pas fournie.
  UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  //j'export mon useContext
  export const useUser = () => useContext(UserContext);
  
  export default UserProvider;