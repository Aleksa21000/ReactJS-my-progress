import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div onClick={props.onBackdropClick} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalDestination = document.querySelector("#overlays");

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onBackdropClick={props.onModalClose} />, portalDestination)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalDestination
            )}
        </>
    );
};

export default Modal;
