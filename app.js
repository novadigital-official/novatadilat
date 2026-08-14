// NOVA TADİLAT & RENOVASYON PROJE YÖNETİMİ (2026)
// Dynamic Discovery & Estimate Calculator

document.addEventListener('DOMContentLoaded', () => {
    const projectType = document.getElementById('projectType');
    const projectArea = document.getElementById('projectArea');
    const projectScope = document.getElementById('projectScope');
    const projectDistrict = document.getElementById('projectDistrict');
    const totalEstimateVal = document.getElementById('totalEstimateVal');
    const btnBookDiscovery = document.getElementById('btnBookDiscovery');

    function calculateEstimate() {
        if (!projectType || !projectArea || !projectScope || !totalEstimateVal) return;

        const baseTypeVal = parseInt(projectType.value, 10) || 80000;
        const areaMultiplier = parseFloat(projectArea.value) || 1.0;
        const scopeMultiplier = parseFloat(projectScope.value) || 1.0;

        // Base estimated price calculation
        const estimatedPrice = Math.round(baseTypeVal * areaMultiplier * scopeMultiplier);
        totalEstimateVal.textContent = '₺' + estimatedPrice.toLocaleString('tr-TR');
    }

    if (projectType) projectType.addEventListener('change', calculateEstimate);
    if (projectArea) projectArea.addEventListener('change', calculateEstimate);
    if (projectScope) projectScope.addEventListener('change', calculateEstimate);

    if (btnBookDiscovery) {
        btnBookDiscovery.addEventListener('click', () => {
            const typeText = projectType ? projectType.options[projectType.selectedIndex].text.split('(')[0].trim() : 'Daire Tadilatı';
            const areaText = projectArea ? projectArea.options[projectArea.selectedIndex].text : '100 - 150 m²';
            const scopeText = projectScope ? projectScope.options[projectScope.selectedIndex].text : 'Anahtar Teslim Standart';
            const districtText = projectDistrict ? projectDistrict.options[projectDistrict.selectedIndex].text : 'Muratpaşa / Lara';
            const priceText = totalEstimateVal ? totalEstimateVal.textContent : '₺250.000';

            const message = `Merhaba, AntalyadaTadilat.com.tr üzerinden ulaştım.%0A%0A*ÜCRETSİZ YERİNDE KEŞİF TALEBİ:*%0A• Proje: ${encodeURIComponent(typeText)}%0A• Alan: ${encodeURIComponent(areaText)}%0A• Kapsam: ${encodeURIComponent(scopeText)}%0A• İlçe / Bölge: ${encodeURIComponent(districtText)}%0A• Tahmini Bütçe Aralığı: ${encodeURIComponent(priceText)}%0A%0AMimarınızın keşif için iletişime geçmesini rica ederim.`;

            window.open(`https://wa.me/905070871789?text=${message}`, '_blank');
        });
    }

    calculateEstimate();
});
