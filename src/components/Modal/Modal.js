import React from 'react';
import "./Modal.css"

const Modal = ({isModalOpen,setIsModalOpen}) => {

    return (
        <div id="modal">
            <div id="modal-body">
                <button onClick={()=> setIsModalOpen(false)} id="modal-close">Close</button>
            </div>
        </div>
    );
};

export default Modal;
