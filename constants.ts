import { Service, NavItem, Product } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Anasayfa', path: '/' },
  { label: 'Hizmetlerimiz', path: '/hizmetlerimiz' },
  { label: 'Güzellik Rehberi', path: '/blog' },
  { label: 'S.S.S', path: '/sss' },
  { label: 'Hakkımızda', path: '/hakkimizda' },
  { label: 'İletişim', path: '/iletisim' },
];

export const SERVICES: Service[] = [
  {
    id: 'leke-protokolu',
    name: 'Leke Protokolü',
    category: 'Cilt Protokolleri',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800',
    description: 'Güneş, yaşlılık ve sivilce lekelerine karşı cildi aydınlatan ve ton eşitleyen özel onarım protokolü.'
  },
  {
    id: 'akne-protokolu',
    name: 'Akne Sivilce Protokolü',
    category: 'Cilt Protokolleri',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    description: 'Aktif akne ve sivilce oluşumunu engelleyen, gözenekleri derinlemesine arındıran dengeleyici bakım.'
  },
  {
    id: 'anti-aging-protokol',
    name: 'Anti Aging Protokol',
    category: 'Anti-Aging',
    image: 'https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?auto=format&fit=crop&q=80&w=800',
    description: 'İnce çizgiler ve sarkmalara karşı kolajen tetikleyici, cildi sıkılaştıran gençlik bakımı.'
  },
  {
    id: 'prof-cilt-bakimi',
    name: 'Prof Cilt Bakımı',
    category: 'Cilt Protokolleri',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    description: 'Cildin tüm katmanlarına hitap eden, derinlemesine temizlik ve yoğun nemlendirme sağlayan profesyonel uygulama.'
  },
  {
    id: 'ispanya-isiltisi',
    name: 'İspanya Işıltısı',
    category: 'Cilt Protokolleri',
    image: 'https://enhanzeonline.com/cdn/shop/products/Chemical_peel_5_9f82c2b2-1428-4824-aaa8-e083c1d857c4_1024x1024.jpg?v=1606100496',
    description: 'Cilde anında cam parlaklığı ve canlılık kazandıran, vitamin kompleksli özel bir ışılartıcı mezoterapi etkisi.'
  },
  {
    id: 'dudak-pigmentasyon',
    name: 'Dudak Pigmentasyon',
    category: 'Kalıcı Makyaj',
    image: 'https://www.dilekgezer.com/wp-content/uploads/2023/07/dudak-300x225.jpg',
    description: 'Solgun dudakları canlandıran, simetri bozukluklarını gideren ve doğal renk kazandıran kalıcı renklendirme.'
  },
  {
    id: 'kas-kil-teknigi',
    name: 'Kaş (Kıl Tekniği)',
    category: 'Kalıcı Makyaj',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=800',
    description: 'Microblading yöntemiyle kaş aralarındaki boşlukları doğal kıl görüntüsüyle doldurma tekniği.'
  },
  {
    id: 'kas-pudralama',
    name: 'Kaş (Pudralama)',
    category: 'Kalıcı Makyaj',
    image: 'https://www.dilasayan.com/wp-content/uploads/2025/02/kas-pudralama-nedir-2-1024x683.webp',
    description: 'Kaşlara hafif makyaj yapılmış gibi bir efekt veren, gölgeleme odaklı uzun ömürlü tasarım.'
  },
  {
    id: 'dipliner',
    name: 'Dipliner',
    category: 'Kalıcı Makyaj',
    image: 'https://seraploren.com/wp-content/uploads/2024/04/kalici-dipliner-elif-dincarslan.jpg',
    description: 'Bakışları derinleştiren, kirpik diplerini belirginleştiren kusursuz ve kalıcı bir uygulama.'
  },
  {
    id: 'kirpik-lifting',
    name: 'Kirpik Lifting',
    category: 'Kaş & Kirpik',
    image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=600,fit=crop/cdn-ecommerce/store_01JP3J85VXB89NK0061T2BY3J2%2Fassets%2F1742628927112-kirpik-lifting.jpg',
    description: 'Kendi kirpiklerinize kökten uca form vererek daha uzun, kıvrık ve siyah görünmesini sağlayan bakım.'
  },
  {
    id: 'kas-laminasyon',
    name: 'Kaş Laminasyon',
    category: 'Kaş & Kirpik',
    image: 'https://cdn.dsmcdn.com/mrktng/seo/june2024/kas-laminasyon-nedir-2.jpg',
    description: 'Sert veya aşağı bakan kaş kıllarının yönünü yukarı sabitleyerek kalkık bir görünüm sağlar.'
  },
  {
    id: 'kas-kirpik-laminasyon',
    name: 'Kaş Kirpik Laminasyon',
    category: 'Kaş & Kirpik',
    image: 'https://ayseyalman.com.tr/assets/uploads/catalog/hizmetler/kas-kirpik-laminasyonu.jpg',
    description: 'Hem kaş hem kirpikler için eş zamanlı uygulanan, bakışları tamamen değiştiren kombine paket.'
  },
  {
    id: 'sac-vitamini',
    name: 'Saç Vitamini',
    category: 'Saç Bakımı',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    description: 'Saç köklerini besleyen, dökülmeyi azaltan ve saç tellerini kalınlaştıran yoğun vitamin yüklemesi.'
  },
  {
    id: 'klasik-cilt-bakimi',
    name: 'Klasik Cilt Bakımı',
    category: 'Cilt Protokolleri',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800',
    description: 'Cildin rutin ihtiyacı olan temizlik, buhar ve nem dengesinin sağlandığı temel bakım uygulaması.'
  },
  {
    id: 'bolgesel-incelme',
    name: 'Bölgesel İncelme (Heykel Traş)',
    category: 'Bölgesel İncelme',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
    description: 'Ultrasonik dalgalar ile yağ hücrelerini parçalayan ve vücudu yeniden şekillendiriren ileri teknoloji zayıflama.'
  },
  {
    id: 'lazer-epilasyon',
    name: 'Lazer Epilasyon',
    category: 'Lazer Epilasyon',
    image: 'https://www.dilasayan.com/wp-content/uploads/2024/11/soprano-titanium-3.webp',
    description: 'Yeni nesil buz başlıklı cihazlarla, acısız ve kalıcı pürüzsüzlük sağlayan profesyonel epilasyon.'
  }
];

