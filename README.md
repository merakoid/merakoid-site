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
