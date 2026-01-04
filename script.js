let buttons = document.querySelectorAll(".prod_card button");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].onclick = function () {

        let card = this.parentElement;

        let name = card.querySelector(".p_name").innerText;
        let price = card.querySelector(".price").innerText;

        let count = document.querySelector(".count");
        count.innerText = Number(count.innerText) + 1;

        alert("Added to cart\n" + name + "\nPrice: " + price);
    };
}
