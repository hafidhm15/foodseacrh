import Icon from "../../assets/images/icon.png";

class HeaderNav extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <style>
            .Icon {
                width: 48px;
                border-radius: 15px;
            }
            
            .navbar .navbar-brand {
                font-family: "Fira Sans Condensed", sans-serif;
                font-size: 2rem;
                margin-right: 8rem;
                backgroud-color:red;
            }

            .navbar .nav-item {
                margin-left: 2rem;
            }

            .navbar .nav-item.active {
                font-weight: bold;
            }

            .navbar-nav  .nav-sidebar-item {
                font-family: "Open Sans", sans-serif;
                font-size: 0.8rem;
                margin-top: 0.5rem;
            }
        </style>
        <header class="container my-3">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <a class="navbar-brand" href="#">
                    <img src="${Icon}" class="Icon"> FoodTalk
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Order</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FAQ</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                    </ul>
                     <div class="navbar-action d-sm-none d-md-none d-lg-block">
                        <button type="button" class="btn btn-dark rounded-pill">
                            Get Your Food Here
                        </button>
                    </div>
                </div>
            </nav>
        </header>`;
    }
}

customElements.define("header-nav", HeaderNav);