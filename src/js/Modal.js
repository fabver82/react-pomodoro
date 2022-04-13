import React, {useState} from "react";
import ReactDOM from "react-dom";
import "../modal.css";

const Modal = ({isShowing, hide, willRestart, setWillRestart}) => {
    function restart() {
        setWillRestart(true);
        hide();
    }
    return isShowing
        ? ReactDOM.createPortal(
              <div className="modal">
                  <div className="modal-content">
                      <span className="close" onClick={hide}>
                          &times;
                      </span>
                      <p>Break Time</p>
                      <button onClick={restart}>Restart Timer</button>
                  </div>
              </div>,
              document.body,
          )
        : willRestart;
};
export default Modal;
