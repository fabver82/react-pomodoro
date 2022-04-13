import React from "react";
import ReactDOM from "react-dom";
import "../modal.css";

const Modal = ({isShowing, hide}) =>
    isShowing
        ? ReactDOM.createPortal(
              <div className="modal">
                  <div className="modal-content">
                      <span className="close" onClick={hide}>
                          &times;
                      </span>
                      <p>Break Time</p>
                  </div>
              </div>,
              document.body,
          )
        : null;
export default Modal;
