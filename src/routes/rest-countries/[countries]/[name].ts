export async function get({ params }) {
	const res = await fetch(`https://restcountries.com/v3.1/name/${params.name}?fullText=true`);
	const countries = await res.json();
	return {
		body: { country: countries[0] }
	};
}
