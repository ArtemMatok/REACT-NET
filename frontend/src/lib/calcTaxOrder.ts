export const calcTaxOrder = (totalAmount:number) => {
    return Number((totalAmount*0.05).toFixed());
}