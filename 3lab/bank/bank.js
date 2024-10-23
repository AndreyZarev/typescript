class BankAccount {
    constructor() {
        this.id = 1;
        this.balance = 0;
        this.getInterest = (transaction, id, years) => {
            let total = 0;
            for (let index = 0; index < years; index++) {
                const element = this.balance * 0.02;
                total += element;
            }
            console.log(Math.round(total).toFixed(2));
        };
        this.deposit = (transaction, id, amount) => {
            console.log(`Deposited ${amount} to ID${id}`);
            this.balance += amount;
        };
        this.create = () => {
            console.log(`Account ID${this.id} created`);
            this.id += 1;
        };
    }
}
const newUser = new BankAccount();
newUser.create();
newUser.deposit("Deposit", 1, 20);
newUser.getInterest("GetInterest", 1, 10);
// commands
// Create
// Deposit 1 20
// GetInterest 1 10
// End
// Output
// Account ID1 created
// Deposited 20 to ID1
// 4.00
