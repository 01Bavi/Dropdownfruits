
const initialState = {
    forms: []
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_FORM':
        return {
          ...state,
          forms: [...state.forms, action.payload.data],
        };
      default:
        return state;
    }
  };
  
  export default formReducer;
  