export async function get({ params }) {
	let country;
	let countries;

	// sometimes the api returns invalid json on the first preferred route
	try {
		const res = await fetch(
			`https://restcountries.com/v3.1/alpha/${params.code}?fields=name,cca3,flags,flag,currencies,region,subregion,population,tld,languages,capital,borders`
		);
		const data = await res.json();
		country = data;
	} catch (error) {
		const res = await fetch(
			"https://restcountries.com/v3.1/all?fields=name,cca3,flags,flag,currencies,region,subregion,population,tld,languages,capital,borders"
		);
		const data = await res.json();
		countries = data;
		country = data.find((c) => c.cca3 === params.code);
	}

	// update borders with name of country
	if (country.borders) {
		if (!countries) {
			const res = await fetch(`https://restcountries.com/v3.1/all?fields=name,cca3`);
			const data = await res.json();
			countries = data;
		}
		const borders = countries
			.filter((c) => country.borders.includes(c.cca3))
			.map((c) => ({ name: c.name.common, cca3: c.cca3 }));
		country.borders = borders;
	}

	return {
		body: { country }
	};
}
