(function(){
    
    angular.module("drop").service("dropSvc", ["$http", dropSvc]);
    
    function dropSvc($http){
        this.allCountries = function(){
            return $http.get("api/countries.json");
        
        }
        
        
    }
    
})();