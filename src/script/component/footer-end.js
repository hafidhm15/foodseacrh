class FooterEnd extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .mini-footer {
            background:#192027;
            text-align:center;
            padding:32px 0
           }
           .mini-footer p {
            margin:0;
            line-height:26px;
            font-size:15px;
            color:#999
           }
           .mini-footer p a {
            color:#5867dd
           }
           .mini-footer p a:hover {
            color:#34bfa3
           }
           .widget-about img {
            display:block;
            margin-bottom:30px
           }
           .widget-about p {
            font-weight:400
           }
           .widget-about .contact-details {
            margin:30px 0 0 0
           }
           .widget-about .contact-details li {
            margin-bottom:10px
           }
           .widget-about .contact-details li:last-child {
            margin-bottom:0
           }
           .widget-about .contact-details li span {
            padding-right:12px
           }
           .widget-about .contact-details li a {
            color:#5867dd
           }
           @media (max-width:991px) {
            .footer-menu {
             padding-left:0
            }
           }
        </style>
        <footer class="footer-area footer--light">      
        <div class="mini-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="copyright-text">
                  <p>© 2021
                    <a href="#">FoodTalk</a>. All rights reserved. Created by
                    <a href="#">Hafidh</a>
                  </p>
                </div>
      
                <div class="go_top">
                  <span class="icon-arrow-up"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>`;
}
}

customElements.define("footer-end", FooterEnd);