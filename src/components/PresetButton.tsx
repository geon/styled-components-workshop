import React from "react";
import Color = require("color");
import { ConfigurableButton } from "./ConfigurableButton";

const presets = {
	default: {
		buttonColor: new Color("#eef8ff"),
		bulgeiness: 0.04,
	},
	dark: {
		buttonColor: new Color("#333"),
		bulgeiness: 0.2,
	},
	danger: {
		buttonColor: new Color("#ff3716"),
		bulgeiness: 0.2,
	},
	warning: {
		buttonColor: new Color("#ff8d16"),
		bulgeiness: 0.2,
	},
};

export const presetNames = Object.keys(
	presets,
) as readonly (keyof typeof presets)[];

interface PresetButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	preset?: typeof presetNames[0];
}

export const PresetButton = ({ preset, ...props }: PresetButtonProps) => (
	<ConfigurableButton
		{...props}
		{...presets[preset || "default"]}
	></ConfigurableButton>
);
