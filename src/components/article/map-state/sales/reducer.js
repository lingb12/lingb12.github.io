export const initial = [
  ['Chiffre d\'affaire', 0], ['Quantité vendue', 0],
  ['Prix moyen', 0], ['Nombre de ventes', 0], ['Resultat', 0]
]

export default (arr = []) => arr.reduce(([[,rev], [,q], [,p], [,n], [,r]], {tCout, tPrice, qty}) => [
  ['Chiffre d\'affaire', rev + tPrice],
  ['Quantité vendue', q + qty],
  ['Prix moyen', p > 0 ? (p + tPrice / qty) / 2 : tPrice / qty],
  ['Nombre de ventes', n + 1],
  ['Resultat', tCout > 0 ? (r + (tPrice - tCout)) : r],
], initial)
