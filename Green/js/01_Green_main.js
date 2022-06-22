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
  var context = document
  .getElementById('chartBar')
  .getContext('2d');
var myChart = new Chart(context, {
  type: 'bar', // 차트의 형태
  data: { // 차트에 들어갈 데이터
      labels: [
          //x 축
          '1','2','3','4','5','6','7','8'
      ],
      datasets: [
          { //데이터
              label: 'test1', //차트 제목
              fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
              data: [
                764826,127134,65560,38217,37442,20946,15742,21676//x축 label에 대응되는 데이터 값
              ],
              backgroundColor: [
                  //색상
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  //경계선 색상
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1 //경계선 굵기
          }/* ,
          {
              label: 'test2',
              fill: false,
              data: [
                  8, 34, 12, 24
              ],
              backgroundColor: 'rgb(157, 109, 12)',
              borderColor: 'rgb(157, 109, 12)'
          } */
      ]
  },
  options: {
      scales: {
          yAxes: [
              {
                  ticks: {
                      beginAtZero: true
                  }
              }
          ]
      }
  }
});
