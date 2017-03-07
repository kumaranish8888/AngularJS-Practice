(function(){
    
    angular.module("project", ["header", "drop", "comment", "form"]);
    
    angular.module("project").config([function(){
        
        
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