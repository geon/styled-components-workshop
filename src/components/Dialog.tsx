import * as React from "react";
import styled from "styled-components";
import { PresetButton } from "../components/PresetButton";

const Style = styled.div`
	border-radius: 5px;
	background: #ddd;
	width: 200px;
	padding: 10px;
`;

interface DialogProps {
	readonly children: React.ReactNode;
}

export function Dialog(props: DialogProps) {
	return (
		<Style>
			{props.children}
			<PresetButton>Cancel</PresetButton>
			<PresetButton preset="primary">OK</PresetButton>
		</Style>
	);
}
