

function newTip(realBill,realPercentage){
    const newTip1 = realBill * (realPercentage/100)
    return newTip1
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