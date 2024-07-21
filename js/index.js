let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        document.getElementById("header").className = "scroll-event1"
    } else {
        // Scroll lên
        document.getElementById("header").className = "scroll-event2"


    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Đặt lại lastScrollTop
});


function layDanhSachGiay() {
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      methods: "GET",
    });
    promise
      .then((res) => {
        renderDuLieuGiay(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  layDanhSachGiay();
  
  function renderDuLieuGiay(arrGiay) {
    content1 = "";
    content2 = "";
    content3 = "";
    for (let giay of arrGiay) {
      let { image, price, shortDescription, name, id } = giay;
      if (id == 20) continue;
      if (id <= 7) {
        content1 += `
          <div class="col-xl-3 col-lg-4"">
            <div class="img-content text-center overlay-p">
              <img
                src=${image}
                class="w-100"
                alt=""
              />
              <p class="overlay">$${price}</p>
            </div>
            <h3 class="mt-3">${name}</h3>
            <p class="des">
                  ${shortDescription}
            </p>
            <div class="btn-group d-flex justify-content-between">
              <i class="fa-regular fa-heart"></i>
              <button class="button-50" onclick="goLink(${id})">BUY NOW</button>
            </div>
          </div>
          `;
      }
      if (id > 7 && id <= 13) {
        content2 += `
          <div class="col-xl-3 col-lg-4">
            <div class="img-content text-center overlay-p">
              <img
                src=${image}
                class="w-100"
                alt=""
              />
              <p class="overlay">$${price}</p>
            </div>
            <h3 class="mt-3">${name}</h3>
            <p class="des">
                  ${shortDescription}
            </p>
            <div class="btn-group d-flex justify-content-between">
              <i class="fa-regular fa-heart"></i>
              <button class="button-50" onclick="goLink(${id})">BUY NOW</button>
            </div>
          </div>
          `;
      }
      if (id > 13) {
        content3 += `
          <div class="col-xl-3 col-lg-4">
            <div class="img-content text-center overlay-p">
              <img
                src=${image}
                class="w-100"
                alt=""
              />
              <p class="overlay">$${price}</p>
            </div>
            <h3 class="mt-3">${name}</h3>
            <p class="des">
                  ${shortDescription}
            </p>
            <div class="btn-group d-flex justify-content-between">
              <i class="fa-regular fa-heart"></i>
              <button class="button-50" onclick="goLink(${id})">BUY NOW</button>
            </div>
          </div>
          `;
      }
    }
    document.getElementById("item1").innerHTML = content1;
    document.getElementById("item2").innerHTML = content2;
    document.getElementById("item3").innerHTML = content3;
  
  }
  

  function goLink(id){
    window.location.href = `http://127.0.0.1:5500/Project_Shoes_Shop/view/detail.html?id=${id}`  
  }