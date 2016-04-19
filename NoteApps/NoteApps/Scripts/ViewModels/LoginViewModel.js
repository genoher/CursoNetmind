LoginViewModel = function () {
    var self = this;
    self.User="User";
    self.Password;

    self.CommuteLogin = function () {
        alert("No implementado");
    }
}

angular.module("NotesApp")
       .controller("LoginViewModel", LoginViewModel);