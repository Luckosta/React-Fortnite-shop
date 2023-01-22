function reducer(state, { type, payload }) {
   switch (type) {
      case 'CLOSE_ALERT':
         return {
            ...state,
            alertName: '',
         };
      case 'REMOVE_FROM_BASKET':
         return {
            ...state,
            order: state.order.filter((item) => item.id !== payload.id),
         };
      case 'PLUS_QUANTITY':
         return {
            ...state,
            order: state.order.map((item) => {
               if (item.id === payload.id) {
                  const newQuantity = item.quantity + 1;
                  return {
                     ...item,
                     quantity: newQuantity,
                  };
               } else return item;
            }),
         };
      case 'MINUS_QUANTITY':
         return {
            ...state,
            order: state.order.map((item) => {
               if (item.id === payload.id) {
                  if (item.quantity > 0) {
                     const newQuantity = item.quantity - 1;
                     return {
                        ...item,
                        quantity: newQuantity,
                     };
                  } else return item;
               } else return item;
            }),
         };
      case 'HANDLE_BASKET_SHOW':
         return {
            ...state,
            isBasketShow: !state.isBasketShow,
         };
      case 'ADD_TO_BASKET': {
         const itemIndex = state.order.findIndex(
            (element) => element.id === payload.id
         );
         let newOrder = null;
         if (itemIndex < 0) {
            const newItem = {
               ...payload,
               quantity: 1,
            };
            newOrder = [...state.order, newItem];
         } else {
            newOrder = state.order.map((orderItem, index) => {
               if (index === itemIndex) {
                  return {
                     ...orderItem,
                     quantity: orderItem.quantity + 1,
                  };
               } else {
                  return orderItem;
               }
            });
         }
         return {
            ...state,
            order: newOrder,
            alertName: payload.name,
         };
      }
      default:
         return state;
   }
}

export default reducer;
