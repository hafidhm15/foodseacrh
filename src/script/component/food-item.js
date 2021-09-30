class FoodItem extends HTMLElement {

    set receipe(item) {
        this._item = item;
        this.render();
    }

    switchPage() {
        $('main').hide();
        $('.details').show();
    }

    render() {
        this.innerHTML = `
        <style>
            .card {
                font-family: "Roboto", sans-serif;
                background-color: white;
                padding: 1.618em;
                border-radius: 20px;
                cursor: pointer;
                -webkit-box-shadow: 5px 5px 24px 15px rgba(0, 0, 0, 0.04);
                box-shadow: 5px 5px 24px 15px rgba(0, 0, 0, 0.04);
                
            }

            .card:hover {
                opacity: 0.5;
            }

            .card img.card-img {
                height: 140px;
                object-fit: cover;
                border-radius: 1rem;
            }

            .card .card-body {
                padding: 1.25rem 0 1.25rem 0;
            }

            .card .card-body .card-title {
                font-size: 0.9rem;
            }
        </style>
        <div class="col mb-4">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor=".jumbotron">
                <div class="card card-receipe" data-id="${this._item.id}">
                    <img src="https://spoonacular.com/recipeImages/${this._item.image}" class="card-img card-img-top" alt="${this._item.title}" />
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${this._item.title}</h5>

                    </div>
                </div>
            </div>
        </div>`;

        // Sequenced Animation
        let delay = 0;
        $('[data-aos]').each(function () {
            if ($(this).is(":visible") == true) {
                delay = delay + 200;
                $(this).attr('data-aos-delay', delay);
            }
        });

        // PreLoader Element
        const loaderElement = document.querySelector("#loader-text");

        // Card Receipe on Click
        const cardRecipe = this.querySelector(".card-receipe");
        cardRecipe.addEventListener("click", function () {
            const idReceipe = this.getAttribute("data-id");
            informationRecipe(idReceipe);
        });
    }
}

customElements.define("food-item", FoodItem);