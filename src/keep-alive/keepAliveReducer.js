import * as actionTypes from "./actionTypes";
function keepAliveReducer(state, action) {
  const { type, payload } = action;
  const { keepAliveId, reactElement, nodes } = payload;
  switch (type) {
    // 组件挂载时
    case actionTypes.CREATING:
      return {
        ...state,
        [keepAliveId]: {
          keepAliveId,
          reactElement,
          status: type,
          nodes: null,
        },
      };
    // 组件挂载后
    case actionTypes.CREATED:
      return {
        ...state,
        [keepAliveId]: {
          ...state[keepAliveId],
          status: type,
          nodes,
        },
      };
    default:
      break;
  }
}

export default keepAliveReducer;
