const Employee = require("./employee");
const Util = require("./util");

class Manager extends Employee{
    #bonuse = 2000

    get bonuses (){
        return Util.formatCurrency(this.#bonuse)
    }

    get netPay() {
        const finalValue = Util.unFormatCurrency(super.netPay) + Util.unFormatCurrency(this.bonuses)   //netPay + bonuses 
        return Util.formatCurrency(finalValue)
    }


}

module.exports = Manager
