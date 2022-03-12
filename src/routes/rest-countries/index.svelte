<script lang="ts" context="module">
	export async function load({ fetch }) {
		const res = await fetch("rest-countries/countries.json");
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
	import { goto } from "$app/navigation";
	export let countries;
	export let regions;
</script>

<div class="body">
	<div class="search-and-filter">
		<input type="search" />
		<select name="filter">
			{#each regions as region}
				<option value={region}>{region}</option>
			{/each}
		</select>
	</div>
	<div class="countries">
		{#each countries as country}
			<div class="country" on:click={() => goto(`rest-countries/countries/${country.name.common}`)}>
				<img src={country.flags.svg} alt="flag" width="250" />
				<div class="country-text">
					<h2>{country.name.common}</h2>
					<p><strong>Population: </strong>{country.population}</p>
					<p><strong>Region: </strong>{country.region}</p>
					<p><strong>Capital: </strong>{country.capital}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	/* .body {

    } */

	.search-and-filter {
		display: flex;
		justify-content: space-between;
	}

	.countries {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin: auto;
		width: 90vw;
	}

	.country {
		background-color: hsl(0, 0%, 100%);
		border-radius: 0.5rem;
		margin: 2em 1em;
		overflow: hidden;
		width: 250px;
	}

	.country-text {
		padding: 1rem;
	}
</style>
