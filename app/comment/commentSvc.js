(function(){
    
    angular.module("comment").service("commentSvc", ["$http", commentSvc]);
    
    function commentSvc($http){
        
        this.getComments = function(){
            
            return $http.get("api/comments.json");
            
        }
    }
    
})();