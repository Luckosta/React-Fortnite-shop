import { useReducer } from 'react';
import { createContext } from 'react';
import reducer from './reducer';
import { API_URL, API_KEY } from './config';

export const MainContext = createContext();

const initialState = {
   goods: [],
   loading: true,
   order: [],
   isBasketShow: false,
   alertName: '',
   response: {},
};

export const ContextProvider = ({ children }) => {
   const [values, dispatch] = useReducer(reducer, initialState);

   values.closeAlert = () => {
      dispatch({ type: 'CLOSE_ALERT' });
   };

   values.removeFromBasket = (itemId) => {
      dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } });
   };

   values.plusQuantity = (itemId) => {
      dispatch({ type: 'PLUS_QUANTITY', payload: { id: itemId } });
   };

   values.minusQuantity = (itemId) => {
      dispatch({ type: 'MINUS_QUANTITY', payload: { id: itemId } });
   };

   values.handleBasketShow = () => {
      dispatch({ type: 'HANDLE_BASKET_SHOW' });
   };

   values.addToBasket = (item) => {
      dispatch({ type: 'ADD_TO_BASKET', payload: item });
   };
 
	values.setGoods = (data) => {
      dispatch({ type: 'SET_GOODS', payload: data });
   };

   return (
      <MainContext.Provider value={values}>{children}</MainContext.Provider>
   );
};


