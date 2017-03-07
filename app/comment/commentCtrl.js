(function(){
    
    angular.module("comment").controller("commentCtrl", ["commentSvc", commentCtrl]);
    
    function commentCtrl(commentSvc){
        
        var cm = this;
        
        cm.myComments = commentSvc.getComments(); 
        
    }
    
})();