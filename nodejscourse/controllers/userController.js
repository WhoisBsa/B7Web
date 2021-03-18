const User = require("../models/User");

exports.login = (req, res) => {
  res.render("login");
};

exports.loginAction = (req, res) => {
  const auth = User.authenticate();

  auth(req.body.email, req.body.password, (error, result) => {
    if (!result) {
      req.flash("error", "E-mail e/ou senha incorreto(s)!");
      res.redirect("/users/login");
      return;
    }

    //Logar de verdade
    req.login(result, () => {});

    req.flash("success", "Você foi logado com sucesso!");
    res.redirect("/");
  });
};

exports.register = (req, res) => {
  res.render("register");
};

exports.registerAction = (req, res) => {
  User.register(new User(req.body), req.body.password, (error) => {
    if (error) {
      req.flash("error", "Ocorreu um erro, tente mais tarde.");
      res.redirect("/users/register");
      return;
    }

    req.flash("success", "Registro efetuado com sucesso. Faça o login.");
    res.redirect("/users/login");
  });
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
}
