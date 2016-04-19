MainViewModel = function () {
    var self = this;
    self.Title = "Qué pasa tronco!!";

    self.IsLogon = false;

    self.ChangeTitle = function() {
        self.Title = "hola caracola";
    }

    self.RaiseAlert = function () {
        alert(self.Title);
    }

}

angular.module("NotesApp")
       .controller("MainViewModel", MainViewModel);