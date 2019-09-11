import styled from "styled-components";
import Color = require("color");

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	readonly buttonColor: Color;
}

export const ConfigurableButton = styled.button`
	color: ${(props: ButtonProps) =>
		props.buttonColor.isLight() ? "black" : "white"};

	background: ${(props: ButtonProps) => props.buttonColor.toString()};
	&:hover {
		background: ${(props: ButtonProps) =>
			props.buttonColor.darken(0.2).toString()};
	}

	border: 1px solid
		${(props: ButtonProps) => props.buttonColor.darken(0.2).toString()};
	border-bottom-width: 2px;

	padding: 0.5em 1em;
	border-radius: 5px;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
`;
