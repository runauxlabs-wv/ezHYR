var swiper = new Swiper(".Swiper-main", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".Swiper-section", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//chart
const chart = $('#chartBar');
const chartBar = new Chart(chart, {
  type: 'horizontalBar',
  data: {
    labels: ['교육과 여과문화', '가정환경과 대안양육', '기초보건과복지', '폭력으로부터의아동보호', '아동권리실현의기반', '기타'],
    datasets: [{
        label: '2021 국내 사업실적',
        data: [264826, 127134, 65560, 38217, 37442, 58364],
        backgroundColor: ["rgb(12, 73, 46)", "#3c7058", "#7da08f", "#93ccb1", "#c1e6d4", "#dff0e8"], //배경색상
      }

    ]
  },
  options: {
    legend: {
      display: false
    },
    maintainAspectRatio: false, //그래프의 비율 유지 
    plugins: { // 라벨 숨기기
      legend: {
        display: false
      },
    },
    responsive: false,
    backdropColor: 'white',
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#205c40',
          fontSize: 12,
          fontStyle: "bold"
        },
        gridLines: {
          color: "rgba(0,0,0,0)",
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: 'rgba(12, 13, 13, 0.5)',
          fontSize: 11
        },
        gridLines: {
          color: "rgba(0,0,0,0.1)",
          lineWidth: 1
        }
      }]
    },
    tooltips: {
      backgroundColor: '#0a2e1d'
    }
  }
});