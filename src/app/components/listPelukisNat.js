const Pelukis = [
  {
    initial: "JC",
    title: "John Constable",
    description:
      "John Constable merupakan seniman yang berasal dari Inggris yang dianggap sebagai tokoh seniman yang memberikan banyak pengaruh dalam perkembangan aliran Naturalisme. Ia dulunya menolak gaya lukisan pemandangan. Constable mengatakan bahwa “Kebiasaan pelukis hari ini adalah bravura, sebuah upaya untuk menggambarkan sesuatu yang melampaui kebenaran”. Lalu, Ia memilih untuk membuat cara representasi sendiri dengan mentransfer apa yang Ia lihat sendiri sejujur mungkin di atas kanvas. Tak hanya itu saja, Constable juga memilih untuk melukis apa saja yang ada disekitarnya terlebih dulu. Dalam suratnya yang Ia tulis untuk koleganya, Ia menulis “I should paint my own places best“. Constable juga tertarik dengan cahaya dan juga awan yang ada di awan tanpa membeda-bedakan mana yang lebih bagus atau mana yang lebih indah.",
  },
  {
    initial: "TC",
    title: "Thomas Cole",
    description:
      "Thomas Cole merupakan sosok seniman yang lahir di area industri Inggris. Ia kemudian pindah ke Amerika Serikat pada saat masih muda. Sejak saat itu, Cole selalu berusaha untuk menangkap keindahan yang eksotik dari gurun-gurun yang ada di Benua Amerika. Lukisan-lukisan yang dibuat oleh Cole, ikut menjadi monumen untuk berbagai macam harapan dan juga kecemasan masyarakat Amerika yang baru saja tumbuh selama pertengahan abad ke-19. Ia dianggap sebagai seorang seniman pertama yang membawa mata pelukis pemandangan Eropa ke wilayah Amerika. Namun, sosok tersebut juga tetap menyajikan pemandangan Amerika yang unik.",
  },
  {
    initial: "WBB",
    title: "William Bliss Baker",
    description:
      "William Bliss Baker merupakan seorang seniman yang berasal dari Amerika Serikat. Baker mengawali pendidikan seninya di National Academy of Design di tahun 1876. Ia merupakan seniman berbakat yang sukses menggelar banyak pameran bahkan saat Ia masih menjadi mahasiswa. Hal itu terjadi karena Baker sudah mahir dalam melukis jauh sebelum Ia mengambil jurusan seni. Baker juga banyak memenangkan penghargaan seperti Hallgarten dan Elliot yang merupakan sebuah penghargaan berkelas di zamannya. Bisa dikatakan, Baker adalah seniman Naturalisme yang memiliki kemampuan teknis yang paling hebat di aliran ini. Dimana teknik melukisnya sangat akurat dan telah menginspirasi banyak kelahiran aliran baru yang kemudian diilhami oleh aliran Naturalisme. Baik itu para pelaku aliran foto-realisme di zaman modern, sampai para hiper-realisme di era kontemporer seperti sekarang.",
  },
];

export function getPelukisListNat(pelukis) {
  const data = Pelukis.find((item) => item.initial === pelukis);
  return data;
}
