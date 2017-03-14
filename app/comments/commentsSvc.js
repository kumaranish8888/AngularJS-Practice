(function(){
    
    angular.module("comments").service("commentsSvc", ["$http", commentsSvc]);
    
    function commentsSvc($http){
        
        this.getComments = function(){
            
            return $http.get("api/comments.json");
        }
        
    }
    
    
})();