export const phoneMask = (value: string) => {
    return value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d)(\d{4})$/, "$1-$2")
        .slice(0, 15)
}

export const parseBudget = (budget: string) => {
    let num = budget.replace(/[R$\s]/g, "")

    num = num.replace(/\./g, "").replace(/,/g, ".")
    return Number(num)
}
