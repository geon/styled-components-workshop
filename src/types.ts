export interface Page {
	readonly title: string;
	readonly component: () => JSX.Element;
}
