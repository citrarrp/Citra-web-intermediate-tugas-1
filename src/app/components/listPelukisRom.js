const Pelukis = [
  {
    initial: "FG",
    title: "Francisco Goya",
    description:
      "Francisco Goya merupakan seorang seniman Romantisisme yang berasal dari Spanyol dan dianggap paling penting di abad 18-an akhir. Sepanjang perjalanan karirnya, Goya banyak mengabadikan sejarah melalui karya lukisannya. Goya juga sering disebut sebagai Old Masters yang terakhir dan seorang pelukis modern yang pertama. Selain sering melukis sejarah, Ia juga kerap melukis potret yang bernuansa kontemporer, yang mana berarti sudah meninggalkan tradisi dari aliran neoklasik.",
  },
  {
    initial: "JMWT",
    title: "Joseph Mallord William Turner",
    description:
      "Joseph Mallord William Turner merupakan seorang seniman asal Inggris yang dikenal dengan teknik pewarnaan yang ekspresif, pemandangan yang imajinatif, dan gambar-gambar yang dramatis. Sehingga bisa dengan mudah dipahami bahwa Ia adalah seorang seniman yang beraliran Romantisisme. Lukisan Turner yang paling dikenal oleh masyarakat luas adalah lukisan pemandangan laut. J.M.W Turner merupakan seniman yang lahir di Maiden Lane, Covent Garden, London. Ia berasal dari keluarga kelas menengah kebawah yang cukup sederhana. Turner tinggal di Londong sepanjang hidupnya, mempertahankan aksen kampungnya dan tetap mempertahankan sikap rendah hati di masa populernya. Turner sendiri sempat belajar di Royal Academy of Arts pada tahun 1789. Selama belajar di sana, Ia juga menduduki jabatan sebagai guru gambar arsitek atau drafter. Tuner kemudian membuka galeri sendiri di tahun 1804 dan menjadi seorang profesor di Royal Academy pada tahun 1807, lalu mengajar hingga tahun 1828. Ia sangat suka melakukan perjalanan keliling Eropa dari tahun 1802 dan pulang dengan membawa banyak sketsa pemandangan yang Ia lihat di sepanjang perjalanannya.",
  },
  {
    initial: "CDF",
    title: "Caspar David Friedrich",
    description:
      "Caspar David Friedrich merupakan seorang pelukis pemandangan romantik asal Jerman di abad ke-19. Friedrich merupakan salah satu pelukis Jerman yang cukup berpengaruh pada zamannya. Ia juga menjadi tokoh yang paling penting dalam sejarah aliran Romantisisme. Tak hanya itu saja, Friedrich juga terkenal karena karya lukisan pemandangan alegoris atau bersifat simbolis universal, seperti halnya fabel, cerita binatang yang menyimbolkan tentang perilaku manusia. Lukisan karya Friedrich umumnya menyajikan sosok kontemplatif dalam pemandangan yang berhadapan dengan kabut di pagi hari, gelapnya malam hari, pohon yang tandus dan reruntuhan kuno. Minat utama dari Friedrich yaitu perenungan terhadap alam yang ada di dunia. Karyanya yang seringkali simbolis berupaya untuk menyampaikan tanggapan subjektif dan emosional terhadap alam. Umumnya, lukisan Friedrich akan menempatkan kehadiran manusia di dalam perspektif yang kecil di tengah pemandangan yang besar. Menurut sejarawan Christopher Murray, perspektif tersebut mengarahkan pada pandangan audiens terhadap dimensi metafisik mereka.",
  },
];

export function getPelukisListRom(pelukis) {
  const data = Pelukis.find((item) => item.initial === pelukis);
  return data;
}
