<script lang="ts">
	import { fly } from "svelte/transition";
	const projects = [
		{
			name: "QR Code Component",
			link: "/qr-code-component",
            image: "/qr-code-component/desktop-preview.jpg"
		},
		{
			name: "Rest Countries API",
			link: "/rest-countries",
            image: "/rest-countries/desktop-preview.jpg"
		}
	];
</script>

<svelte:head>
	<title>Coty Hamilton</title>
    <link rel="stylesheet" href="/montana.min.css">
</svelte:head>

<div class="body">
    <nav class="container">
        <h1>FrontendMentor Projects</h1>
    </nav>

    <div class="flex container">
        {#each projects as project}
            <article class="project" in:fly={{ y: -5, duration: 1000 }}>
                <header>{project.name}</header>
                <a href={project.link}>
                    <img src={project.image} alt="project thumbnail">
                </a>
                <a href={project.link}>{project.link}</a>
                <a href="https://github.com/cotyhamilton/frontendmentor">
                    <img src="/github-logo.png" alt="github-logo" width="36">
                </a>
            </article>
        {/each}
    </div>

    <footer class="footer">
        <div class="container">
            <p>Built with <a href="https://kit.svelte.dev">SvelteKit</a></p>
            <a href="https://www.frontendmentor.io/home">frontendmentor.io</a>
        </div>
    </footer>
</div>

<style>
    .body {
        min-height: 90vh;
    }
	nav {
		margin: auto;
	}

	.flex {
		display: flex;
		flex-wrap: wrap;
        gap: 2rem;
	}

    .project {
        width: 16rem;
    }

    .project img {
        border-radius: .25rem;
    }

    .project a {
        display: block;
        margin-top: 1rem;
    }

    .project a img {
        background-color: white;
        padding: .25rem;
    }

    .footer {
		bottom: 0;
		left: 0;
        padding: 2rem 0;
		right: 0;
		z-index: 1030;
    }
</style>
