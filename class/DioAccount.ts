export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            this.balance += value
            console.log('You deposit of ${value} was a success! The new account balance is ${this.balance}')
         }
       
    }

    withdraw = (value: number): void => {
        if(this.validateStatus() && value <= this.balance){
            this.balance -= value
            console.log(`Withdraw value of ${value}! Updated account balance of ${this.balance}`)
          } else {
            console.log('not enough funds. You cannot withdraw this value')
          }
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    validateStatus = (): boolean => {
        if(this.status) {
            return this.status
        }

        throw new Error('Invalid Account')
    }
} 