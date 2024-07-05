var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const productsList = document.querySelector(".list-products");
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield getAllProducts();
    products.forEach(product => {
        productsList.innerHTML += `
        <div class="product">
          <div class="top">
            <img src="${product.image}" alt="product" class="img-product">
            <a href="#" class="btn btn-view"><i class="fas fa-eye icon"></i></a>
            <a href="#" class="btn btn-love"><i class="fas fa-heart icon"></i></a>
            <a href="#" class="btn btn-buy"><i class="fas fa-shopping-cart icon"></i></a>
          </div>
          <div class="bottom">
            <h3 class="product-name">${product.title}</h3>
            <h4 class="product-price">$ <span>${product.price}</span></h4>
          </div>
        </div>
        `;
    });
}));
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://fakestoreapi.com/products/');
    let data = yield response.json();
    return data;
});
export {};
