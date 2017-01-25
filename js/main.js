


const users = {
  contacts: [
    { name: 'Иван', lastName: 'Иванов', email: 'ivanov@mail.ru' },
    { name: 'Сергей', lastName: 'Сергеев', email: 'serg@mail.ru' },
    { name: 'Александр', lastName: 'Александров', email: 'alex@mail.ru' },
    { name: 'Мария', lastName: 'Иванова', email: 'mary@mail.ru' },
    { name: 'Лена', lastName: 'Иванова', email: 'len@mail.ru' }
  ],
  headerName: ['name', 'lastName', 'email'],

  render() {
    const body = document.body;
    const header = this.new('header')
    const h2 = this.new('h2')
    const main = this.new('main');
    const div = this.new('div');
    const table = this.new('table');
    const thead = this.new('thead');
    const tr = this.new('tr');
    const th = this.new('th');



    this.headerName.forEach(elem => {
      const th = this.new('th');
      tr.append(th);
      th.textContent = elem;
    })
    table.append(thead);

    this.contacts.forEach(contacts => {
      const tbody = this.new('tbody');
      const tr = this.new('tr');
      table.append(tbody);
      tbody.append(tr);
      for (let key in contacts) {
        const th = this.new('th');
        tr.append(th);
        th.textContent = contacts[key];
      }

    })


    body.append(header, main)
    header.append(h2)
    h2.textContent = 'Contacts'
    main.append(div);
    div.append(table);
    thead.append(tr);
    h2.setAttribute('align', 'center')
    div.setAttribute('align', 'center')

  },

  new(elemName) {
    return document.createElement(elemName);
  },
}


users.render();
