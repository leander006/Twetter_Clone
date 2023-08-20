import JWT from "passport-jwt";
import User from "../model/user.js";
import { SECRET } from "./server-config.js";

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET,
};

export const passportAuth = async (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const user = await User.findById(jwt_payload.id);
      if (!user) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    })
  );
};
