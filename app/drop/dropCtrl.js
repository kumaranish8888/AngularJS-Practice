(function(){
    
    angular.module("drop").controller("dropCtrl", ["dropSvc", dropCtrl]);
    
    function dropCtrl(dropSvc){
        
        var dm = this;
        this.countries = dropSvc.allCountries();
        
    }
    
})();