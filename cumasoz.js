// cumasoz.js — Cuma'ya özel mesajlar ve sözler
// MuGöl İmsak Vakti Uygulaması

const cumaSozleri = [
  {
    text: "Cuma günü, Allah'ın haftaya koyduğu bir bayramdır. O gün dualar kabul olur, günahlar bağışlanır.",
    source: "Hadis-i Şerif"
  },
  {
    text: "Rabbimiz, bu mübarek Cuma günü hürmetine günahlarımızı affeylesin, kalplerimizi nurlandırsın.",
    source: "Dua"
  },
  {
    text: "Güzellikler içinizi aydınlatsın, yüzünüzden ve yüreğinizden tebessüm eksilmesin. Cumanız mübarek olsun.",
    source: "Cuma Duası"
  },
  {
    text: "Allah'ın rahmeti ve bereketi üzerinize olsun. Duanız kabul, ameliniz makbul olsun.",
    source: "Cuma Tebriki"
  },
  {
    text: "Cuma namazına koşanlar, günahlarını geride bırakmış olarak dönerler.",
    source: "Hadis-i Şerif"
  },
  {
    text: "Her Cuma, yeniden başlamak için Allah'ın bize verdiği bir fırsattır. Bu fırsatı kaçırmayın.",
    source: "İslam Alimlerinden"
  },
  {
    text: "Cuma günü yapılan her iyilik, diğer günlere göre daha faziletlidir. Hayrınızın önü açık olsun.",
    source: "Hadis-i Şerif"
  },
  {
    text: "Bu mübarek Cuma gününde kalbiniz huzur, eviniz bereket, yolunuz nur dolsun.",
    source: "Cuma Tebriki"
  },
  {
    text: "Cuma günü, haftanın efendisidir. Allah katında en hayırlı gün olarak seçilmiştir.",
    source: "İbn Mace"
  },
  {
    text: "Cumanız mübarek olsun. Rabbim dualarınızı kabul etsin, sizi sevdiklerinizle bir arada tutusun.",
    source: "Cuma Duası"
  },
  {
    text: "Allah, Cuma günü bir saat vardır ki o saatte bir kul Allah'a bir şey dua ederse, Allah o duayı kabul eder.",
    source: "Buhari, Müslim"
  },
  {
    text: "Kim Cuma günü Kehf Suresini okursa, iki Cuma arası ona nur aydınlatır.",
    source: "Hadis-i Şerif"
  },
  {
    text: "Bugün Cuma; af dilenecek, şükredilecek, ibadet edilecek mübarek bir gündür. Hayırlı Cumalar.",
    source: "Cuma Hatırlatması"
  },
  {
    text: "Cuma günleri Peygamberimize çokça salavat getiriniz. Zira salavat ona ulaştırılır.",
    source: "Ebu Davud"
  },
  {
    text: "Günahlarından tevbe eden kimse, hiç günah işlememiş gibidir. Bugün tevbe için en güzel gündür.",
    source: "İbn Mace"
  },
  {
    text: "Sabah erken saatlerde Cuma namazına giden, sanki bir deve kurban etmiş gibi sevap kazanır.",
    source: "Buhari"
  },
  {
    text: "Bu Cuma, geçen Cumanın keffareti olsun. Rabbimiz hepimize hayırlı Cumalar nasip etsin.",
    source: "Cuma Tebriki"
  },
  {
    text: "Cuma, müminler için manevi bir bahar günüdür. Kalpler o gün yenilenir, ruhlar o gün ferahlık bulur.",
    source: "İslam Alimlerinden"
  },
  {
    text: "Bugün duanızı eksik etmeyin. Cuma vakti kabul olunan o saati arayın, şükürle ve niyazla geçirin.",
    source: "Cuma Hatırlatması"
  },
  {
    text: "Sevdiklerinize hayırlı Cumalar dileyin; sevgiyi yaymak da bir sadakadır.",
    source: "Hadis-i Şerif"
  },
  {
    text: "Kıyamet Cuma günü kopacaktır. O gün bütün mahlûkat titrer, yalnızca insanlar ve cinler değil.",
    source: "Müslim"
  },
  {
    text: "Bu günde güzel giyinin, güzel koku sürünün ve kardeşlerinizle buluşun. Cuma bir buluşma günüdür.",
    source: "Hadis-i Şerif"
  },
  {
    text: "Rabbim, kalplerimize iman nuru, dillerimize zikir, ellerimize hayır nasip etsin. Hayırlı Cumalar.",
    source: "Cuma Duası"
  },
  {
    text: "Cuma'nın hatırlattığı şey: Dünya geçicidir, bu hafta da geçti. Ahirete hazırlık için ne yaptık?",
    source: "İslam Alimlerinden"
  },
  {
    text: "Her Cuma yeni bir safha, yeni bir başlangıç. Dünün yüklerini bırak, bugün yeniden başla.",
    source: "Cuma Mesajı"
  }
];
