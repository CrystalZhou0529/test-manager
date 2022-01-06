// Return FALSE if step has any null field
export function isIncompleteStep(step) {
  return step.element === "" || step.operation === "" || step.page === "";
}

// Edit distance between two strings
// a: Obj[], b: Obj[]
// Time: O(m), Space: O(mn)
export function editDist(a, b) {
  const alen = a.length;
  const blen = b.length;

  let dp = new Array(2).fill(0).map(() => new Array(alen + 1).fill(0));
  for (let i = 0; i <= alen; ++i) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= blen; ++i) {
    for (let j = 0; j <= alen; ++j) {
      if (j === 0) {
        dp[i % 2][j] = i;
      } else if (isSameStep(a[j - 1], b[i - 1])) {
        dp[i % 2][j] = dp[(i - 1) % 2][j - 1];
      } else {
        dp[i % 2][j] =
          1 +
          Math.min(
            dp[(i - 1) % 2][j],
            dp[i % 2][j - 1],
            dp[(i - 1) % 2][j - 1]
          );
      }
    }
  }
  return dp[blen % 2][alen];
}

// Return TRUE if step a and step b test same transition
// Might be different operation
function isSameStep(a, b) {
  return (
    a.page === b.page &&
    a.element === b.element &&
    a.transition === b.transition
  );
}
