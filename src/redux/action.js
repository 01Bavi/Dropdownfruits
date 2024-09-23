
export const createForm = (data, token) => {
    return {
      type: 'CREATE_FORM',
      payload: { data, token },
    };
  };
  