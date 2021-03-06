
//Avoid infinite numbers --> add something to round up to 2 or 3 decimals*****************************
function newTip(realBill,realPercentage){
    const newTip1 = realBill * (realPercentage/100)
    return Math.round(newTip1 * 100) / 100
}

function newTotal(realBill,realPercentage){
    const newTotal1 = (+realBill + + newTip(realBill,realPercentage))
    return newTotal1
}

function update(realBill,realPercentage,model){
    const {tip} = model
    const {total} = model
    return {
        ...model,
        bill : realBill,
        percentage: realPercentage,
        tip : newTip(realBill,realPercentage),
        total : newTotal(realBill,realPercentage)
    }

}

module.exports = {
    update,

}