export const FAQS = [
  {
    id: 1,
    category: 'Genel',
    question: "İşlemler sırasında acı hissedilir mi?",
    answer: "Lyndor'da kullandığımız yeni nesil teknolojiler (Buz başlıklı lazer, özel anestezik kremler vb.) konforunuzu maksimize eder. Çoğu işlemimiz minimal düzeyde hissiyatla tamamlanır."
  },
  {
    id: 2,
    category: 'Kalıcı Makyaj',
    question: "Kalıcı makyajın ömrü ne kadardır?",
    answer: "Uygulanan tekniğe ve cilt tipine bağlı olarak kalıcılık 1.5 ile 3 yıl arasında değişmektedir. Doğal pigmentler kullanıldığı için zamanla solarak doğal bir şekilde vücuttan atılır."
  },
  {
    id: 3,
    category: 'Cilt Bakımı',
    question: "Cilt bakımı sonrası nelere dikkat edilmeli?",
    answer: "İlk 24 saat su değdirmemek, direkt güneşten korunmak ve uzmanımızın önerdiği nemlendirici/güneş koruyucu ürünleri kullanmak onarım sürecini hızlandıracaktır."
  },
  {
    id: 4,
    category: 'Kalıcı Makyaj',
    question: "Microblading kimlere uygulanamaz?",
    answer: "Aktif cilt hastalığı olanlara, hamileliğin ilk 3 ayında olanlara, kemoterapi görenlere ve aşırı yağlı cilt yapısına sahip olanlara (pudralama önerilir) uygulama yapılmamaktadır."
  },
  {
    id: 5,
    category: 'Lazer Epilasyon',
    question: "Lazer epilasyon için en uygun mevsim hangisidir?",
    answer: "Yeni nesil buz başlıklı cihazlarımızla 4 mevsim epilasyon mümkündür. Ancak işlem sonrası direkt güneş ışığından 1 hafta boyunca korunmak leke oluşumunu önlemek için kritiktir."
  },
  {
    id: 6,
    category: 'Cilt Bakımı',
    question: "Cilt protokolleri kaç seans sürmektedir?",
    answer: "Leke ve akne onarımı kişiden kişiye değişmekle birlikte, kalıcı sonuçlar için genellikle 4-6 seanslık protokoller öneriyoruz."
  },
  {
    id: 7,
    category: 'Genel',
    question: "Randevu almadan gelebilir miyim?",
    answer: "Sizlere butik ve kaliteli hizmet sunabilmek adına randevu sistemiyle çalışıyoruz. Size özel zaman dilimini ayırmamız için lütfen önceden iletişime geçiniz."
  },
  {
    id: 8,
    category: 'Zayıflama',
    question: "Bölgesel incelme (Heykel Traş) sonrası kilo kaybı olur mu?",
    answer: "Bu işlem bir kilo verme yöntemi değil, vücut şekillendirme yöntemidir. Yağ hücrelerini parçalar ve santim bazında incelme sağlar. Sağlıklı beslenme ile desteklenmelidir."
  },
  {
    id: 9,
    category: 'Cilt Bakımı',
    question: "İspanya Işıltısı nedir?",
    answer: "Cildin ihtiyacı olan vitamin, mineral ve amino asitlerin dermapen veya mezoterapi yoluyla alt katmanlara iletildiği, anında parlaklık ve canlılık veren bir geneçlik kokteylidir."
  },
  {
    id: 10,
    category: 'Kalıcı Makyaj',
    question: "Dudak renklendirme sonrası şişlik olur mu?",
    answer: "İşlem sonrası çok hafif bir ödem görülebilir ancak bu durum genellikle 24 saat içinde tamamen geçer. 3 gün sonra ise dudaklar asıl doğal rengine kavuşmaya başlar."
  }
];

