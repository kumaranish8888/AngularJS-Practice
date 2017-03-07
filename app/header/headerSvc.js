(function(){
    
    angular.module("header").service("headerSvc", [headerSvc]);
    
    function headerSvc(){
        this.getItems = function(){
            return [
            {"id":"login", "value": "Login"},
            {"id":"register", "value": "Register"},
            {"id":"products", "value": "Products"}
        ];
        }
    }
    
})();