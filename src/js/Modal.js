import React from "react";
import "../modal.css";

export default function Modal(props) {
    if (!props.show) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <p>Break Time</p>
            </div>
        </div>
    );
}
