import {useCallback, useReducer} from "react"
import * as actionTypes from "./actionTypes";
import { KeepAliveContext } from "./KeepAliveContext";
import keepAliveReducer from "./keepAliveReducer"

function KeepAlive(props) {
  const [ keepAliveStates, dispatch ] = useReducer(keepAliveReducer, {});
  const setKeepAliveState = useCallback(({ keepAliveId, reactElement }) => {
    if (!keepAliveStates[keepAliveId]) {
      dispatch({
        type: actionTypes.CREATING,
        payload: {
          keepAliveId,
          reactElement
        }
      })
    }
  }, [keepAliveStates])

  return (
    <KeepAliveContext.Provider
      value={{keepAliveStates, setKeepAliveState, dispatch}}>
        { props.children }
        {
          Object.values(keepAliveStates).map(({keepAliveId,reactElement}) => (
            <div key={ keepAliveId } ref={node => {
              if (node && !keepAliveStates[keepAliveId].nodes) {
                dispatch({
                  type: actionTypes.CREATED,
                  payload: {
                    keepAliveId,
                    nodes: [...node.childNodes]
                  }
                })
              }
            }}>{reactElement}</div>
          ))
        }
    </KeepAliveContext.Provider>
  )
}

export default KeepAlive;