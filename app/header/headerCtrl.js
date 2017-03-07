(function(){
    
    angular.module("header").controller("headerCtrl", ["$state", headerCtrl]);
    
    function headerCtrl($state){
        console.log("Header controller working");
        
        var hm = this;
        
        hm.navItems = [
            {"id":"drop", "value": "Countries"},
            {"id":"comment", "value": "Comments"},
            {"id":"form", "value": "Form"}
        ];
        
        hm.changeState = function(data){ //When we are not using ui-sref
            $state.go(data);
        }
        
    }
    
})();