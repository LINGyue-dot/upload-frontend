export function TypeOf(obj) {
  return typeof obj !== 'object' ?
    typeof obj :
    Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}


export function preverntAndStop(e: Event) {
  e.preventDefault()
  e.stopPropagation()
}

export function testImg(str:string) {
  const IMAGE_MIME_REGEX = /^image\/(jpe?g|gif|png)$/i;
  
  return IMAGE_MIME_REGEX.test(str)
}
