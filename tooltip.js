const template = document.createElement("template");
template.innerHTML = `
<style></style>

<div>
mikey testing
</div>
`;

class ToolTip extends HTMLElement {
  constructor() {
      super();
    this.attachShadow({ mode: "open" }); 
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("cr-tooltip", ToolTip);
