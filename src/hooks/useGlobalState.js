import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const useGlobalState = () => useContext(GlobalContext);

export default useGlobalState;
