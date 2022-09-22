function show(next) {
  console.log(this);
  next();
}

module.exports = show;