export const BLOG_POSTS = [
  {
    id: 'ispanya-isiltisi-rehber',
    title: "İspanya Işıltısı ile Cam Cilt Etkisi",
    category: "Özel Protokoller",
    excerpt: "Sadece 45 dakikada cildinizdeki yorgunluk izlerini silin ve pürüzsüz bir ışıltı kazanın.",
    content: "Daha canlı, neme doymuş ve ışıldayan bir cilt her kadının hayali. Lyndor Beauty & Wellness olarak uyguladığımız 'İspanya Işıltısı' protokolü, cildin ihtiyaç duyduğu vitamin ve mineral komplekslerini özel bir teknikle alt katmanlara ulaştırır. \n\nNeden İspanya Işıltısı? \n1. Anında parlaklık sağlar. \n2. Cilt tonunu eşitler. \n3. İnce çizgileri nem ile doldurur. \n\nÖnemli bir etkinlik öncesi veya cildinizin 'canlanmaya' ihtiyaç duyduğu her an uzman eşliğinde bu benzersiz deneyimi yaşayabilirsiniz.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    date: "10 Nisan 2024"
  },
  {
    id: 'kis-bakimi',
    title: "Kış Aylarında Cilt Bakımı Rehberi",
    category: "Cilt Sağlığı",
    excerpt: "Soğuk hava ve nemsizlikle savaşmak için cilt bariyerinizi güçlendirmenin yollarını keşfedin.",
    content: "Kış aylarında azalan hava sıcaklığı ve rüzgar, cildin koruyucu bariyerini zayıflatır. Bu dönemde daha yoğun nemlendiriciler, hyaluronik asit serumları ve gece onarıcı maskeler kullanılmalıdır. Ayrıca iç mekanlardaki ısıtma sistemlerinin yarattığı kuru havadan korunmak için cildin su dengesini korumak kritiktir.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    date: "12 Ocak 2024"
  },
  {
    id: 'heykel-tras-zayiflama',
    title: "Heykel Traş ile Ameliyatsız İncelme",
    category: "Bölgesel İncelme",
    excerpt: "Diyet ve spora rağmen gitmeyen inatçı yağlara veda etme zamanı geldi.",
    content: "Vücut şekillendirmede devrim yaratan 'Heykel Traş' teknolojisi, ultrasonik ses dalgalarını kullanarak yağ hücrelerini hedefler. Lyndor'da uyguladığımız bu yöntem, cerrahi işleme gerek kalmadan bölgesel fazlalıklarınızdan kurtulmanıza yardımcı olur. \n\nUygulama Alanları: \n- Göbek ve bel çevresi \n- Basen ve bacaklar \n- Kol altları ve sırt bölgesi \n\nSeanslar yaklaşık 30-40 dakika sürer ve sosyal hayatınıza hemen dönebilirsiniz. Sonuçları desteklemek için bol su tüketimi ve merkezimizde size özel hazırlanan wellness önerilerini takip etmeniz yeterli.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
    date: "12 Nisan 2024"
  },
  {
    id: 'gunes-kremi',
    title: "Güneş Kremi Kullanmanın Önemi",
    category: "Bakım Tavsiyeleri",
    excerpt: "Sadece yazın değil, dört mevsim güneş kremi kullanmak leke onarımında neden kritik?",
    content: "UV ışınları bulutlardan ve pencerelerden geçebilir. Cilt yaşlanmasının %80'i güneş kaynaklıdır. Leke protokolü gören danışanlarımızın, onarılan bölgenin tekrar pigmentasyon üretmemesi için yüksek korumalı SPF kullanması zorunludur.",
    image: "https://images.unsplash.com/photo-1521223344201-d169129f7b7d?auto=format&fit=crop&q=80&w=800",
    date: "25 Şubat 2024"
  },
  {
    id: 'leke-onarimi-lyndor',
    title: "Leke Onarımında Neden Lyndor Farkı?",
    category: "Cilt Sağlığı",
    excerpt: "Lekeler sadece yüzeyde değildir; köklü çözümler için klinik disiplin şart.",
    content: "Güneş lekeleri, hamilelik maskesi veya sivilce izleri... Hepsi cildin savunma mekanizmasının bir sonucudur. Lyndor Beauty & Wellness olarak leke onarımında 'yüzeysel soyma' yöntemlerini değil, cildi onaran ve melanin üretimini dengeleyen 'Leke Protokolleri'ni tercih ediyoruz. \n\nHemşire kökenli uzmanımız Bilge Çelik Dönmez rehberliğinde hazırlanan protokollerimizde, cildin bariyerini bozmadan sağlıklı hücre üretimini tetikliyoruz. Leke onarımı sabır ve doğru içerik bilgisi gerektirir. Siz de lekelerinizden kalıcı olarak kurtulmak istiyorsanız profesyonel cilt analizimiz için randevu alabilirsiniz.",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800",
    date: "14 Nisan 2024"
  },
  {
    id: 'leke-onarimi',
    title: "Leke Onarımında Yeni Nesil Yaklaşım",
    category: "Uzman Görüşü",
    excerpt: "İspanya Işıltısı ve özel protokollerle cildinizdeki ton farklarına veda edin.",
    content: "Lekeler cildin hafızasıdır. Onarım sürecinde sadece üst katmanı soymak yetmez, melanini dengelemek gerekir. Lyndor olarak uyguladığımız kombine terapilerle en inatçı lekelerde bile %80'e varan açılma sağlıyoruz.",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800",
    date: "05 Mart 2024"
  },
  {
    id: 'kalici-makyaj-dogallik',
    title: "Kalıcı Makyajda Doğallık Sanatı",
    category: "Kalıcı Makyaj",
    excerpt: "Uyanır uyanmaz hazır görünmek lüks değil, Lyndor ile artık bir standart.",
    content: "Kalıcı makyaj denildiğinde akla gelen 'yapay ve koyu' görüntüler Lyndor'da geçmişte kalıyor. Bizim vizyonumuz 'No-Makeup Makeup' etkisini kalıcı kılmak. \n\nMicroblading kıl tekniği ile kaşlarınızdaki boşlukları doğal yönünde dolduruyor, Dudak Pigmentasyonu ile solgun dudaklara doğal bebeksi bir pembelik kazandırıyoruz. Kullandığımız organik pigmentler zamanla grileşmez, cildinizle bütünleşerek yavaşça solar. Zamandan tasarruf etmek ve her an kusursuz görünmek için doğru adrestesiniz.",
    image: "https://www.dilekgezer.com/wp-content/uploads/2023/07/dudak-300x225.jpg",
    date: "16 Nisan 2024"
  },
  {
    id: 'kolajen-kaybi',
    title: "Kolajen Kaybını Nasıl Önleriz?",
    category: "Anti-Aging",
    excerpt: "25 yaşından sonra azalan kolajen üretimine profesyonel dokunuşlarla müdahale edin.",
    content: "Vücudumuz her yıl yaklaşık %1 oranında kolajen kaybeder. Radyofrekans ve profesyonel peeling uygulamaları fibroblast hücrelerini uyararak doğal kolajen üretimini artırır. Bu da cildin daha sıkı ve gergin görünmesini sağlar.",
    image: "https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?auto=format&fit=crop&q=80&w=800",
    date: "15 Mart 2024"
  },
  {
    id: 'lazer-epilasyon-konfor',
    title: "Buz Başlıklı Lazer ile Acısız Pürüzsüzlük",
    category: "Epilasyon",
    excerpt: "Eski nesil acılı lazer sistemlerini unutun; Lyndor'da konfor önceliğimiz.",
    content: "Lazer epilasyon seanslarının korkulu rüyası olan 'acı' hissi, Lyndor'daki yeni nesil buz başlıklı teknolojimizle tarihe karışıyor. \n\nNeden Lyndor Lazer? \n- Eksi derecelere ulaşan başlık sayesinde cilt serinletilir. \n- İnce ve açık renkli tüylerde bile yüksek başarı oranı sağlar. \n- Hijyenik ve tek kullanımlık aparatlarla uygulama yapılır. \n- 4 mevsim güvenle uygulanabilir. \n\nPürüzsüz bir cilde giden yolda en konforlu deneyimi Çatalca'daki merkezimizde keşfedin.",
    image: "https://www.dilasayan.com/wp-content/uploads/2024/11/soprano-titanium-3.webp",
    date: "18 Nisan 2024"
  },
  {
    id: 'lazer-hazirlik',
    title: "Lazer Epilasyon Öncesi Hazırlık",
    category: "Epilasyon",
    excerpt: "Maksimum verim almak için seans öncesi ve sonrası yapılması gerekenler.",
    content: "Seansa gelmeden 24 saat önce jilet uygulaması yapılmalıdır. Bölgeye krem, parfüm veya deodorant sürülmemelidir. Seans sonrası ise 24 saat boyunca sıcak su ve kese işlemlerinden kaçınılmalıdır.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
    date: "20 Mart 2024"
  },
  {
    id: 'sac-vitamini-dökülme',
    title: "Saç Vitamini ile Güçlü ve Gür Saçlar",
    category: "Saç Bakımı",
    excerpt: "Mevsimsel dökülmeleri durdurun, saç köklerinizi içeriden besleyin.",
    content: "Saç dökülmesi sadece genetik değil, stres ve vitamin eksikliği kaynaklı da olabilir. Lyndor 'Saç Vitamini' protokolü, saç derisinin ihtiyacı olan keratin, biotin ve özel büyüme faktörlerini doğrudan saç köklerine ulaştırır. \n\nEtkileri Nelerdir? \n- Dökülmeyi hızla azaltır. \n- Yeni saç oluşumunu destekler. \n- Mevcut saç tellerini kalınlaştırır. \n\nSaçlarınız sizin tacınızdır. Onlara hak ettiği bakımı profesyonel ellerde sunun.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    date: "20 Nisan 2024"
  },
  {
    id: 'gozenek-sikilastirma',
    title: "Geniş Gözenekler İçin Çözümler",
    category: "Cilt Sağlığı",
    excerpt: "Gözenek görünümünü minimize eden profesyonel uygulamalar ve ürün içerikleri.",
    content: "Niacinamide ve Salisilik Asit içeren rutinler gözenek temizliğinde etkilidir. Salonumuzdaki medikal bakımlar ile gözeneklerin içi boşaltılır ve sıkılaştırıcı serumlarla desteklenerek pürüzsüz bir görünüm elde edilir.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    date: "22 Mart 2024"
  },
  {
    id: 'dudak-pigmentasyonu',
    title: "Neden Dudak Pigmentasyonu Yaptırmalısınız?",
    category: "Kalıcı Makyaj",
    excerpt: "Dudaklardaki asimetriyi ve solgun görünümü gidermenin en doğal yolu.",
    content: "Her gün ruj tazeleme derdine son veren bu uygulama, dudak çerçevenizi belirginleştirir ve daha dolgun bir efekt yaratır. Kullanılan organik pigmentler sayesinde 'yapay' değil 'sağlıklı' bir görünüm sunuyoruz.",
    image: "https://www.dilekgezer.com/wp-content/uploads/2023/07/dudak-300x225.jpg",
    date: "25 Mart 2024"
  },
  {
    id: 'beslenme-cilt',
    title: "Beslenme ve Cilt Sağlığı İlişkisi",
    category: "Wellness",
    excerpt: "İçeriden desteklenmeyen bir cilt asla tam olarak parlayamaz.",
    content: "Antioksidan ağırlıklı beslenme ve bol su tüketimi cildin elastikiyetini koruyan en önemli destekçilerdir.",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=800",
    date: "28 Mart 2024"
  }
];

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/lyndor.tr',
  googleMaps: 'https://maps.app.goo.gl/jxzP2Te93GurRptx9',
  yandexMaps: 'https://yandex.com.tr/maps/-/CLHYuGNV',
  phone: '0540 513 11 34',
  address: 'Kaleiçi Mah., Karadeniz Cad. 42/1A Çatalca Konakları, Çatalca / İstanbul',
  email: 'info@lyndor.com.tr',
  whatsapp: 'https://wa.me/905405131134'
};