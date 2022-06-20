<script context="module" lang="ts">
  export const load = async ({ fetch }) => {
    const res = await fetch(`/api/coletores`);
    const coletores = await res.json();

    return {
      props: {
        coletores,
      },
    };
  };
</script>

<script lang="ts">
  import Header from "$lib/Header.svelte";
  export let coletores: any;

  let search = "";

  $: searched = coletores.filter((e) =>
    e?.name?.toLowerCase().includes(search.toLowerCase())
  );

  $: items = searched || coletores;
</script>

<Header />

<div class="container d-flex flex-column align-items-start">
  <h3 class="text-start" style="font-size: 16px; font-weight: bold;">
    Solicitações de coleta
  </h3>
  <div class="input-group">
    <span class="input-group-text" style="padding: 8px;"
      ><i class="la la-search text-primary" /></span
    ><input
      class="form-control form-control-sm"
      type="text"
      placeholder="busque por um solicitação"
      bind:value={search}
    />
  </div>
</div>

<main class="container">
  {#each items as item}
    <div class="card card-color" style="margin: 12px 0;">
      <div class="card-body">
        <div class="container" style="padding: 0;">
          <div class="row">
            <div class="col-4">
              <img
                class="border rounded-circle"
                src={item.img}
                style="width: 100px;height: 100px;"
                alt="perfil"
              />
            </div>
            <div
              class="col-8 text-center d-flex flex-column justify-content-center align-items-start align-content-center"
            >
              <h2>{item.name}</h2>
              <div>
                <i
                  class="la la-star fs-2 text-primary"
                  style="margin: 4px;margin-left: 0;"
                />
                <i class="la la-star fs-2 text-primary" style="margin: 4px;" />
                <i class="la la-star fs-2 text-primary" style="margin: 4px;" />

                {#if item.ratings % 2 === 0}
                  <i
                    class="la la-star fs-2 text-primary"
                    style="margin: 4px;"
                  />
                  <i
                    class="la la-star-half-full fs-2 text-primary"
                    style="margin: 4px;"
                  />
                {:else}
                  <i
                    class="la la-star-half-full fs-2 text-primary"
                    style="margin: 4px;"
                  />
                  <i
                    class="la la-star-o fs-2 text-primary"
                    style="margin: 4px;"
                  />
                {/if}
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-start align-items-center"
          style="margin-top: 8px;"
        >
          <div class="d-flex align-items-center">
            <i
              class="la la-calendar fs-2"
              style="margin: 4px;margin-left: 0;"
            />
            <h3 class="text-start" style="font-size: 18px;margin-bottom: 0;">
              {item.date}
            </h3>
          </div>
          <div class="d-flex align-items-center" style="margin-left: 12px;">
            <i
              class="la la-map-marker fs-2"
              style="margin: 4px;margin-left: 0;"
            />
            <h3 class="text-start" style="font-size: 18px;margin-bottom: 0;">
              {item.distance}
            </h3>
          </div>
        </div>
        <div
          class="d-flex justify-content-between align-items-center"
          style="margin-top: 12px;"
        >
          <a
            class="btn btn-warning"
            sveltekit:prefetch
            href={`coletores/${item.id}`}
            style="padding-right: 24px;padding-left: 24px;">Ver mais</a
          >
          <a
            class="btn btn-primary"
            sveltekit:prefetch
            href="#"
            style="padding-right: 24px;padding-left: 24px;">Aceitar</a
          >
        </div>
      </div>
    </div>
  {/each}
</main>

<style>
  :global(:root) {
    --background-color: #d4fade;
    --card-color: #fff;
  }

  :global(body) {
    /* background-color: var(--background-color); */
    background-image: linear-gradient(
      to right bottom,
      #d4fade,
      #c4fcd3,
      #b4fdc7,
      #a4febb,
      #92ffae
    );
  }
</style>
