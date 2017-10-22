function Account(balance, type){
    this.balance = balance;
    this.debits = 0;
    this.credits = 0;
    this.type = type;


    let self = this;
    this.deposit = function deposit(amount){
        self.balance += amount;
        self.credits += amount;
        console.log("Deposited:",amount,"to",self.type,"account balance is now:",self.balance)
    }
    this.widthdraw = function widthdraw(amount){
        self.balance -= amount;
        self.debits -= amount;
        console.log("Widthdraw:",amount,"from",self.type,"acount balance is now:", self.balance)
    }
    this.statement = function statement(){
        console.log(self.type,"account balance is:",self.balance,"with",self.debits,"in debits and",self.credits,"in credits");
    }
}

const testAccount = new Account(5000);
//console.log(testAccount);
// testAccount.deposit(1500);
// testAccount.widthdraw(300);
// testAccount.statement();


function Customer(initChecking, initSavings){
    this.checking =  new Account(initChecking, "Checking");
    this.savings = new Account(initSavings,"Savings");

    let self = this;
    this.accountOverview = function accountOverview(){
        self.checking.statement();
        self.savings.statement();
    }
}

const testCustomer = new Customer(5000,2500);
//console.log(testCustomer);


testCustomer.checking.deposit(1000);
testCustomer.checking.widthdraw(300);
testCustomer.savings.deposit(2000);
testCustomer.accountOverview();