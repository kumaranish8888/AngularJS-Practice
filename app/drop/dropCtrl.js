(function(){
    
    angular.module("drop").controller("dropCtrl", ["dropSvc", dropCtrl]);
    
    function dropCtrl(dropSvc){
        
        var dm = this;
        dropSvc.allCountries().then(function(response){
            dm.countries = response.data.countries; 
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
    }
    
})();