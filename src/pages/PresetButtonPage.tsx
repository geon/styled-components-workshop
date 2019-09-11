import * as React from "react";
import { useState } from "react";
import { Page } from "../types";
import { PresetButton, presetNames } from "../components/PresetButton";

export const presetButtonPage: Page = {
	title: "Preset Button",
	component: () => {
		const [presetIndex, setPresetIndex] = useState<number>(0);
		return (
			<PresetButton
				preset={presetNames[presetIndex]}
				onClick={() => setPresetIndex((presetIndex + 1) % presetNames.length)}
			>
				Preset: {presetNames[presetIndex]}
			</PresetButton>
		);
	},
};
