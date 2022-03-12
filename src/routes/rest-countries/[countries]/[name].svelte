<script lang="ts">
	import type { Country, Currencies, Languages } from "$lib/types/country";
	export let country: Country;

	const flattenLanguages = (languages: Languages) => {
		let flattened = Object.keys(languages).reduce((prev, curr) => prev.concat(languages[curr]), []);

		return flattened;
	};

	const flattenCurrencies = (currencies: Currencies) => {
		let flattened = Object.keys(currencies).reduce(
			(prev, curr) => prev.concat(currencies[curr].name),
			[]
		);

		return flattened;
	};
</script>

<div class="body">
	<div class="country">
		<div class="country-flag-container">
			<img src={country.flags.svg} alt="flag" />
		</div>
		<div class="country-text-container">
			<h1>{country.name.common}</h1>
			<div class="country-text">
				<p>
					<strong>Native Name:</strong>
					{country.name.nativeName[`${Object.keys(country.name.nativeName)[0]}`].official}
				</p>
				<p><strong>Population:</strong> {country.population}</p>
				<p><strong>Region:</strong> {country.region}</p>
				<p><strong>Sub Region:</strong> {country.subregion}</p>
				<p><strong>Capital:</strong> {country.capital}</p>
				<p><strong>Top Level Domain:</strong> {country.tld}</p>
				<p><strong>Currencies:</strong> {flattenCurrencies(country.currencies).join(", ")}</p>
				<p><strong>Languages:</strong> {flattenLanguages(country.languages).join(", ")}</p>
			</div>
			{#if country.borders?.length}
				<p><strong>Border Countries</strong>{country.borders.join(", ")}</p>
			{/if}
		</div>
	</div>
</div>

<style>
	.country {
		display: flex;
		margin: auto;
		width: 90vw;
	}

	.country-text-container,
	.country-flag-container {
		flex: 1 1 0;
		margin: 2rem;
	}

	img {
		width: 100%;
	}

	.country-text {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
