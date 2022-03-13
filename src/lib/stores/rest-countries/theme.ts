import { writable } from "svelte/store";
import { browser } from "$app/env";

const THEME_KEY = "rest-countries-theme";
let defaultTheme = "";

if (browser) {
	defaultTheme = localStorage.getItem(THEME_KEY) || defaultTheme;
}

function createTheme() {
	const { subscribe, set } = writable(defaultTheme);

	return {
		subscribe,
		setLight: () => set(""),
		setDark: () => set("dark")
	};
}

export const theme = createTheme();

if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem(THEME_KEY, value);
	});
}
