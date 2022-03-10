const express = require("express");

const app = express();
app.use(express.json());
// app.use(express.urlencoded());

let ADD_GUESTS = 0;

app.get("/guest", (req, res) => {
    ADD_GUESTS  = ADD_GUESTS  + req.body.guests;
  return res.json(ADD_GUESTS);
});

app.get("/", (req, res) => {
  let ratio1 = +req.body.b;
  let ratio2 = +req.body.c;
  let a1;
  if (req.body.a == 2) {
    a1 = 900;
  } else if (req.body.a == 3) {
    a1 = 1500;
  }
  let cost = a1 / (ratio1 + ratio2);
  let waterg = ADD_GUESTS * 10 * 30;
  let guestcost = 0;

  if (waterg > 0) {
    guestcost = waterg * 2;
  }
  if (waterg > 500) {
    guestcost = 500 * 2 + (waterg - 500) * 3;
  }
  if (waterg > 1500) {
    guestcost = 500 * 2 + 1000 * 3 + (waterg - 1500) * 5;
  }
  if (waterg > 3000) {
    guestcost = 500 * 2 + 1000 * 3 + 1500 * 5 + (waterg - 3000) * 8;
  }
  let totalcost = Math.floor(cost * ratio1 * 1 + cost * ratio2 * 1.5) + guestcost;
  console.log(guestcost);
  let totalwater = cost * ratio1 + cost * ratio2 + waterg;
  return res.json({ totalwater, totalcost, ADD_GUESTS, guestcost });
});

app.listen(4000, () => {
  console.log("listning on port 4000");
});
