# Merakoid — ücretsiz statik web sitesi

## Dosyalar
- `index.html`: sayfa yapısı ve içerik
- `styles.css`: karanlık/gizemli, mobil uyumlu tasarım
- `script.js`: hikâye kartları, kategori filtreleri, arama ve detay penceresi
- `favicon.svg`: site simgesi

## Bilgisayarda açma
`index.html` dosyasına çift tıkla. Site tarayıcıda açılır. Google Fonts için internet bağlantısı gerekir; bağlantı olmazsa sistem yazı tipleri kullanılır.

## İçerik değiştirme
`script.js` içindeki `stories` dizisinde başlık, açıklama, kategori ve gerçek bilgileri düzenleyebilirsin. Her kart için bir `id`, `title`, `subtitle`, `category`, `categoryLabel`, `date`, `symbol`, `art`, `summary` ve `fact` alanı bulunur. Yeni kart eklerken var olan kartın biçimini kopyala.

## Ücretsiz yayınlama (GitHub Pages)
1. GitHub.com'da ücretsiz hesap oluştur veya giriş yap.
2. Yeni bir public repository oluştur; örneğin `merakoid-site`.
3. Bu klasördeki dosyaları repository'nin ana dizinine yükle (Upload files) ve commit et.
4. Repository > Settings > Pages bölümüne gir.
5. Build and deployment altında `Deploy from a branch` seç; branch olarak `main`, klasör olarak `/ (root)` seçip Save'e bas.
6. GitHub birkaç dakika içinde `https://KULLANICIADIN.github.io/merakoid-site/` benzeri bir adres verir.

## Kendi alan adını bağlama
Kendi alan adının (ör. `merakoid.com`) satın alınması genellikle ücretlidir; siteyi barındırmak ise GitHub Pages ile ücretsiz olabilir. Alan adını satın aldıktan sonra Settings > Pages > Custom domain alanına yaz ve DNS kayıtlarını alan adı sağlayıcında GitHub'ın o an gösterdiği talimatlara göre ayarla. DNS yayılımı ve HTTPS sertifikası biraz zaman alabilir. Alan adı satın almadan `github.io` adresiyle ücretsiz yayın yapabilirsin.

## Yayın öncesi kontrol
- Instagram kullanıcı adının doğru olduğundan emin ol; bağlantı şu anda `instagram.com/merakoid/` olarak ayarlı.
- Örnek hikâyeleri ve tarihleri kaynaklarla kontrol et; özellikle popüler anlatılardaki kesin olmayan ayrıntıları doğrula.
- Siteye kendi Reels/YouTube video bağlantılarını eklemek istersen kartlara video bağlantısı veya gömülü oynatıcı eklenebilir.

## SEO ve hikâye sayfaları
- Her hikâye için ayrı HTML sayfası oluşturuldu.
- `sitemap.xml` hikâye sayfalarını listeler.
- `robots.txt` site haritasını işaret eder.

## Instagram Reels otomatik senkronizasyonu

Ana sayfadaki **Reels** bölümü `reels.json` dosyasını okur. GitHub Actions iş akışı her 6 saatte bir Instagram Graph API'den son videoları alıp bu dosyayı günceller. GitHub Pages, değişiklikten sonra siteyi yeniden yayınlar. Barındırma ve iş akışı GitHub'ın ücretsiz kullanım sınırları içinde kalır.

### Bir defalık kurulum: Instagram API anahtarları

Bu bölümün otomatik çalışması için Instagram hesabının **Profesyonel (İçerik Üreticisi veya İşletme)** olması ve bir Facebook Sayfasına bağlanması gerekir.

1. Meta for Developers üzerinden bir Meta uygulaması oluştur ve Instagram Graph API erişimini yapılandır. Instagram profesyonel hesabı için gereken erişim izinlerini ver.
2. Instagram profesyonel hesap kimliğini (`IG_USER_ID`) ve geçerli erişim belirtecini (`IG_ACCESS_TOKEN`) edin. Erişim belirtecini kimseyle paylaşma ve site dosyalarına yazma.
3. GitHub deposunda **Settings → Secrets and variables → Actions → New repository secret** bölümüne git.
4. `IG_USER_ID` adlı secret oluşturup hesap kimliğini ekle.
5. `IG_ACCESS_TOKEN` adlı secret oluşturup erişim belirtecini ekle.
6. **Actions → Sync Instagram Reels → Run workflow** ile ilk senkronizasyonu elle başlat. Sonrasında iş akışı her 6 saatte bir çalışır.

Secrets eklenene kadar otomatik API senkronizasyonu çalışmaz; ana sayfada mevcut başlangıç Reels bağlantısı görünür. Meta API erişimi/izinleri hesap yapılandırmasına bağlıdır. İş akışı hata verirse GitHub deposundaki **Actions** sekmesinden hata kaydını kontrol et.

## İstatistik takibi

Instagram performans istatistikleri Metricool üzerinden takip edilir. Reels senkronizasyonu siteye yeni videoları taşır; Instagram görüntülenme, erişim, beğeni, yorum, kaydetme ve paylaşım verileri ayrı bir analiz kaynağıdır ve siteye yazılmaz.
