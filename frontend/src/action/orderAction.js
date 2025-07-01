
export const createOrder = (orderData) => {
  return {
    type: "CREATE_ORDER",
    payload: orderData,
  };
};

export const getOrders = () => {
  return {
    type: "GET_ORDERS",
  };
};
