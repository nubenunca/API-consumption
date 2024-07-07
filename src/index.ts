import{
    IResponseEcomerce,
    Category,
    Rating
} from "./interfaces/response-ecomerce.interface.js"

const productsList=document.querySelector(".list-products") as HTMLDivElement;

document.addEventListener("DOMContentLoaded", async ()=>{
    const products : IResponseEcomerce[] = await getAllProducts();

    products.forEach(product => {
        productsList.innerHTML +=`
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
        `

    });
})



const getAllProducts = async(): Promise<IResponseEcomerce[]> =>{
    const response = await fetch('https://fakestoreapi.com/products/')
    let data: IResponseEcomerce[] = await response.json();
    return data;
}





