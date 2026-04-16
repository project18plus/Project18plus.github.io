// =========================
// 1. IKLAN BIASA (1 LINK)
// =========================
// Cara pakai di HTML:
// onclick="openAd(TEST_AD_1)"
function openAd(https://www.profitablecpmratenetwork.com/gdp3y55e1?key=276987812d5d44414d3c88174a146b38) {
  window.open(url, '_blank');
}


// =========================
// 2. RANDOM ADS (ACAK)
// =========================
// Cara pakai di HTML:
// onclick="openRandomAd()"
function openRandomAd() {
  const ads = [TEST_AD_1, TEST_AD_2, TEST_AD_3];

  const random = ads[Math.floor(Math.random() * ads.length)];
  window.open(random, '_blank');
}


// =========================
// 3. IKLAN DENGAN DELAY
// =========================
// Cara pakai:
// onclick="openAdDelay(TEST_AD_1)"
function openAdDelay(url) {
  setTimeout(() => {
    window.open(url, '_blank');
  }, 2000); // 2 detik
}


// =========================
// 4. ADS KOMBINASI (DOUBLE ACTION)
// =========================
// Cara pakai:
// onclick="openWithRedirect(TEST_AD_1, 'player.html')"
function openWithRedirect(adUrl, fakePage) {
  window.open(adUrl, '_blank');
  window.location.href = fakePage;
}