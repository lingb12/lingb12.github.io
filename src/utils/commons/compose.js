export default (...fns) => value => fns.reduceRight((acc, fn) => fn(acc), value)
