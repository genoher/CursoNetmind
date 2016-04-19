MainViewModel = function () {
    var self = this;
    self.Title = "Qué pasa tronco!!";

    self.ChangeTitle = function() {
        self.Title = "hola caracola";
    }
}

angular.module("NotesApp")
       .controller("MainViewModel", MainViewModel);