let n = 5; // height of pyramid

for (let i = 1; i <= n; i++) {
  // spaces before stars
  let spaces = " ".repeat(n - i);

  // stars
  let stars = "*".repeat(2 * i - 1);

  console.log(spaces + stars);
}
