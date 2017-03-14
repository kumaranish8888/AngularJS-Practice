(function(){
    
    angular.module("comments").controller("commentsCtrl", ["commentsSvc", commentsCtrl]);
    
    function commentsCtrl(commentsSvc){
        var cm = this;
        
        commentsSvc.getComments().then(function(response){
            cm.myComments = response.data.comments;
            
        }).catch(function(response){
            
        }).finally(function(response){
            
        });
        
        
    }
    
})();