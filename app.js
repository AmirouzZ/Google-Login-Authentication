const express = require("express");
const passport = require("passport");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

require("./passport-setup");

// Initialize app
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const session = require("express-session");
const sendEmail = require("./sendEmail");

app.use(
  session({
    // genid: function (req) {
    //   return genuuid();
    // },
    resave: false,
    saveUninitialized: true,
    secret: "aaaaaaaaaaaa",
    // cookie: { secure: true },
  })
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.set("views", "views");
app.set("view engine", "ejs");

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.status(401).json({ message: "Not Authenticated" });
};

app.get("/", (req, res) => {
  res.send(
    '<a href="/google"> sing up with google </a> <br> <br> <br> <a href="/sendtoemail"> Send To emails </a> '
  );
});

app.get("/sendtoemail", (req, res) => {
  res.render("sendToEmails.ejs");
});
app.post("/sendtoemail", async (req, res) => {
  console.log("body:", req.body);
  const html = `
  <h1>Hello World</h1>
  <img src="cid:aaaaaaaaaa">
  `;
  const attachments = [
    {
      filename: "1w.jpg",
      path: path.join(__dirname + "/1w.jpg"),
      cid: "aaaaaaaaaa",
    },
    {
      filename: "2c.jpg",
      path: path.join(__dirname + "/2c.jpg"),
    },
  ];
  let emails = [req.body.email1, req.body.email2];
  await sendEmail(emails, "Testing", html, attachments);

  res.json({
    message: `emails sent to: ${emails}`,
  });
});

app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failed",
    successRedirect: "/good",
  })
  //   async (req, res) => {
  //     res.redirect("/good");
  //   }
);

app.get("/good", isLoggedIn, async (req, res) => {
  const { name, picture, email } = req.user._json;
  res.json({
    user: {
      name,
      picture,
      email,
    },
  });
});

app.get("/failed", async (req, res) => {
  res.send("Failed");
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    req.session = null;
    // req.session.destroy()
    if (err) {
      console.log(err);
      //   return res.redirect("/");
    }
    res.redirect("/");
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
