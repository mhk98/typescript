// class BankAccount {
// public readonly id: number;
// public name: string;
// private  _balance: number;

//     constructor(id: number, name: string, balance: number){
//         this.id = id;
//         this.name =  name;
//         this._balance = balance
//     }

//     //getter
//     get balance () : number {
//         return this._balance
//     }

//     // getBalance():number {
//     // return this.balance;
//     // }

//     //setter
//     set deposit (amount: number) {
//         this._balance = this.balance + amount;
//     }
//     // addDeposit(amount: number) {
//     //     this.balance- this.balance + amount;
//     // }

// }


// //when use private you cannot got the property like balance. If  use protect we can got balance property
// // class StudentAccount extends BankAccount {
// //     test() {
// //         this.getBalance
// //     }
// // }


// const myAccount = new BankAccount(444, "Persian", 20)

// // myAccount.addDeposit(20)
// // myAccount.getBalance()
// // myAccount.getBalance()

// // console.log(myAccount.getBalance())

// myAccount.deposit = 40
// console.log(myAccount.balance)


