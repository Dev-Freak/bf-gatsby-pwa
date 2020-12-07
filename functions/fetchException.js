module.exports = function FetchException(origin, error) {
  this.name = "Fetch Exception"
  this.origin = origin
  this.error = error
}
