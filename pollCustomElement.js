class pollElement extends HTMLElement {
  constructor() {
    super();

    this._data = { question: "Do you want to confirm your choice?", answers: ["Yes, I am sure.", "No, I will reselect"] };
    // let _data = null;
    // Element interact with DOM
    this._$question = null;
    this._$answers = null;
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    #question{
        background-color: deepskyblue;
        color: white;
        padding: 10px;
        margin: 0px;
    }  
    #answers{
        background-color: lightgray;
        list-style: none;
        margin: 0px;
        padding-left: 0px;
      }
      #answers li{
        padding: 10px;
      }
      #answers li:hover{
        background-color: mediumseagreen;
        color: white;
      }
      .selected{
        background-color: green;
        color: white;
      }
    </style>
    <container id="poll-container">
    <h3 id="question"></h3>
    <ul id="answers"><ul>
    </container>    
    `;

    this._$question = document.querySelector("#question");
    this._$answers = document.querySelector("#answers");
    this._$answers.addEventListener("click", (event) => {
      this._$answers.querySelectorAll("li").forEach(($li) => {
        $li.classList.remove("selected");
        if ($li === event.target) {
          $li.classList.add("selected");
        }
      });
    });
    this._render();
  }

  // render function to render the data
  _render() {
    if (this._data !== null) {
      this._$question.innerHTML = this._data.question;

      this._data.answers.forEach((answer) => {
        const $li = document.createElement("li");
        $li.innerHTML = answer;
        this._$answers.appendChild($li);
      });
    }
  }
}
window.customElements.define("poll-element", pollElement);
