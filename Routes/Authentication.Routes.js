// IMPORT REQUIRED PACKAGES
const { Express } = require("../Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const {
  Register,
  Login,
  Logout,
  ForgotPassword,
  ResetPassword,
  VerifyAccount,
  GetMyInformation,
} = require("../Controllers/Authentication.Controllers");

// EXPRESS CONFIGS
const Router = Express.Router();

// ROUTES
Router.route("/register").post(Register);
Router.route("/login").post(Login);
Router.route("/logout").get(Logout);
Router.route("/forgot/password").post(ForgotPassword);
Router.route("/me").get(GetMyInformation);
Router.route("/reset/password/:token").patch(ResetPassword);
Router.route("/verify/account/:token").get(VerifyAccount);

// EXPORT
module.exports = Router;