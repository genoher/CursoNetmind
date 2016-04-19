LoginViewModel = function () {
    var self = this;
    self.User;
    self.Password;

    self.Login = function () {
        alert("No implementado");
    }
}

angular.module("NotesApp")
       .controller("LoginViewModel", LoginViewModel);