const Pelukis = [
  {
    initial: "RM",
    title: "Rene Magritte",
    description:
      "Rene Magritte lahir pada tanggal 21 November 1898 merupakan salah satu seniman asal Belgia yang paling terkenal di abad ke-20. Magritte memperoleh banyak sekali pujian dan sanjungan atas pendekatannya yang sangat istimewa terhadap aliran Surealisme. Akan tetapi, sebelum menjadi seorang seniman, untuk menunjang kehidupannya, Magritte menghabiskan waktu hingga bertahun-tahun untuk bekerja mendesain dan memproduksi cover buku. Magritte sangat tertarik dengan keberadaan kaum kelas menengah, yaitu kaum yang menghabiskan hampir sebagian besar waktunya untuk bekerja dan menghabiskan uang mereka untuk bertahan hidup. Menurut Magritte, kelas menengah tergolong kurang miskin untuk mendapatkan subsidi dari pemerintah, tapi juga tidak mampu untuk memenuhi kebutuhan pokok seperti rumah. Kehidupan tersebut Ia lambangkan melakui lukisan pria yang mengenakan topi bowler.",
  },
  {
    initial: "FK",
    title: "Frida Kahlo",
    description:
      "Frida Kahlo merupakan seorang seniman yang biasa menggunakan simbolisme visual yang berasal dari rasa sakit fisik yang Ia alami dalam upaya untuk lebih memahami penderitaan emosional. Dari semenjak kecil, Kahlo sudah menderita polio yang membuat kakinya tidak seimbang. Semasa hidupnya, Kahlo mengalami rasa sakit yang tidak kunjung usai. Sehingga Ia lebih banyak menghabiskan waktunya di rumah sakit. Sebelum Kahlo, bahasa kematian, kehilangan, dan juga kesendirian sudah diteliti dengan baik oleh beberapa seniman pria. Akan tetapi hasilnya belum dibedah secara signifikan oleh seniman wanita. Tak hanya itu saja, Kahlo juga tidak hanya masuk ke ranah Simbolisme yang umum saja, namun Ia juga memperluas hal itu dengan cara membuat simbol miliknya sendiri. Kahlo tak hanya dikategorikan sebagai seorang seniman Surealisme. Tapi juga menjadi salah satu tokoh pergerakan seni feminis. Ia sudah banyak membuat simbol atau ikon yang khas yang dipakai sepanjang karirnya, termasuk rambut, hewan, dan pita. Kahlo berhasil menciptakan cara baru untuk membahas mengenai aspek dari identitas wanita, sekalipun yang paling kompleks. Tidak hanya menjadi seniman yang hebat, Kahlo juga menjadi sosok seorang yang banyak dikagumi karena pribadinya yang unik. Potret dari wajah Kahlo yang juga sangat ikonik yaitu dengan ciri khas alis tebal dan bersatu. Ia juga mempunyai pengaruh besar untuk seniman lainnya. Sampai sekarang, masih banyak seniman kontemporer yang menggunakan citra potretnya untuk dipakai sebagai referensi karya mereka.",
  },
  {
    initial: "SD",
    title: "Salvador Dali",
    description:
      "Salvador Dali merupakan salah satu seniman Surealis yang paling terkenal, dominan, dan juga produksi di era abad ke-20. Dali dikenal sebagai pioner seniman yang mengetahui bahwa keteran komersil juga dibutuhkan untuk seorang seniman. Ia kerap muncul di TV dan intensif memperoleh wawancara pers. Dalam perjalanan karirnya, Ia tidak hanya melukis, tapi juga menyelami media seni lain seperti seni grafis, seni pahat, seni periklanan, seni desain, sastra, film, dan yang cukup terkenal adalah kolaborasi yang Ia lakukan bersama dengan Luis Buñuel dan Alfred Hitchcock. Selain karena keahlian tekniknya yang tidak terkalahkan, Dali juga terkenal karena kepribadiannya yang eksentrik dan flamboyan. Dalam penggunaan awal morfologi organik, karya yang Ia memiliki membawa ciri khas seniman Spanyol, Pablo Picasso dan Joan Miro. Lukisannya itu juga menunjukkan ketertarikannya terhadap seni Klasik dan Renaisans. Hal tersebut tampak jelas melalui gaya hiper realistik dan pemakaian simbolisme religius di dalam karyanya.",
  },
];

export function getPelukisListSur(pelukis) {
  const data = Pelukis.find((item) => item.initial === pelukis);
  return data;
}
