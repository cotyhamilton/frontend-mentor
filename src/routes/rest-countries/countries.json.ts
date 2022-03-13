export async function get() {
	const res = await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags,population,region,capital");
	return {
		body: await res.json()
	};
}
