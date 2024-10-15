
class BankAccount {
    private id: number = 1
    private balance: number = 0
    private interestRate: 0.02


    public setInterestRate
    public getInterest = (transaction: string, id: number, years: number) => {
        let total = 0
        for (let index = 0; index < years; index++) {
            const element = this.balance * 0.02
            total += element
        }
        console.log(Math.round(total).toFixed(2));

    }
    public deposit = (transaction: string, id: number, amount: number) => {
        console.log(`Deposited ${amount} to ID${id}`);
        this.balance += amount;

    }

    public create = () => {
        console.log(`Account ID${this.id} created`);
        this.id += 1
    }


}

const newUser = new BankAccount()
newUser.create()
newUser.deposit("Deposit", 1, 20)
newUser.getInterest("GetInterest", 1, 10)

// commands
// Create
// Deposit 1 20
// GetInterest 1 10
// End

// Output
// Account ID1 created
// Deposited 20 to ID1
// 4.00