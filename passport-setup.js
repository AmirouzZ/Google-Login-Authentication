const passport = require("passport");

console.log(`  clientID: ${process.env.clientID},
      clientSecret: ${process.env.clientSecret},
      callbackURL: ${process.env.callbackURL},
      passReqToCallback: ${true},`);
const GoogleStrategy = require("passport-google-oauth2");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: process.env.callbackURL,
      passReqToCallback: true,
    },
    (request, accessToken, refreshToken, profile, done) => {
      console.log("profile:", profile);
      return done(null, profile);
    }
  )
);
