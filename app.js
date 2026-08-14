// ══════════════════════════════════════════════════════════════
// NOVA TADİLAT & RENOVASYON PROJE YÖNETİMİ (2026)
// Dynamic Discovery & Estimate Calculator + Universal Ads Conversion Tracking
// ══════════════════════════════════════════════════════════════

window.dataLayer = window.dataLayer || [];
function gtag(){ window.dataLayer.push(arguments); }

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

            // Google Ads / Meta Ads Conversion Trigger
            window.dataLayer.push({
                event: 'generate_lead',
                conversion_type: 'whatsapp_discovery',
                lead_category: 'Tadilat Keşif',
                project_type: typeText,
                estimated_value: priceText,
                currency: 'TRY'
            });
            if (typeof fbq === 'function') {
                fbq('track', 'Lead', { content_name: 'Tadilat Keşif', value: 250000, currency: 'TRY' });
            }

            const message = `Merhaba, AntalyadaTadilat.com.tr üzerinden ulaştım.%0A%0A*ÜCRETSİZ YERİNDE KEŞİF TALEBİ:*%0A• Proje: ${encodeURIComponent(typeText)}%0A• Alan: ${encodeURIComponent(areaText)}%0A• Kapsam: ${encodeURIComponent(scopeText)}%0A• İlçe / Bölge: ${encodeURIComponent(districtText)}%0A• Tahmini Bütçe Aralığı: ${encodeURIComponent(priceText)}%0A%0AMimarınızın keşif için iletişime geçmesini rica ederim.`;

            window.open(`https://wa.me/905070871789?text=${message}`, '_blank');
        });
    }

    // Phone Click Conversion Tracking
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            window.dataLayer.push({
                event: 'contact_phone_click',
                phone_number: '05070871789',
                lead_category: 'Tadilat Telefon'
            });
            if (typeof fbq === 'function') {
                fbq('track', 'Contact', { content_name: 'Phone Call' });
            }
        });
    });

    calculateEstimate();
});
