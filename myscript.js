function parse(){
    var x = document.getElementById('leftname').value
    var i = 0;
    var len = x.length;
    console.log(typeof(len));
    var arr = "";
    console.log(typeof(arr));
    
    
    function delay(){
       var sam = setInterval(function(){
             arr += x.charAt(i);
             document.getElementById('rightname').value=arr;
             if(i<=len){
                i++;
                console.log(i+"notbreak");     
             }
             else
             clearInterval(sam);   
             console.log(i);
            },1000);
     }   
    
    return  delay();

}
function pause(){
  
    document.getElementById('rightname').value= "";
    document.getElementById('leftname').value= "";
    document.getElementById('btnright').disabled = true;
    document.getElementById('btnleft').disabled = true;

    }  

function rightparse(){
     var x1 = document.getElementById('leftname').value
     if(x1!=""){
        document.getElementById('leftname').value= "";
        var inputflow = document.getElementById('rightname').value
        var i = 0;
        var len = inputflow.length;
        var arr = "";
        function delay(){
       var sam = setInterval(function(){
             arr += inputflow.charAt(i);
             document.getElementById('leftname').value=arr;
             if(i<=len){
                i++;
                console.log(i+"notbreak");     
             }
             else
             clearInterval(sam);   
             console.log(i);
            },1000);
     }   
    
    return  delay();
     }
}
