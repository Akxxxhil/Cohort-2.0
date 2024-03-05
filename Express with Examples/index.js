// Creating the simple  http server

const express = require("express");

function sum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

const app = express();

app.get("/", function (req, res) {
  const variable = req.query.n;
  const ans = sum(variable);
//http://localhost:3000/?n=100 (example)
  res.send("hi my brother ...and your answer is " + ans);
});

app.listen(3000);
