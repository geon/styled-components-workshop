import * as React from "react";
import { SimpleButton } from "../components/SimpleButton";
import { Page } from "../types";

export const simpleButtonPage: Page = {
	title: "Simple Button",
	component: () => <SimpleButton>Simple Button</SimpleButton>,
};
