<script lang="ts">
    import { page } from "$app/stores";
</script>

<slot />

{#if $page.url.pathname !== "/"}
    <div class="home-button">
        <a href="/">🏡 home</a>
    </div>
{/if}

<style>
    .home-button {
        bottom: 24px;
        left: 0;
        position: fixed;
        right: 0;
        text-align: center;
    }
    a {
        background-color: white;
        border-radius: .25rem;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        border: none;
        color: #333;
        display: inline;
        font-family: system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
        font-size: 14px;
        text-decoration: none;
        padding: .5rem;
    }
</style>