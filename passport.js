import passport from "passport";
import User from "./models/User";

passport.use(User.creatStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
