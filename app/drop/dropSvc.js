(function(){
    
    angular.module("drop").service("dropSvc", [dropSvc]);
    
    function dropSvc(){
        this.allCountries = function(){
            
            return [
                {"name":"India", "code":"IN"},
                {"name":"United States", "code":"USA"},
                {"name":"Afganistan", "code":"AFG"}
            ]; 
        }
        
        
    }
    
})();