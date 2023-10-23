const Pelukis = [
  {
    initial: "FG",
    title: "Francisco Goya",
    description: "Deskripsi Francisco Goya...",
  },
  {
    initial: "JMWT",
    title: "Joseph Mallord William Turner",
    description: "Deskripsi Joseph Mallord William Turner...",
  },
  {
    initial: "CDF",
    title: "Caspar David Friedrich",
    description: "Deskripsi Caspar David Friedrich...",
  },
];

export function getPelukisListRom(initial) {
  const pelukis = Pelukis.find((item) => item.initial === initial);
  return pelukis;
}
