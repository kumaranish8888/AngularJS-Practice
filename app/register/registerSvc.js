(function(){
    
    angular.module("register").service("registerSvc", ["$http", registerSvc]);
    
    function registerSvc($http){
        
        this.countries = function(){
            
            return $http.get("api/countries.json");
        }
        
    }
    
})();