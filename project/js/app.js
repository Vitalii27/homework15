const users = {
  contacts: [
    { Name: 'Иван', LastName: 'Иванов', Email: 'ivanov@mail.ru' },
    { Name: 'Сергей', LastName: 'Сергеев', Email: 'serg@mail.ru' },
    { Name: 'Александр', LastName: 'Александров', Email: 'alex@mail.ru' },
    { Name: 'Мария', LastName: 'Иванова', Email: 'mary@mail.ru' },
    { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' },
    { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' },
    { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' },
    { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' },
    { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' },
    { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' },
    { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' },
    { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' }
  ],
  headerName: ['Name', 'LastName', 'Email']

};


const body = document.body
const table = document.querySelector('table')

class PhoneBook {
  constructor(headerName, contacts) {
    this.headerName = headerName
    this.contacts = contacts;

  }

  new(elemName) {
    return document.createElement(elemName);
  }

  createHeader() {
    const header = this.new('header')
    const div = this.new('div')
    const h2 = this.new('h2');
    h2.textContent = 'Contacts'
    header.className = 'header'
    div.className = 'container top-radius'
    header.append(div)
    div.append(h2)
    body.append(header)
    body.insertBefore(header, document.body.querySelector('main'))
  
  }

  createTheader() {
    const thead = this.new('thead');
    const tr = this.new('tr');
    table.append(thead);
    thead.append(tr);
    this.headerName.forEach(elem => {
      const th = this.new('th');
      tr.append(th);
      th.textContent = elem;
    })
  }
  createTbody() {
    const tbody = this.new('tbody');
    this.contacts.forEach(contacts => {
      const tr = this.new('tr');
      table.append(tbody);
      tbody.append(tr);
      for (let key in contacts) {
        const td = this.new('td');
        tr.append(td);
        td.textContent = contacts[key];
      }
    });
  }
  render() {
    this.createHeader()
    this.createTheader()
    this.createTbody()
  }
}

let myBook = new PhoneBook(users.headerName, users.contacts)
myBook.render();


