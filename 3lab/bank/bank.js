var BankAccount = /** @class */ (function () {
    function BankAccount() {
        var _this = this;
        this.id = 1;
        this.balance = 0;
        this.getInterest = function (transaction, id, years) {
            var total = 0;
            for (var index = 0; index < years; index++) {
                var element = _this.balance * 0.02;
                total += element;
            }
            console.log(Math.round(total).toFixed(2));
        };
        this.deposit = function (transaction, id, amount) {
            console.log("Deposited ".concat(amount, " to ID").concat(id));
            _this.balance += amount;
        };
        this.create = function () {
            console.log("Account ID".concat(_this.id, " created"));
            _this.id += 1;
        };
    }
    return BankAccount;
}());
var newUser = new BankAccount();
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
