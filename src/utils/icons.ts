import accountIcon from 'assets/images/icons/account.svg'
import cardIcon from 'assets/images/icons/card.svg'
import loanIcon from 'assets/images/icons/loan.svg'
import shoppingCartIcon from 'assets/images/icons/shopping-cart.svg'

export const icons = {
  'account.svg': accountIcon,
  'card.svg': cardIcon,
  'loan.svg': loanIcon
}

export { accountIcon, cardIcon, loanIcon, shoppingCartIcon }

export const getIconByName = (name: string): string => {
  return icons[name as keyof typeof icons] || accountIcon
}
