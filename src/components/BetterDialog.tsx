import * as React from "react";
import styled from "styled-components";
import { PresetButton } from "./PresetButton";
import { ConfigurableButton } from "./ConfigurableButton";

const Style = styled.div`
	border-radius: 5px;
	background: #ddd;
	width: 200px;
	padding: 10px;

	> * {
		margin: 0;
		margin-top: 10px;

		&:first-child {
			margin-top: 0;
		}
	}

	// wtf
	> .button-row {
		display: flex;

		// wtf
		> ${ConfigurableButton} {
			flex-grow: 1;
			margin-left: 10px;
			&:first-child {
				margin-left: 0;
			}
		}
	}
`;

interface DialogProps {
	readonly children: React.ReactNode;
}

export function BetterDialog(props: DialogProps) {
	return (
		<Style>
			{props.children}
			<div className="button-row">
				<PresetButton>Cancel</PresetButton>
				<PresetButton preset="primary">OK</PresetButton>
			</div>
		</Style>
	);
}
