import * as React from "react";
import { Page } from "../types";
import { BetterDialog } from "../components/BetterDialog";

export const betterDialogPage: Page = {
	title: "Better Dialog",
	component: () => {
		return (
			<BetterDialog>
				<h1>This is better</h1>
				<p>Can you feel it?</p>
			</BetterDialog>
		);
	},
};
