<script context="module" lang="ts">
  export const load = async ({ params, fetch }) => {
    const { id } = params;

    const res = await fetch(`/api/coletores/${id}`);
    const coletor = await res.json();

    return {
      props: {
        coletor,
      },
    };
  };
</script>

<script lang="ts">
  import Header from "$lib/Header.svelte";
  export let coletor: any;
</script>

<Header />

<div class="container">
  <div class="card card-color" style="margin: 12px 0;">
    <div class="card-body">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <img
          class="border rounded-circle"
          src={coletor.img}
          style="width: 100px;height: 100px;"
          alt="perfil"
        />
        <h1>{coletor.name}</h1>
        <div>
          <i
            class="la la-star fs-2 text-primary"
            style="margin: 4px;margin-left: 0;"
          />
          <i class="la la-star fs-2 text-primary" style="margin: 4px;" />
          <i class="la la-star fs-2 text-primary" style="margin: 4px;" />

          {#if coletor.ratings % 2 === 0}
            <i class="la la-star fs-2 text-primary" style="margin: 4px;" />
            <i
              class="la la-star-half-full fs-2 text-primary"
              style="margin: 4px;"
            />
          {:else}
            <i
              class="la la-star-half-full fs-2 text-primary"
              style="margin: 4px;"
            />
            <i class="la la-star-o fs-2 text-primary" style="margin: 4px;" />
          {/if}
        </div>
      </div>
      <div>
        <div class="d-flex align-items-center">
          <i class="la la-calendar fs-2 c-icon" />
          <p style="margin: 0;">{coletor.date}</p>
        </div>
        <div class="d-flex align-items-center">
          <i class="la la-map-marker fs-2 c-icon" />
          <p style="margin: 0;">{coletor.distance}</p>
        </div>
        <div class="d-flex align-items-center">
          <i class="la la-phone fs-2 c-icon" />
          <p style="margin: 0;">{coletor.phone}</p>
        </div>
        <p style="margin: 8px 0;">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <label>Depoimetos:</label>
        <div class="d-flex align-items-center c-depoimentos">
          <img
            class="border rounded-circle"
            src="/assets/img/avatar6.jpg"
            width="50"
            height="50"
            style="margin-right: 8px;"
            alt="perfil"
          />
          <div>
            <h4 style="margin: 0;">Lucas Pereira</h4>
            <p style="margin: 0;">Pontual e organizado.</p>
          </div>
        </div>
        <div class="d-flex align-items-center c-depoimentos">
          <img
            class="border rounded-circle"
            src="/assets/img/avatar7.jpg"
            width="50"
            height="50"
            style="margin-right: 8px;"
            alt="perfil"
          />
          <div>
            <h4 style="margin: 0;">Maria José</h4>
            <p style="margin: 0;">Sempre disposto a ajudar.</p>
          </div>
        </div>

        <div
          class="d-flex justify-content-end align-items-center"
          style="margin-top: 12px;"
        >
          <a
            class="btn btn-primary"
            sveltekit:prefetch
            href={`coletores/${coletor.id}`}
            style="padding-right: 24px;padding-left: 24px;">Aceitar</a
          >
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .c-icon {
    margin: 4px;
    margin-left: 0;
  }

  .c-depoimentos {
    border: 1px solid rgba(223, 215, 202, 0.75);
    border-radius: 0.25rem;
    padding: 8px;
    margin-bottom: 8px;
  }
</style>
