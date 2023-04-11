import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
	const [allowToggle, setAllowToggle] = useState(false);
	const [showParagraph, setShowParagraph] = useState(false);

	const allowToggleHandler = () => {
		setAllowToggle(true);
	};

	const showParagraphHandler = useCallback(() => {
		if (allowToggle) {
			setShowParagraph((prevShowParagraph) => !prevShowParagraph);
		}
	}, [allowToggle]);

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<DemoOutput show={showParagraph} />
			<Button onClick={allowToggleHandler}>Allow toggling</Button>
			<Button onClick={showParagraphHandler}>Show Paragraph</Button>
		</div>
	);
}

export default App;
