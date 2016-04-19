LoginViewModel = function () {
    var self = this;
    self.User = "";
    self.Password = "";
    self.IsLoginVisible = true;

    var ocultar = "Ocultar Login";
    var mostrar = "Mostrar Login";
    self.ConmuteLoginText = ocultar;

    self.Login = function () {
        alert("Login - No implementado");
    }

    self.ConmuteLogin = function () {
        self.IsLoginVisible = !self.IsLoginVisible;
        if (self.IsLoginVisible) {
            self.ConmuteLoginText = ocultar;
        } else {
            self.ConmuteLoginText = mostrar;
        }
    }
}

angular.module("NotesApp")
       .controller("LoginViewModel", LoginViewModel);