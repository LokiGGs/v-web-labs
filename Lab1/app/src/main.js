const buttons = document.querySelectorAll('.add-to-cart-button');

buttons.forEach(button => {
    button.addEventListener('click', function () {

        this.classList.toggle('active');

        if (this.textContent === 'В корзину') {
            this.textContent = 'Товар в корзине';
        } else {
            this.textContent = 'В корзину';
        }
    })
});