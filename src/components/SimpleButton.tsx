import styled from "styled-components";
import Color = require("color");

const buttonColor = new Color("#25f");
const borderColor = buttonColor.darken(0.2);

export const SimpleButton = styled.button`
	color: ${buttonColor.isLight() ? "black" : "white"};

	background: ${buttonColor.toString()};
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

	&:hover {
		box-shadow: none;
	}

	&:active {
		background: ${borderColor.toString()};
	}

	outline: none;

	border: 1px solid ${borderColor.toString()};
	border-bottom-width: 2px;

	padding: 0.5em 1em;
	border-radius: 5px;
`;
