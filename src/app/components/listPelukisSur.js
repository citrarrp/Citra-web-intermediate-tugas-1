const Pelukis = [
  {
    initial: "RM",
    title: "Rene Magritte",
    description: "Deskripsi Rene Magritte...",
  },
  {
    initial: "FK",
    title: "Frida Kahlo",
    description: "Deskripsi Frida Kahlo...",
  },
  {
    initial: "SD",
    title: "Salvador Dali",
    description: "Deskripsi Salvador Dali...",
  },
];

export function getPelukisListSur(initial) {
  const pelukis = Pelukis.find((item) => item.initial === initial);
  return pelukis;
}
