// Method to remove null or empty objects (Not yet referenced in the code)
export const objRemoveEmptyOrNull = obj => {
  if (Array.isArray(obj)) {
    return obj
      .map(v => (v && typeof v === "object" ? objRemoveEmptyOrNull(v) : v))
      .filter(v => !(v == null))
  } else {
    return Object.entries(obj)
      .map(([k, v]) => [k, v && typeof v === "object" ? objRemoveEmptyOrNull(v) : v])
      .reduce((a, [k, v]) => (v == null ? a : ((a[k] = v), a)), {})
  }
}
