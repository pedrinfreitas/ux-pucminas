export async function get() {
  const loadedColetores = [
    {
      id: "001",
      name: "Luiz Silva",
      img: "/assets/img/avatar3.jpg",
      ratings: 4,
      date: "13:00 - 15:00",
      distance: "5km",
    },
    {
      id: "002",
      name: "Carla Silva",
      img: "assets/img/avatar2.jpg",
      ratings: 3,
      date: "12:00",
      distance: "2km",
    },
    {
      id: "003",
      name: "Renata Oliveira",
      img: "assets/img/avatar4.jpg",
      ratings: 3,
      date: "09:45",
      distance: "6km",
    },
    {
      id: "004",
      name: "Antônio Freitas",
      img: "assets/img/avatar5.jpg",
      ratings: 3,
      date: "14:00",
      distance: "8km",
    },
  ];

  return {
    status: 200,
    body: loadedColetores,
  };
}
