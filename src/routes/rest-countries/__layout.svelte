<script lang="ts">
	import { theme } from "$lib/stores/rest-countries/theme";

	const toggleTheme = () => {
		if (!$theme) {
			theme.setDark();
		} else {
			theme.setLight();
		}
	};
</script>

<div class="body {$theme}">
	<nav>
		<div class="container">
			<div class="nav-content">
				<a href="/rest-countries"><h1>Where in the world?</h1></a>
				{#if $theme === "dark"}
					<button on:click={toggleTheme}>🌞 Light Mode</button>
				{:else}
					<button on:click={toggleTheme}>🌜 Dark Mode</button>
				{/if}
			</div>
		</div>
	</nav>
	<div class="container">
		<slot />
	</div>
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
	@import url("/static/rest-countries/stylesheet.css");

	.body {
		background-color: var(--page-background-color);
		color: var(--text-color);
		font-family: "Nunito Sans", sans-serif;
		min-height: 100vh;
		padding-bottom: 5rem;
	}

	.container {
		margin: auto;
		width: 90vw;
	}

	nav {
		background-color: var(--element-background-color);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.nav-content {
		display: flex;
		justify-content: space-between;
	}

	a {
		color: var(--text-color);
		text-decoration: none;
	}

	button {
		background-color: var(--element-background-color);
		border: none;
		color: var(--text-color);
		cursor: pointer;
		font-size: 1rem;
	}
</style>
