MainViewModel = function () {

    var self = this;

    // Relacionar
    GlobalsInstance.MainVM = self;

    self.Title = "Qué pasa tronco!!";

    self.IsLogon = false;

    self.ChangeTitle = function() {
        self.Title = "hola caracola";
    }

    self.RaiseAlert = function () {
        alert(self.Title);
    }

    self.Logout = function () {
        self.IsLogon = false;
    }

}

//GlobalsInstance.MainVM = new MainViewModel();

angular.module("NotesApp")
       .controller("MainViewModel", MainViewModel);

