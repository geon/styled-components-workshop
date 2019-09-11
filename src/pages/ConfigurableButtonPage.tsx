import * as React from "react";
import { Page } from "../types";
import { ConfigurableButton } from "../components/ConfigurableButton";
import Color = require("color");

export const configurableButtonPage: Page = {
	title: "Configurable Button",
	component: () => (
		<ConfigurableButton buttonColor={new Color("green")}>
			Configurable Button
		</ConfigurableButton>
	),
};
