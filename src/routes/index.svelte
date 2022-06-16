<script lang="ts">
  let data = [
    {
      name: "Roberto Cavalline",
      img: "assets/img/avatar1.jpg",
      ratings: 4,
      date: "08:00",
      distance: "2km",
    },
    {
      name: "Luiza Costa",
      img: "assets/img/avatar2.jpg",
      ratings: 3,
      date: "12:00",
      distance: "2km",
    },
    {
      name: "Luiz Silva",
      img: "assets/img/avatar3.jpg",
      ratings: 4,
      date: "09:00",
      distance: "2km",
    },
    {
      name: "Renata Oliveira",
      img: "assets/img/avatar4.jpg",
      ratings: 3,
      date: "09:45",
      distance: "2km",
    },
    {
      name: "Antônio Freitas",
      img: "assets/img/avatar5.jpg",
      ratings: 3,
      date: "14:00",
      distance: "2km",
    },
  ];

  let search = "";
  let value = "";

  $: searched = data.filter((e) =>
    e?.name?.toLowerCase().includes(search.toLowerCase())
  );

  $: items = searched || data;
</script>

<header class="my-3">
  <div class="container d-flex justify-content-between align-items-center">
    <button class="btn" type="button" style="padding: 0;">
      <i class="la la-angle-left fs-3 text-primary" />
    </button>
    <button class="btn" type="button" style="padding: 0;">
      <i class="la la-bell fs-3 text-primary" />
    </button>
  </div>
</header>

<div class="container d-flex flex-column align-items-start">
  <h1 class="text-start" style="font-size: 18px;">
    Qual coletor você deseja aceitar?
  </h1>
  <div class="input-group">
    <span class="input-group-text" style="padding: 8px;"
      ><i class="la la-search text-primary" /></span
    ><input
      class="form-control form-control-sm"
      type="text"
      placeholder="busque por um coletor"
      bind:value={search}
    />
  </div>
</div>

<main class="container">
  {#each items as item}
    <div class="card" style="margin: 12px 0;">
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
              <h4>{item.name}</h4>
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
            <h1 class="text-start" style="font-size: 18px;margin-bottom: 0;">
              {item.date}
            </h1>
          </div>
          <div class="d-flex align-items-center" style="margin-left: 12px;">
            <i
              class="la la-map-marker fs-2"
              style="margin: 4px;margin-left: 0;"
            />
            <h1 class="text-start" style="font-size: 18px;margin-bottom: 0;">
              {item.distance}
            </h1>
          </div>
        </div>
        <div
          class="d-flex justify-content-between align-items-center"
          style="margin-top: 12px;"
        >
          <button
            class="btn btn-primary btn-sm text-lowercase"
            type="button"
            style="padding-right: 24px;padding-left: 24px;">Aceitar</button
          ><button
            class="btn btn-danger btn-sm text-lowercase"
            type="button"
            style="padding-right: 24px;padding-left: 24px;">recusar</button
          >
        </div>
      </div>
    </div>
  {/each}
</main>
