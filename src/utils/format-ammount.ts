interface IFormatAmount {
  amount: number
  currency: string
}

export const formatAmount = ({ amount, currency }: IFormatAmount) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount)
