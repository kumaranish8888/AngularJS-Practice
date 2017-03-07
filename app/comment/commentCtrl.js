(function(){
    
    angular.module("comment").controller("commentCtrl", ["commentSvc", commentCtrl]);
    
    function commentCtrl(commentSvc){
        
        var cm = this;
        
        commentSvc.getComments().then(function(response){
           cm.myComments = response.data.comments; 
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
    }
    
})();