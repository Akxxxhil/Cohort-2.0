const express = require("express");
const app = express();

const users = [
  {
    userName: "akxxhil",
    kideny: [
      {
        healthy: false,
      },
    ],
    healthy: true,
  },
];

app.use(express.json());

//for the query para meter what w used ==>> req.quer.n
app.get("/", function (req, res) {
  const akhilKidney = users[0].kideny;
  console.log(akhilKidney);
  let numberofKideny = akhilKidney.length;
  let healthyKidney = 0;
  for (let i = 0; i < numberofKideny; i++) {
    if (akhilKidney[i].healthy) {
      healthyKidney = healthyKidney + 1;
    }
  }
  console.log(healthyKidney);
  const unHealthyKideny = numberofKideny - healthyKidney;
  console.log(unHealthyKideny);

  res.json({
    akhilKidney,
    numberofKideny,
    healthyKidney,
    unHealthyKideny,
  });
});

app.post("/", function (req, res) {
  const ishealthy = req.body.ishealthy;
  // console.log(ishealthy);  undefined
  users[0].kideny.push({
    healthy: ishealthy,
  });
  res.json({
    msg: "kidney added",
  });
});

app.listen(3005);
