const persons = [];
const addPerson = document.getElementById('addPerson')
addPerson.onclick = e => {
    if(persons.findIndex (p => p.id === document.getElementById('personId').value) == -1)
    {
        const id = document.getElementById('personId').value
        const firstname = document.getElementById('firstName').value
        const lastname = document.getElementById('lastName').value
        const age = document.getElementById('age').value

        persons.push(new Person (id, firstname, lastname, age ))
        list = document.getElementById('personsList')
        const li = document.createElement('li')
        text = document.createTextNode(`ID: ${id}, First name: ${firstname}, Last name: ${lastname}, age:${age}`)
        li.appendChild(text)
        list.appendChild(li)
    }
    else
    {
        alert('This person has already been added.')
    }
}
//===================================================================================================//
const addStatButton = document.getElementById('calcStats');
addStatButton.onclick = e => {
//===================================================================================================//
    const addStat = document.getElementById('stats')
    newDiv = addStat.appendChild(document.createElement('div'))
    average = document.createTextNode ('Average age: '+ persons.reduce((accum, p) => accum + p.age, 0) / persons.length)
    max = document.createTextNode(', Max age: ' + persons.reduce((acum, p) => acum > p.age ? acum : p.age, persons[0].age))
    min = document.createTextNode(', Min age: ' + persons.reduce((acum, p) => acum < p.age ? acum : p.age, persons[0].age))
    newDiv.append(average, max, min)
//==================================================================================================//
}




function Person(id, firstName, lastName, age){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
}