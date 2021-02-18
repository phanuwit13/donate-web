export const serialize = (obj, prefix) => {
  const str = []
  let p = ''
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      let k = prefix ? prefix + '[' + p + ']' : p
      let v = obj[p]
      str.push((v !== null && typeof v === 'object') ? serialize(v, k) : encodeURIComponent(k) + '=' + encodeURIComponent(v))
    }
  }
  return str.join('&')
}
