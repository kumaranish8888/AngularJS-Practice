(function(){
    
    angular.module("header").service("headerSvc", [headerSvc]);
    
    function headerSvc(){
        this.getItems = function(){
            return [
            {"id":"drop", "value": "Countries"},
            {"id":"comment", "value": "Comments"},
            {"id":"form", "value": "Form"}
        ];
        }
    }
    
})();