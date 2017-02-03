let obj = {
  numberSpanClasses: [
    { class: 'glyphicon glyphicon-plus-sign', ariaHidden: true },
    { class: 'number', ariaHidden: false },
    { class: 'glyphicon glyphicon-circle-arrow-left', ariaHidden: true }
  ],
  buttons: [
    { class: 'key', value: '1' },
    { class: 'key', value: '2' },
    { class: 'key', value: '3' },
    { class: 'key', value: '4' },
    { class: 'key', value: '5' },
    { class: 'key', value: '6' },
    { class: 'key', value: '7' },
    { class: 'key', value: '8' },
    { class: 'key', value: '9' },
    { class: 'key', value: '*' },
    { class: 'key', value: '0' },
    { class: 'key', value: '#' }
  ]
};

const body = document.body;
class Keypad {
  constructor(numberSpanClasses, buttons) {
    this.numberSpanClasses = numberSpanClasses;
    this.buttons = buttons;

  }

  new(elemName) {
    return document.createElement(elemName);
  }

  createHeader() {

    const header = this.new('header');
    const div = this.new('div');
    header.className = 'header';
    div.className = 'container top-radius';
    const h2 = this.new('h2')
    h2.textContent = 'Keypad'
    body.append(header);
    header.append(div);
    div.append(h2);
    body.insertBefore(header, document.body.querySelector('footer'))

  }

  createMain() {

    const main = this.new('main');
    const divContainer = this.new('div');
    const divNumber = this.new('div');
    const divButton = this.new('div');
    main.className = 'main';
    divContainer.className = 'container';
    divNumber.className = 'number';
    divButton.className = 'keypad-holder';

    for (let i = 0; i < this.numberSpanClasses.length; i++) {
      const span = this.new('span');
      span.className = this.numberSpanClasses[i].class;
      span.setAttribute('aria-hidden', this.numberSpanClasses[i].ariaHidden);
      divNumber.append(span);
    }

    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.new('button');
      button.className = this.buttons[i].class;
      button.textContent = this.buttons[i].value;

      button.onclick = function() {
        document.querySelector('span.number').textContent += button.textContent;

      };

      body.append(main)
      main.append(divContainer)
      divContainer.append(divNumber)
      divButton.append(button);
      divContainer.append(divButton)
    }

    const call = this.new('button');
    call.className = 'key';
    const span = this.new('span');
    span.className = 'glyphicon glyphicon-earphone';
    span.setAttribute('aria-hidden', 'true');
    call.append(span);
    divButton.append(call);
    body.insertBefore(main, document.body.querySelector('footer'))


  }

  render() {

    this.createHeader()
    this.createMain()

  }
}

let k = new Keypad(obj.numberSpanClasses, obj.buttons);
k.render();
