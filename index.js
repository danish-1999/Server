const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");

// const authRoutes = require('./routes/authRoutes')

mongoose.connect(keys.mongooseURI);

const app = express();

app.use(
 cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
 })
);
app.use(passport.initialize());
app.use(passport.session());

// authRoutes(app)
require("./routes/authRoutes")(app); // Calling authRoutes function in one line.

const PORT = process.env.PORT || 5000;
app.listen(PORT);
