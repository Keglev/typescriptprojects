import { DioAccount } from "./DioAccount"


export class CompanyAccount extends DioAccount{ 
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (value: number): void => {
        console.log('You got a loan')
    }

    deposit = (value: number):void => {
        console.log('new company deposit')
    }
}