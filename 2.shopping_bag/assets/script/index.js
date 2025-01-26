const calculTotalPrice= () =>{
    const price1 = document.getElementById("price1").innerText;
    const price2 = document.getElementById("price2").innerText;
    const price3 = document.getElementById("price3").innerText;
    const price4 = document.getElementById("price4").innerText;
    const totalPrice = price1 + price2 + price3 + price4;
    document.getElementById("total-price-items").innerText = totalPrice;
}
const useCoupon= () =>{
    const totalPriceText = document.getElementById("total-price-items").innerText;
    let discount = totalPriceText * 0.20;
    let newTotalPrice = totalPriceText - discount;
    document.getElementById("total-price-items").innerText = newTotalPrice.toFixed(2);

    const priceElements = document.querySelectorAll(".price"); 
    priceElements.forEach((priceElement) => {
        let price = priceElement.innerText;
        let newPrice = price - price * 0.20;
        priceElement.innerText = newPrice.toFixed(2);
    });

    document.getElementById('use-coupon-20').removeEventListener('click', useCoupon);
}

document.getElementById('use-coupon-20').addEventListener('click', useCoupon);
