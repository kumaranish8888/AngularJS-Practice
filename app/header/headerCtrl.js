(function(){
    
    angular.module("header").controller("headerCtrl", ["headerSvc", headerCtrl]);
    
    function headerCtrl(headerSvc){
        console.log("Header controller working");
        
        var hm = this;
        
        hm.navItems = headerSvc.getItems();
        
      /*   hm.navItems = [
            {"id":"login", "value": "Login"},
            {"id":"register", "value": "Register"},
            {"id":"products", "value": "Products"}
        ]; */
    }
    
})();