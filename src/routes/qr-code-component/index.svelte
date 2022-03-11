<svelte:head>
	<link rel="icon" type="image/png" sizes="32x32" href="qr-code-component/favicon-32x32.png" />
	<title>Frontend Mentor | QR code component</title>
</svelte:head>

<div class="body">
	<div class="flex">
		<div class="card">
			<div class="card-image-container">
				<img src="qr-code-component/image-qr-code.png" alt="qr-code" />
			</div>
			<div class="card-text-container">
				<div class="card-text-header">
					<h2>Improve your front-end skills by building projects</h2>
				</div>
				<div class="card-text-body">
					Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap");
	.body {
		background-color: hsl(212, 45%, 89%);
		font-family: "Outfit", sans-serif;
		height: 100vh;
		text-align: center;
	}
	.flex {
		align-items: center;
		display: flex;
		height: 100vh;
		justify-content: center;
	}
	.card {
		background-color: hsl(0, 0%, 100%);
		border-radius: 1.5rem;
		box-shadow: 0 12px 50px -6px rgb(0 0 0 / 0.125);
		padding: 1.2rem;
		padding-bottom: 3rem;
		width: 300px;
	}
	img {
		border-radius: 0.8rem;
		width: 100%;
	}
	.card-text-container {
		padding: 0 0.8rem;
	}
	.card-text-header {
		color: hsl(218, 44%, 22%);
		font-weight: 700;
	}
	.card-text-body {
		color: hsl(220, 15%, 55%);
		font-size: 15px;
		padding: 0 8px;
	}
</style>
