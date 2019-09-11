import * as React from "react";
import { Page } from "../types";
import { Dialog } from "../components/Dialog";

export const dialogPage: Page = {
	title: "Dialog",
	component: () => {
		return (
			<Dialog>
				<h1>This is a dialog</h1>
				<p>Do you feel like clicking a button?</p>
			</Dialog>
		);
	},
};
