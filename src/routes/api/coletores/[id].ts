export async function get({ params }) {
  console.log(params);
  const { id } = params;

  // const res = await fetch(`/api/coletores`);
  // const coletores = await res.json();

  const coletor = [
    {
      id: "001",
      name: "Luiz Silva",
      img: "/assets/img/avatar3.jpg",
      ratings: 4,
      date: "13:00 - 15:00",
      distance: "5km",
      phone: "11 9 8765 4321",
    },
    {
      id: "002",
      name: "Carla Silva",
      img: "/assets/img/avatar2.jpg",
      ratings: 3,
      date: "12:00",
      distance: "2km",
      phone: "11 9 8765 4321",
    },
    {
      id: "003",
      name: "Renata Oliveira",
      img: "/assets/img/avatar4.jpg",
      ratings: 3,
      date: "09:45",
      distance: "6km",
      phone: "11 9 8765 4321",
    },
    {
      id: "004",
      name: "Antônio Freitas",
      img: "/assets/img/avatar5.jpg",
      ratings: 3,
      date: "14:00",
      distance: "8km",
      phone: "11 9 8765 4321",
    },
  ].find((e: any) => e.id == id);

  return {
    status: 200,
    body: coletor,
  };
}
