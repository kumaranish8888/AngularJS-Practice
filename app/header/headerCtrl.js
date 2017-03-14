(function(){
    
    angular.module("header").controller("headerCtrl", [headerCtrl]);
    
    function headerCtrl(){
        
        console.log("header controller is working");
        
        var hm = this;
        
        hm.navItems = [
            {
                "name":"comments",
                "value":"Comments"
            },
            {
                "name":"register",
                "value":"Register"
            },
            {
                "name":"login",
                "value":"Login"
            }
        ];
        
    }
    
})();