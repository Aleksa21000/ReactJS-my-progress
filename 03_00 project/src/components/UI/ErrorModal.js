import React from "react";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";

import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onErrorCancel} />;
};

const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button onClick={props.onErrorCancel}>Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onErrorCancel={props.onErrorCancel} />, document.getElementById("backdrop-root"))}
			{ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onErrorCancel={props.onErrorCancel} />, document.getElementById("overlay-root"))}
		</>
	);
};

export default ErrorModal;
