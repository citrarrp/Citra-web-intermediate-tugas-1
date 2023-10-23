const Pelukis = [
  {
    initial: "JC",
    title: "John Constable",
    description: "Deskripsi John Constable...",
  },
  {
    initial: "TC",
    title: "Thomas Cole",
    description: "Deskripsi Thomas Cole...",
  },
  {
    initial: "WBB",
    title: "William Bliss Baker",
    description: "Deskripsi William Bliss Baker...",
  },
];

export function getPelukisListNat(initial) {
  const pelukis = Pelukis.find((item) => item.initial === initial);
  return pelukis;
}
