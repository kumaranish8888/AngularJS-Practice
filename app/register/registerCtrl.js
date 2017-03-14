(function(){
    
    angular.module("register").controller("registerCtrl", ["registerSvc", registerCtrl]);
    
    function registerCtrl(registerSvc){
        
        var rm = this;
        
        registerSvc.countries().then(function(response){
            rm.myCountries = response.data.countries;
            
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
    }
    
})();