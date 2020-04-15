import actionTypes from '../constant';

const initialState = {
  todo: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
        // console.log(state)
      state.todo.push({
        id: Math.random()
          .toString(36)
          .slice(2),
        todo: action.payload,
      });
      return {
        ...state,
      };
    }
    case actionTypes.GET_TODO: {
      return state;
    }
    case actionTypes.DELETE_TODO: {
        var index = state.todo
        .map(x => {
            return x.id;
        })
        .indexOf(action.payload);
         state.todo.splice(index);
        console.log("Delete Todo",state)
      return {
        ...state
      };
    }
 
    default : {
        return state
    }
  }
};
