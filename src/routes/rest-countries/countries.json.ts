export async function get() {
	const res = await fetch("https://restcountries.com/v3.1/all");
	return {
		body: await res.json()
	};
}
