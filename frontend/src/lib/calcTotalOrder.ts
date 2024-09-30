

export const calcTotalAmountOrder= (totalAmount:number):number => {

    return (totalAmount+ Number((totalAmount * 0.05).toFixed()));

}