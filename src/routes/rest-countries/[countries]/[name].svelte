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
					{#if country.name.nativeName}
						<strong>Native Name:</strong>
						{country.name.nativeName[`${Object.keys(country.name.nativeName)[0]}`].official}
					{:else}
						<strong>Official Name:</strong>
						{country.name.official}
					{/if}
				</p>
				<p><strong>Population:</strong> {country.population}</p>
				<p><strong>Region:</strong> {country.region}</p>
				{#if country.subregion}
					<p><strong>Sub Region:</strong> {country.subregion}</p>
				{/if}
				{#if country.capital}
					<p><strong>Capital:</strong> {country.capital}</p>
				{/if}
				<p><strong>Top Level Domain:</strong> {country.tld}</p>
				{#if country.currencies}
					<p><strong>Currencies:</strong> {flattenCurrencies(country.currencies).join(", ")}</p>
				{/if}
				{#if country.languages}
					<p><strong>Languages:</strong> {flattenLanguages(country.languages).join(", ")}</p>
				{/if}
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
