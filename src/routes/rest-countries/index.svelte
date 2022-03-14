<script lang="ts" context="module">
	export async function load({ fetch }) {
		const res = await fetch("/rest-countries/countries.json");
		if (res.ok) {
			const countries = await res.json();
			const regions = countries
				.map((country) => country.region)
				.filter((value, index, self) => self.indexOf(value) === index)
				.sort();
			return {
				props: {
					countries,
					regions
				}
			};
		}
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script lang="ts">
	import { fly } from "svelte/transition";
	import type { Country } from "$lib/types/country";
	export let countries: Country[];
	export let regions: string[];

	let dropdownOpen = false;
	// start with fewer countries, above the fold
	let filteredCountries = countries.slice(0, 250); // not really, will fix l8r
	let searchParameter = "";
	let selectedRegion = null;
	let firstLoad = true;
	let y;

	const toggleDropdown = () => {
		dropdownOpen = !dropdownOpen;
	};

	const filterCountriesBySearch = (value) => {
		// reset filtered region
		if (selectedRegion) {
			selectedRegion = null;
			if (dropdownOpen) {
				dropdownOpen = false;
			}
		}
		// reset countries, not on first load
		if (!value) {
			if (!firstLoad) {
				filteredCountries = countries;
			}
		} else {
			if (firstLoad) {
				firstLoad = false;
			}
			filteredCountries = countries.filter((country) =>
				country.name.common.toLowerCase().includes(value.toLowerCase())
			);
		}
	};

	const filterCountriesByRegion = (value) => {
		// reset countries, not on first load
		if (!value) {
			if (!firstLoad) {
				filteredCountries = countries;
			}
		} else {
			if (firstLoad) {
				firstLoad = false;
			}
			filteredCountries = countries.filter((country) => country.region === value);
		}
	};

	$: filterCountriesBySearch(searchParameter);
	$: filterCountriesByRegion(selectedRegion);
	// load all countries after first scroll
	$: if (y && firstLoad) {
		firstLoad = false;
		filteredCountries = countries;
	}
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
	<title>Frontend Mentor | Rest Countries</title>
</svelte:head>

<div class="body">
	<div class="search-and-filter">
		<div class="search-container">
			<input type="text" placeholder="Search for a country..." bind:value={searchParameter} />
			<svg aria-hidden="true" class="search-image" width="18" height="18" viewBox="0 0 18 18"
				><path
					fill="#a9a9a9"
					d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"
				/></svg
			>
		</div>
		<div>
			{#if selectedRegion}
				<button class="dropdown-button" on:click={toggleDropdown}>{selectedRegion}</button>
			{:else}
				<button class="dropdown-button" on:click={toggleDropdown}
					>Filter by Region <span class="down-arrow">&or;</span></button
				>
			{/if}
			{#if dropdownOpen}
				<ul class="dropdown-list">
					{#each regions as region}
						{#if selectedRegion === region}
							<li class="dropdown-item" on:click={() => (selectedRegion = region)}>
								<strong>{region}</strong>
							</li>
						{:else}
							<li class="dropdown-item" on:click={() => (selectedRegion = region)}>{region}</li>
						{/if}
					{/each}
				</ul>
			{/if}
		</div>
	</div>
	<div class="countries" in:fly={{ y: -5, duration: 500 }}>
		{#each filteredCountries as country}
			<a href={`/rest-countries/countries/${country.cca3}`}>
				<div class="country">
					<img src={country.flags.svg} alt="flag" height="132" width="250" />
					<div class="country-text">
						<h2>{country.name.common}</h2>
						<p><strong>Population: </strong>{new Intl.NumberFormat().format(country.population)}</p>
						<p><strong>Region: </strong>{country.region}</p>
						<p><strong>Capital: </strong>{country.capital}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.search-and-filter {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.search-container {
		margin-top: 2rem;
		position: relative;
	}

	input[type="text"] {
		background-color: var(--element-background-color);
		box-sizing: border-box;
		border: none;
		border-radius: 0.25rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		color: var(--text-color);
		padding: 15px 20px 15px 4rem;
		font-size: 16px;
		margin: 0;
		max-width: 90vw;
		outline: none;
		width: 400px;
	}

	.search-image {
		left: 2rem;
		position: absolute;
		top: 50%;
		right: auto;
		margin-top: -9px;
		pointer-events: none;
	}

	.dropdown-button {
		background-color: var(--element-background-color);
		border: none;
		border-radius: 0.25rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		box-sizing: border-box;
		color: var(--text-color);
		cursor: pointer;
		font-size: 16px;
		margin: 2rem 0 0 0;
		padding: 14px 20px;
		text-align: start;
		width: 12rem;
	}

	.down-arrow {
		margin-left: 1rem;
	}

	.dropdown-list {
		background-color: var(--element-background-color);
		border: 1px solid var(--element-background-color);
		border-radius: 0.25rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		color: var(--text-color);
		font-size: 16px;
		padding: 14px 20px;
		position: absolute;
		width: 9.4rem;
		z-index: 500;
	}

	.dropdown-item {
		cursor: pointer;
		list-style: none;
		padding: 0.125rem 0;
	}

	.countries {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: space-between;
	}

	.countries a {
		color: inherit;
		margin: auto;
		text-decoration: none;
	}

	.country {
		background-color: var(--element-background-color);
		border-radius: 0.25rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		margin: 2rem 0 0 0;
		overflow: hidden;
		width: 250px;
	}

	.country img {
		object-fit: cover;
	}

	.country-text h2 {
		font-size: 1.2rem;
		margin-top: 0.25rem;
	}

	.country-text p {
		margin: 0.25rem 0;
	}

	.country-text {
		font-size: 0.8rem;
		padding: 1rem;
	}
</style>
