﻿LoginViewModel3 = function () {

    var self = this;

    self.UserLogin = "UserLogin";
    self.Password = "Password";
    self.IsLoginVisible = true;

    var ocultar = "Ocultar Login";
    var mostrar = "Mostrar Login";
    self.ConmuteLoginText = ocultar;

    self.Login = function () {
        //alert("Login - Usuario: " + self.UserLogin + " Password: " + self.Password);

        //Window.MainViewModel.IsLogon = true;
        
        GlobalsInstance.MainVM.IsLogon = true;
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
       .controller("LoginViewModel3", LoginViewModel3);