// Banking

// name, accountNumber
// deposit money, withdraw money

import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { SpecialAccount } from './class/SpecialAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(234, 'Carlos', 3478)
console.log(peopleAccount)
peopleAccount.deposit(100)
console.log(peopleAccount.getID())
console.log(peopleAccount.getName())
console.log(peopleAccount.getBalance())
peopleAccount.withdraw(80)
console.log(peopleAccount.getBalance())
const companyAccount: CompanyAccount = new CompanyAccount('BMW', 20)
console.log(companyAccount)
companyAccount.getLoan(200)
console.log(companyAccount.getBalance())
const specialAccount: SpecialAccount = new SpecialAccount('John Bradford', 21)
console.log(specialAccount)
specialAccount.deposit10(100)
console.log(specialAccount.getBalance())
