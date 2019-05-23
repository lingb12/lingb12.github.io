export default (field, event) => ['qty', 'tCout', 'uPrice', 'price'].some(item => item === field)
  ? event.target.valueAsNumber
  : event.target.value
  