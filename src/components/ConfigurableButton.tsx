import styled from "styled-components";
import Color = require("color");

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	readonly buttonColor: Color;
	readonly bulgeiness?: number;
}

export const ConfigurableButton = styled.button`
	color: ${(props: ButtonProps) =>
		props.buttonColor.isLight() ? "black" : "white"};
	background: ${(props: ButtonProps) => props.buttonColor.toString()}
		linear-gradient(
			to bottom,
			${(props: ButtonProps) =>
				props.buttonColor.lighten(props.bulgeiness || 0).toString()},
			${(props: ButtonProps) => props.buttonColor.toString()},
			${(props: ButtonProps) =>
				props.buttonColor.darken(props.bulgeiness || 0).toString()}
		);
	&:hover {
		background: ${(props: ButtonProps) => props.buttonColor.toString()};
	}
	border: 1px solid
		${(props: ButtonProps) =>
			props.buttonColor.darken((props.bulgeiness || 0) * 2).toString()};
	padding: 0.5em 1em;
	border-radius: 5px;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
`;
