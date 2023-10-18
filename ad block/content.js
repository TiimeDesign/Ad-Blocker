const adSelectors = [
    '.ad', 
    '[class*="ad-"]', 
    '[id*="ad-"]',
    '[class*="ads-"]',
    '[id*="ads-"]'
];

adSelectors.forEach(selector => {
    const ads = document.querySelectorAll(selector);
    ads.forEach(ad => {
        ad.style.display = 'none';
    });
});
