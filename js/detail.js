let getDetailShoe = () => {
  const urlParam = new URLSearchParams(window.location.search);
  let id = urlParam.get("id");
  let promise = axios({
    method: "GET",
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
  });
  promise
    .then((res) => {
      renderDetailShoe(res.data.content, "renderDetail");
      console.log(res.data.content);
    })
    .catch((err) => {
      console.log(err);
    });
};
getDetailShoe();

let renderDetailShoe = (detailShoe, idDetail) => {
  let content = "";
  let { name, alias, price, shortDescription, image, size, relatedProducts } =
    detailShoe;
  content = `
          <div class="col">
            <img src=${image} alt="" class="w-lg-100 w-75"/>
          </div>
          <div class="col py-lg-0 py-5 px-lg-0 px-5">
            <h3 class="fs-5">${name}</h3>
            <h2 class="fw-bold text-uppercase fs-2">${alias}</h2>
            <p class="fw-bold text-success fs-3">${price} $</p>
            <hr />
            <p>Size:</p>
            <div class="row row-cols-6 ps-2">
              ${sizeDetailShoe(size)}
            </div>
            <div class="product_number mt-4 ">
              <div
                class="row row-cols-2 align-items-center justify-content-between ps-2"
              >
                <div class="col-3">
                  <div class="row row-cols-3 border border-dark ">
                    <button class="btn btn-decrease">-</button>
                    <input
                      type="number"
                      value="1"
                      class="border-0"
                      readonly="readonly" id="quantity"
                    />
                    <button class="btn btn-increase">+</button>
                  </div>
                </div>
                <div class="col-8">
                  <button class="btn btn-dark text-uppercase">buy now</button>
                </div>
              </div>
            </div>
            <hr />
            <p class="text-capitalize fs-4">${shortDescription}</p>
          </div>`;
  document.querySelector(`#${idDetail}`).innerHTML = content;
  renderRelatedShoe(relatedProducts, "renderRelated");
  let value = document.querySelector("#quantity").value * 1;
  document.querySelector(".btn-increase").onclick = () => {
    value++;
    document.querySelector("#quantity").value = value;
  };
  document.querySelector(".btn-decrease").onclick = () => {
    if (value > 1) {
      value--;
      document.querySelector("#quantity").value = value;
    }
  };
};

let renderRelatedShoe = (relatedShoe, idRelated) => {
  let content = "";
  for (let shoe of relatedShoe) {
    let { image, name, alias, price, id, shortDescription } = shoe;
    // content += `<div class="col">
    //         <div class="card text-center" onclick="window.location.href='../view/detail.html?id=${id}';">
    //           <img
    //             src=${image}
    //             class="card-img-top img-fluid border-bottom"
    //             alt="..."
    //           />
    //           <div class="card-body border-bottom border-dark-subtle">
    //             <h3 class="card-title fs-6 fw-light">${name}</h3>
    //             <p class="card-text fw-bold text-uppercase fs-5">${alias}</p>
    //           </div>
    //           <div class="row row-cols-2 align-items-center">
    //             <div class="col">
    //               <p class="my-0 text-uppercase fs-5 border-end border-dark-subtle bg-light text-dark">price</p>
    //             </div>
    //             <div class="col">
    //               <p class="my-0 text-success fs-5">${price} $</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>`;
    content += `
    <div class='col px-lg-3 px-5 mt-3 pt-4'>
    <div class="img-content text-center overlay-p ">
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
      <button class="button-50" onclick="window.location.href='../view/detail.html?id=${id}';">BUY NOW</button>
    </div>
  </div>
  `;
    document.querySelector(`#${idRelated}`).innerHTML = content;
  }
};

let sizeDetailShoe = (arr) => {
  let content = "";
  for (let size of arr) {
    content += `<input class="btn btn-light me-2" value=${size} readonly>`;
  }
  return content;
};
