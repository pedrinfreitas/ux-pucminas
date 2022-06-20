<script lang="ts">
  export let backButton: string = "/";
</script>

<header class="my-3 c-header">
  <div class="container d-flex justify-content-between align-items-center">
    <a class="btn" sveltekit:prefetch href={backButton} style="padding: 0;">
      <i class="la la-angle-left fs-3 text-primary" />
    </a>

    <button class="btn" type="button" style="padding: 0;">
      <i class="la la-bell fs-3 text-primary" />
    </button>
  </div>
</header>

<style>
  .card-color {
    background-color: var(--card-color);
  }

  .c-header {
    padding-bottom: 8px;
    border-bottom: 1px #a4d67b solid;
  }
</style>
