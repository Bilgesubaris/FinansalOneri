// Reklam verilerini tutan obje
const adData = {
    version: "20220620-desktop-1",
    totalBidders: 21,
    bidFactors: {
        adagio: 0.99,
        appnexus: 0.94,
        criteo: 0.96,
        holid: 0.98,
        insticator: 1.00,
        ix: 0.99,
        medianet: 0.99,
        minutemedia: 0.98,
        monetixads: 0.99,
        nobid: 0.98,
        ozone: 0.99,
        projectagora: 0.70,
        pubmatic: 0.98,
        richaudience: 0.97,
        rise: 0.97,
        seedtag: 0.99,
        smilewanted: 0.93,
        teads: 0.98,
        triplelift: 0.98,
        vidazoo: 1.00,
        yandex: 0.92
    },
    adUnits: [
        {
            placement: "Billboard_Default",
            sizes: [[980, 250], [970, 250], [970, 90], [728, 90]],
            bidders: 21
        },
        {
            placement: "Sideblock_1_Default", 
            sizes: [[300, 600], [300, 250], [336, 280]],
            bidders: 21
        },
        {
            placement: "Sideblock_2_Default",
            sizes: [[336, 280], [300, 250]],
            bidders: 21
        }
    ]
};

// Grafik renk paleti - Dengeli renkler
const chartColors = {
    primary: '#B8B8B8',     // Gümüş (mat)
    secondary: '#8B8878',   // Koyu gümüş
    accent: '#D4AF37',      // Mat altın
    silver: '#A9A9A9',      // Orta gümüş
    gold: '#CFB53B',        // Açık altın
    darkGold: '#996515',    // Koyu altın
    // Pasta grafik için gümüş ve altın tonları
    pieColors: [
        '#B8B8B8',    // Mat gümüş
        '#D4AF37',    // Mat altın
        '#A9A9A9',    // Orta gümüş
        '#CFB53B',    // Açık altın
        '#8B8878'     // Koyu gümüş
    ]
};

// Grafikleri güncelle
function updateCharts() {
    // Bidder Performance Chart
    const bidderLabels = Object.keys(adData.bidFactors);
    const bidderValues = Object.values(adData.bidFactors);

    const bidderChart = new Chart(document.getElementById('bidderPerformance'), {
        type: 'bar',
        data: {
            labels: bidderLabels,
            datasets: [{
                label: 'Bidder Performance',
                data: bidderValues,
                backgroundColor: bidderValues.map(value => {
                    if (value <= 0.96) return '#1c4966';      // Koyu mavi (düşük performans)
                    if (value >= 0.97 && value <= 0.99) return '#89CFF0';  // Bebek mavisi (orta performans)
                    return '#00b7ff';      // Parlak mavi (yüksek performans)
                }),
                borderColor: '#2b709b',    
                borderWidth: 1,
                hoverBackgroundColor: '#4a8db7'  // Hover rengi
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            }
        }
    });

    // Ad Units Size Distribution
    const sizeData = {
        'Billboard': adData.adUnits[0].sizes.length,
        'Sideblock 1': adData.adUnits[1].sizes.length,
        'Sideblock 2': adData.adUnits[2].sizes.length
    };

    new Chart(document.getElementById('adUnitSizes'), {
        type: 'pie',
        data: {
            labels: Object.keys(sizeData),
            datasets: [{
                data: Object.values(sizeData),
                backgroundColor: chartColors.pieColors,
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'white',
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

// Sayfa yüklendiğinde grafikleri güncelle
document.addEventListener('DOMContentLoaded', updateCharts);