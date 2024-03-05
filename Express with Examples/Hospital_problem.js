const express = require("express");
const app = express();

let users = [
  {
    name: "Akhil",
    kidenys: [
      {
        healthy: false,
      },
    ],
    healthy: true,
  },
];

app.get("/", function (req, res) {
  const akhilkideny = users[0].kidenys;
  console.log("Akhil kideny is ", akhilkideny);
  const numberakhilkideny = akhilkideny.length;
  console.log("the number of kidney in akhil is ", numberakhilkideny);
  let numberofhealthyKidneys = 0;
  for (let i = 0; i < numberakhilkideny; i++) {
    if (akhilkideny[i].healthy) {
      numberofhealthyKidneys = numberofhealthyKidneys + 1;
    }
  }
  const numberofunhealthykidneys = numberakhilkideny - numberofhealthyKidneys;
  console.log("the  unahelthy kideny count is " + numberofunhealthykidneys);

  res.json({
    akhilkideny,
    numberakhilkideny,
    numberofhealthyKidneys,
    numberofunhealthykidneys,
  });
});

app.listen(3003);
