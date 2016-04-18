MainViewModel = function () {
    var self = this;
    self.Title = "Qué pasa tronco!!";
}

angular.module("NotesApp")
       .controller("MainViewModel", MainViewModel);