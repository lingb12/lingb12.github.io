const data = (art, unitPrice, totalPrice, qty) => ({ art, qty, unitPrice, totalPrice })

export default [
  data('piodi', 2400, 2400 * 3, 3),
  data('makoso', 1200, 4 * 1200, 4),
  data('mbanga', 2000, 4000, 2),
  data('tomate', 400, 5 * 400, 5),
]