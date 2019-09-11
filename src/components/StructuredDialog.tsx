import * as React from "react";
import styled from "styled-components";
import { WrappedPresetButton } from "./WrappedPresetButton";

const ButtonRow = styled.div`
	display: flex;

	> ${WrappedPresetButton} {
		flex-grow: 1;

		margin-left: 10px;
		&:first-child {
			margin-left: 0;
		}
	}
`;

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
`;

interface DialogProps {
	readonly children: React.ReactNode;
}

export function StructuredDialog(props: DialogProps) {
	return (
		<Style>
			{props.children}
			<ButtonRow>
				<WrappedPresetButton>Cancel</WrappedPresetButton>
				<WrappedPresetButton preset="primary">OK</WrappedPresetButton>
			</ButtonRow>
		</Style>
	);
}
