export function TypeOf(obj) {
  return typeof obj !== 'object' ?
    typeof obj :
    Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
