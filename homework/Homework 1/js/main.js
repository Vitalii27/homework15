



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
  headerName: ['Name', 'LastName', 'Email'],

  render() {
    const table = document.querySelector('table')
    const header = this.new('header')
    const h2 = this.new('h2')
    const thead = this.new('thead');
    const tr = this.new('tr');
    const th = this.new('th');
    const tbody = this.new('tbody');


    this.headerName.forEach(elem => {
      const th = this.new('th');
      tr.append(th);
      th.textContent = elem;
    })


    this.contacts.forEach(contacts => {
      const tr = this.new('tr');
      table.append(tbody);
      tbody.append(tr);
      for (let key in contacts) {
        const th = this.new('th');
        tr.append(th);
        th.textContent = contacts[key];
      }

    })

    table.append(thead);

    header.append(h2)
    h2.textContent = 'Contacts'
    thead.append(tr);
    h2.setAttribute('align', 'center')
    div.setAttribute('align', 'center')

  },

  

  new(elemName) {
    return document.createElement(elemName);
  },
}


users.render();