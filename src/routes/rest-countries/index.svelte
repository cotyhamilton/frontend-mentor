<script lang="ts" context="module">
	export async function load({ fetch }) {
		const res = await fetch("/rest-countries/countries.json");
		if (res.ok) {
			const countries = await res.json();
			const regions = countries
				.map((country) => country.region)
				.filter((value, index, self) => self.indexOf(value) === index);
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
	import type { Country } from "$lib/types/country";
	export let countries: Country[];
	export let regions: string[];

	let dropdownOpen = false;
	let filteredCountries = countries;
	let searchParameter = "";
	let selectedRegion = null;

	const toggleDropdown = () => {
		dropdownOpen = !dropdownOpen;
	};

	const filterCountriesBySearch = (value) => {
		if (!value) {
			filteredCountries = countries;
		} else {
			filteredCountries = countries.filter((country) =>
				country.name.common.toLowerCase().includes(value.toLowerCase())
			);
		}
	};

	const filterCountriesByRegion = (value) => {
		if (!value) {
			filteredCountries = countries;
		} else {
			filteredCountries = countries.filter((country) => country.region === value);
		}
	};

	$: filterCountriesBySearch(searchParameter);
	$: filterCountriesByRegion(selectedRegion);
</script>

<svelte:head>
	<title>Frontend Mentor | Rest Countries</title>
</svelte:head>

<div class="body">
	<div class="search-and-filter">
		<div class="search-container">
			<input
				type="search"
				size="40"
				placeholder="Search for a country..."
				bind:value={searchParameter}
			/>
			<svg aria-hidden="true" class="search-image" width="18" height="18" viewBox="0 0 18 18"
				><path
					fill="#a9a9a9"
					d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"
				/></svg
			>
		</div>
		<div>
			<button class="dropdown-button" on:click={toggleDropdown}> Filter by Region </button>
			{#if dropdownOpen}
				<ul class="dropdown-list">
					{#each regions as region}
						<li class="dropdown-item" on:click={() => (selectedRegion = region)}>{region}</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
	<div class="countries">
		{#each filteredCountries as country}
			<a href={`/rest-countries/countries/${country.name.common}`}>
				<div class="country">
					<img src={country.flags.svg} alt="flag" width="250" />
					<div class="country-text">
						<h2>{country.name.common}</h2>
						<p><strong>Population: </strong>{country.population}</p>
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

	input[type="search"] {
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		padding: 12px 20px 12px 4rem;
		font-size: 16px;
		outline: none;
		margin: 0;
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
		background-color: white;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		box-sizing: border-box;
		cursor: pointer;
		font-size: 16px;
		margin: 2rem 0 0 0;
		padding: 14px 20px;
		width: 12rem;
	}

	.dropdown-list {
		background-color: white;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		font-size: 16px;
		padding: 14px 20px;
		position: absolute;
		width: 9.4rem;
		z-index: 500;
	}

	.dropdown-item {
		list-style: none;
		padding: 0.125rem 0;
	}

	.countries {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.country {
		background-color: hsl(0, 0%, 100%);
		border-radius: 0.5rem;
		margin: 2rem 0;
		overflow: hidden;
		width: 250px;
	}

	.country-text {
		padding: 1rem;
	}
</style>
