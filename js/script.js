function mul(x) {
  return x * x;
}
function sum(x) {
  return x + x;
}
function op(x) {
  console.log(x(5));
}

op(mul);
op(sum);
