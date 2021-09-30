import Banner from "../../assets/images/banner.jpg";

class HeaderJumbo extends HTMLElement {

    connectedCallback() {
        this.title = this.getAttribute("title") || null;
        this.description = this.getAttribute("description") || null;
        this.action = this.getAttribute("action") || null;

        this.innerHTML = `
        <style>
        .jumbotron {
                border-radius: 1.5rem;
                background-color: #fce0dc;
                background: url(${Banner});
                height:400px;
                width:800px
                background-position: center; /* Center the image */
                background-repeat: no-repeat; /* Do not repeat the image */
                background-size: cover;  
                font-family: "Open Sans", sans-serif;
                margin-bottom: 2rem;
                margin-left:100px
            }

            .jumbotron p{
                margin-top:20px
            }

             .jumbotron .btn {
                font-weight: bold;
                margin-top:200px;
                margin-left:20px;
            }

            
            .jumbotron .btn:hover {
                opacity: 0.8;
            }

        </style>
  <div class="jumbotron">
        <div class="container">
          <p><a class="btn btn-primary btn-lg" href="#search" role="button">Learn more &raquo;</a></p>
        </div>
      </div>`;
    }
}

customElements.define("header-jumbo", HeaderJumbo);