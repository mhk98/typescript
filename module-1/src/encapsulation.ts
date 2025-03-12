class BankAccount {
    public readonly id: number;
    public name: string;
    private  _balance: number;
    
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name =  name;
            this._balance = balance
        }
    
        private getTestBalance(): number{
            return this._balance;
        }
    
        get Test(): number{
            return this.getTestBalance()
        }
    
    

      
    
    }
    
    
    //when use private you cannot got the property like balance. If  use protect we can got balance property
    class StudentAccount extends BankAccount {
        test() {
            this.Test
        }
    }
    
    
    const myAccount = new BankAccount(444, "Persian", 20)
    
   
    
    
    
    