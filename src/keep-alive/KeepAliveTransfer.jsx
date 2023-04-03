import {  useContext, useEffect, useRef } from "react";
import { KeepAliveContext } from "./KeepAliveContext";

function keepAliveTransfer(KeepAliveComponent, keepAliveId) {
  return function (props) {
    const _ref = useRef(null);
    const {keepAliveStates, setKeepAliveState} = useContext(KeepAliveContext);

    // 当组件挂载完毕后
    useEffect(() => {
      const state = keepAliveStates[keepAliveId];
      if (state && state.nodes) {
        // 如果存在则渲染
        state.nodes.forEach(node => _ref.current.appendChild(node));
      } else {
        // 如果不存在，则首次渲染
        setKeepAliveState({
          keepAliveId:keepAliveId,
          reactElement: <KeepAliveComponent {...props}/>
        })
      }
    }, [ keepAliveStates, setKeepAliveState, props ])

    return (
      // <KeepAliveComponent {...props}/>
      <div ref={ _ref }></div>
    )
  }
}

export default keepAliveTransfer;