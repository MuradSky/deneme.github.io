DENEME PROJE SONUÇ AÇIKLAMALARI

Node.js Start
1.  Terminali çalıştır ve  $ npm i    komut gir
2.  node_modules yüklendikten sonra  $ node app     komut ve enter bas
3.  Tarayıcı satırında(Browser) http://localhost:3000/ portu gir ve enter bas

Project Render and Functions 
1. Tek sayfadan oluşturulan node.js uygulaması açılacak
2. DOM yüklendikten sonra Header panel, panel uzerinde renklendirilmiş Buttons ve Tuval - üzerinde SVG ile çizlmiş bir Ev evin içinde bir Fan olacak
3. Fan default olarak disabled/sabit veya yok gri reginde kalaçak:
       a) Fanı çalıştıra bilmeniz için ilk önce onu true(yani PASİF dümesi) - tıklamaniz gerekir.
       b) PASİF düvmesini true yaptıktan sora Fanı AKTİF yapabilmeniz için AKTİF düvmesine tıklamaniz gerekir.
          PASİF - AKTİF düvmeler arasında fan normal çalışabilir
       c) Fanı tamamen YOK etmeniz için YOK düvmesine tıklamaniz gerekir.
4. Bütün Forntend scriptlar ve css dosyalar, public klasöründen express üzerinden dinamic olarak Render yapılyor.
5. Node.js Proje MVC mimarisine göre modullere ayrılmıştır:
    I) public klasöründe tüm Forntend'a ayıt dosyalar bulunmaktadır 
    II) controller klasöründe Roting'i kontrol eden dosya mainController.js bulunmaktadır | routes/mainRoutes.js dosyasına export ediliyor
    III) routes klasöründe Controllerden bağlantı yolu alımaktadır ve express.Router(); metodu ile işlenerek app.js dosyasına export yapılmaktadır 
    IV) views klasöründe(içinde partials klasörü) .hbs(handleBars module) dosyaları bulunmakta,bunlar dinamik olarak birleşerek Renderingde HtmlDOM oluşturyorlar
    V) app.js bu dosyada tüm express.js üzerinde yükardaki tüm fonksiyonlar birleşeyor ve Server(Sunucu) port:3000 üzerinden Client(Tarıycı) aktarılyor
6) Projede sadece express.js ve hbs(handleBars) kullanıldı

Biraz kendimden açılama.
0) deneme 2 de vermiş olduğunuz icon-fan-big kullandım,şuan animasyonda saat dilimine göre dönmiyor,onun sebebi vectorun tesrs olması
   onu düzeltmeyi şuanki projede düşünmedim,hatta denedim inkscape'da olumlu bir sonuç alamadım, vaz geçtim
1) css selector adlandırmada biraz değşiklik yaptım, buttonlar için css BEM metodoloji kullandım
2) örnekdeki buttons yapısını değiştirdim, onclick fonksiyonlar sildim ve ranklendirmalerini statusuna göre yaptım,hangi buttona tıklanırsa ona active class akleniyor diğerlerinden kaldırılyor
3) public'deki SVG.js, .js dosyalarını bir dosyada yazmaktan vaz geçtim ve ES6'nın sunduğu module js kullandım(dosyaları modullere ayırdım) 
    ve bir dosyada hepsini import - export metodu ile birleştirdim ve Render'de tek <script></script> tag üzerinden yüklenmesini sağladım
4) daha önce JSDOC ile çalışmadığım için dokamtasyon açıklamasını yapabildiğim kadar yaptım.
5) adaptive ve responsive design @media üzerinden sağladım,kontroll ettim, tüm ekran boyutlarına göre ugun göstermekte
    PC ekran boyutlarını şu sayfadan takip ediyorum : https://www.hobo-web.co.uk/best-screen-size/

6) Fan animasyonu için ise extra kod yazmam gerekti 3 farklı yöntem ile yapabilme şansım vardı ama ben basit ve kolaylık için SVG'nin kendisine ait animateTransform metodunu kullandım
    I) SVG rect objesi uzerinden js ile manipulyasyon yapmak(Object Math parametrelerini ve fonksiyonlarını kullanarak);
    II) SVG rect objesi uzerinden Css animation ve @keyframes fonksiyonunu kullanarak;
    III) SVG animateTransform objesi uzerinden ve parametrelerini kullanarak js ile manipulyasyon.


Umarım uygun olmuştur, ve sizinde önerilerinize açıhım.
__________________________________________________________________________________________________
   
   
