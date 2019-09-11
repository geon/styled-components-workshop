import * as React from "react";
import { Page } from "../types";
import { StructuredDialog } from "../components/StructuredDialog";

export const structuredDialogPage: Page = {
	title: "Structured Dialog",
	component: () => {
		return (
			<StructuredDialog>
				<h1>This is structured</h1>
				<p>Can you feel it?</p>
			</StructuredDialog>
		);
	},
};
