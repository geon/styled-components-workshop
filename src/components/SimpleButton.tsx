import styled from "styled-components";
import Color = require("color");

const buttonColor = new Color("#eef8ff");
const bulgeiness = 0.06;
// const buttonColor = new Color("#333");
// const bulgeiness = 0.5;

export const SimpleButton = styled.button`
	color: ${buttonColor.isLight() ? "black" : "white"};
	background: ${buttonColor.toString()}
		linear-gradient(
			to bottom,
			${buttonColor.lighten(bulgeiness).toString()},
			${buttonColor.toString()},
			${buttonColor.darken(bulgeiness).toString()}
		);
	&:hover {
		background: ${buttonColor.toString()};
	}
	border: 1px solid ${buttonColor.darken(bulgeiness * 2).toString()};
	padding: 0.5em 1em;
	border-radius: 5px;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
`;
