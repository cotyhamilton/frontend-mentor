<script lang="ts">
	import { goto } from "$app/navigation";
	import { fly } from "svelte/transition";
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
	{#if !country.status}
		<title>Frontend Mentor | {country?.flag ? country.flag : ""} {country.name.common}</title>
	{:else}
		<title>Frontend Mentor | Not Found</title>
	{/if}
</svelte:head>

<div class="body">
	<button class="back-button" on:click={() => window.history.back()}
		><span class="back-arrow">←</span>Back</button
	>
	{#if !country.status}
		<div class="country" in:fly={{ y: -5, duration: 500 }}>
			<div class="country-flag-container">
				<img src={country.flags.svg} alt="flag" />
			</div>
			<div class="country-text-container">
				<h1>{country.name.common}</h1>
				<div class="country-text">
					<p>
						{#if Object.keys(country.name?.nativeName).length}
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
					{#if country?.capital.length}
						<p><strong>Capital:</strong> {country.capital}</p>
					{/if}
					<p><strong>Top Level Domain:</strong> {country.tld}</p>
					{#if Object.keys(country.currencies).length > 0}
						<p><strong>Currencies:</strong> {flattenCurrencies(country.currencies).join(", ")}</p>
					{/if}
					{#if Object.keys(country.languages).length}
						<p><strong>Languages:</strong> {flattenLanguages(country.languages).join(", ")}</p>
					{/if}
				</div>
				{#if country.borders?.length}
					<div class="border-countries">
						<strong>Border Countries: </strong>
						{#each country.borders as border}
							<a href={`/rest-countries/countries/${border.cca3}`}>
								<div class="border-country">{border.name}</div>
							</a>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{:else}
		<div style="text-align: center;">
			<h1>Not Found</h1>
		</div>
	{/if}
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

	.border-countries a {
		color: inherit;
		text-decoration: none;
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
