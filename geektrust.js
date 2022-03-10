const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
// app.use(express.urlencoded());

let g = 0;

app.get("/guest", (req, res) => {
  g = g + req.body.sum;
  return res.json(g);
});

app.get("/", (req, res) => {
  let b1 = +req.body.b;
  let c1 = +req.body.c;
  let a1;
  if (req.body.a == 2) {
    a1 = 900;
  } else if (req.body.a == 3) {
    a1 = 1500;
  }
  let cost = a1 / (b1 + c1);
  let waterg = g*10*30;
  let guestcost = 0;

  if (waterg >0) {
    guestcost = waterg * 2;
  } if (waterg > 500) {
    guestcost = 500*2 + (waterg - 500) * 3;
  } if (waterg > 1500) {
    guestcost = 500 * 2 + 1000 * 3 + (waterg - 1500) * 5;
  } if (waterg > 3000) {
    guestcost = 500 * 2 + 1000 * 3 + 1500 * 5 + (waterg - 3000) * 8;
  }
  let totalcost = Math.floor(cost * b1 * 1 + cost * c1 * 1.5) + guestcost;
console.log(guestcost)
let totalwater=cost * b1+cost*c1+waterg
  return res.json({ totalwater,totalcost, g, guestcost });
});



app.listen(4000, () => {
  console.log("listning on port 4000");
});
