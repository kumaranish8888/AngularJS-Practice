(function(){
    
  angular.module("myproject", ["header", "register", "comments", "ui.router"]);
    
    angular.module("myproject").config(["$stateProvider", function($stateProvider){
        
        console.log("config: myproject");
        
        var loginObj = {
           // templateUrl: ""
        };
        
        var registerObj = {
            templateUrl: "app/register/register.tpl.html",
            controller: "registerCtrl as rc"
        };
        
        var commentsObj = {
            templateUrl: "app/comments/comments.tpl.html",
            controller: "commentsCtrl as cc"
        };
        
        
        $stateProvider.state("login", loginObj);
        $stateProvider.state("register", registerObj);
        $stateProvider.state("comments", commentsObj);
        
    }]);
    
    angular.module("myproject").controller("myCtrl", [myCtrl]);
    
    function myCtrl(){
        
        console.log("Inside main Controller");
        var mn = this;
        mn.headerTemplate = "app/header/header.tpl.html";
        mn.registerTemplate = "app/register/register.tpl.html";
        mn.commentsTemplate = "app/comments/comments.tpl.html";
        
    }
    
})();