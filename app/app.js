(function(){
    
    angular.module("project", ["header", "drop", "comment", "form", "ui.router"]);
    
    angular.module("project").config(["$stateProvider",function($stateProvider){
        
        var am = this;
        
        var dropObj = {
            templateUrl:"app/drop/drop.tpl.html"
        };
        var commentObj = {
            templateUrl: "app/comment/comment.tpl.html"
        };
        var formObj = {
            templateUrl: "app/form/form.tpl.html"
        };
        
        $stateProvider.state("drop", dropObj);
        $stateProvider.state("comment", commentObj);
        $stateProvider.state("form", formObj);
        
        
    }]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    function mainCtrl(){
        var vm = this;
        vm.headerTemplate = "app/header/header.tpl.html";
        vm.dropTemplate = "app/drop/drop.tpl.html";
        vm.commentTemplate = "app/comment/comment.tpl.html";
        vm.formTemplate = "app/form/form.tpl.html";
    }
    
})();