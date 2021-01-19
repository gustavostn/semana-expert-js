// const EntityBase = require('./entityBase')

// console.log(new EntityBase({
//     name: "Gustavo Santana",
//     gender: "male"
// }).name);

// console.log(new EntityBase({
//     name: "Maria Eduarda",
//     gender: "female"
// }).name);

const assert = require('assert')
const Employee = require('./employee')
const Util = require('./util')
const Manager = require('./manager')

const GENDER = {
    male: "male",
    female: "female"
}

{
    const employee = new Employee({
        name: "Gustavo Santana",
        gender: GENDER.male
    })

    assert.throws(() => employee.birthYear, {message: "You must define age first"})

}
    const CURRENT_YEAR = 2021 
    Date.prototype.getFullYear = () => CURRENT_YEAR

{
    const employee = new Employee({
        name: "Maria Eduarda",
        age: 20,
        gender: GENDER.female
    })

    assert.deepStrictEqual(employee.name, "Ms. Maria Eduarda")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(1500))
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(1200))

    let expectedBirthYear = 2001
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

    employee.age = 80
    assert.deepStrictEqual(employee.birthYear, 1941)

    console.log('\n---EMPLOYEE---');
    console.log(employee.name)
    console.log(employee.age)
    console.log(employee.gender)
    console.log(employee.grossPay)
    console.log(employee.netPay)
    console.log(employee.bonuses)
}


{
    const manager = new Manager({
        name: 'Alicia',
        age: 25,
        gender: GENDER.female
    })

    assert.deepStrictEqual(manager.name, "Ms. Alicia")
    assert.deepStrictEqual(manager.age, undefined)
    assert.deepStrictEqual(manager.gender, undefined)
    assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(1500))
    assert.deepStrictEqual(manager.netPay, Util.formatCurrency(3200))
    assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000))

    console.log('\n---MANAGER---');
    console.log(manager.name)
    console.log(manager.age)
    console.log(manager.gender)
    console.log(manager.grossPay)
    console.log(manager.netPay)
    console.log(manager.bonuses)
    
    
}
