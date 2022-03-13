<script lang="ts">
</script>

<div class="body">
	<nav>
		<div class="container">
			<div class="nav-content">
				<a href="/rest-countries"><h1>Where in the world?</h1></a>
				<button>🌜 Dark Mode</button>
			</div>
		</div>
	</nav>
	<div class="container">
		<slot />
	</div>
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
	.body {
		background-color: hsl(0, 0%, 98%);
		font-family: "Nunito Sans", sans-serif;
		min-height: 100vh;
	}

	.container {
		margin: auto;
		width: 90vw;
	}

	nav {
		background-color: white;
	}

	.nav-content {
		display: flex;
		justify-content: space-between;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
</style>
