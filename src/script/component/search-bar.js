class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <style>
            h2{
                text-align:center;
                margin-left: 120px;
                font-family: "Montserrat", sans-serif;
            }
            input[type="search"] {
                background-color: #f8f8f8;
                border: 0;
            }

            input[type="search"]::placeholder {
                font-size: 0.8rem;
                color: $gray-500;
            }

            .search-container {
                display: flex;
                margin-left:150px;
            }
                
            .search-container .form-control {
                padding-left: 3rem;
            }

            .search-container .placeholder-icon {
                position: absolute;
                z-index: 2;
                display: block;
                width: 4rem;
                height: 2.375rem;
                line-height: 2.375rem;
                text-align: center;
                pointer-events: none;
                color: $gray-500;
            }
        </style>
        <h2>List food</h2>
        <div class="search-container form-group" id="search">
            <span class="fa fa-search placeholder-icon"></span>
            <input placeholder="Search Food or Dessert" class="form-control mr-sm-0" id="searchElement" type="search">
            <button class="btn btn-danger" id="searchButtonElement" type="button">Search</button>
        </div>`;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);