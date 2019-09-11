import * as React from "react";
import { useState } from "react";
import { Page } from "./types";
import { simpleButtonPage } from "./pages/SimpleButtonPage";
import { configurableButtonPage } from "./pages/ConfigurableButtonPage";
import { presetButtonPage } from "./pages/PresetButtonPage";
import { dialogPage } from "./pages/DialogPage";

const pages: readonly Page[] = [
	simpleButtonPage,
	configurableButtonPage,
	presetButtonPage,
	dialogPage,
];

export function RootComponent() {
	const [pageIndex, setPageIndex] = useState<number>(0);
	const Component = pages[pageIndex].component;
	return (
		<>
			<button
				onClick={() => setPageIndex(pageIndex - 1)}
				disabled={pageIndex <= 0}
			>
				Prev
			</button>{" "}
			<button
				onClick={() => setPageIndex(pageIndex + 1)}
				disabled={pageIndex >= pages.length - 1}
			>
				Next
			</button>{" "}
			<button onClick={() => setPageIndex(pages.length - 1)}>Last</button>
			<hr></hr>
			<h1>{pages[pageIndex].title}</h1>
			<Component />
		</>
	);
}
