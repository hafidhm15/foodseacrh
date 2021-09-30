class DetailHeader extends HTMLElement {

  set update(value) {
    this.setAttribute('title', value.title);
    this.render();
  }

  render() {
    this.title = this.getAttribute("title") || null;

    this.innerHTML = `
        <style>
            .breadcrumb {
                font-size: 0.7rem;
                background-color: transparent;
                width:20px;
                padding: 0;
            }
        </style>
        <h5>${this.title}</h5>
        </div>`;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("detail-header", DetailHeader);