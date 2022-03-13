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

<svelte:head>
	<title>Frontend Mentor | {country.name.common}</title>
</svelte:head>

<div class="body">
	<a href="/rest-countries">
		<button class="back-button"><span class="back-arrow">←</span>Back</button>
	</a>
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
				<p><strong>Population:</strong> {new Intl.NumberFormat().format(country.population)}</p>
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
				<div class="border-countries">
					<strong>Border Countries: </strong>
					{#each country.borders as border}
						<div class="border-country">{border}</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.back-button {
		background-color: var(--element-background-color);
		border: none;
		border-radius: 0.25rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		color: var(--text-color);
		cursor: pointer;
		font-size: 1rem;
		margin: 2rem 0;
		padding: 1rem 2.5rem;
	}

	.back-arrow {
		margin-right: 1rem;
	}

	.country {
		display: flex;
		flex-wrap: wrap;
		gap: 8rem;
		justify-content: space-between;
	}

	.country-text-container,
	.country-flag-container {
		flex: auto;
		width: 400px;
		margin: auto;
		max-width: 70vw;
	}

	img {
		width: 100%;
	}

	.country-text {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.country-text p {
		margin-bottom: 0.25rem;
		margin-top: 0.25rem;
	}

	.border-countries {
		margin-top: 4rem;
	}

	.border-country {
		background-color: var(--element-background-color);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		border-radius: 0.25rem;
		display: inline-block;
		margin: 0.25rem 0.25rem;
		padding: 0.25rem 1rem;
	}
</style>
