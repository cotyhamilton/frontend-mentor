<script lang="ts">
</script>

<div class="body">
	<nav>
		<a href="/rest-countries"><h1>Where in the world?</h1></a>
		<button>🌜 Dark Mode</button>
	</nav>
	<slot />
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
	.body {
		background-color: hsl(0, 0%, 98%);
		font-family: "Nunito Sans", sans-serif;
		min-height: 100vh;
	}

	nav {
		background-color: white;
		display: flex;
		justify-content: space-between;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
</style>
