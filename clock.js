setInterval(updateClock,1000);

function updateClock(){
    var date=new Date();
    var Hour=date.getHours();
    var Minutes=date.getMinutes();
    var Seconds=date.getSeconds();
   
    if(Hour < 10){
        Hour="0" +Hour;
    }

    if(Minutes < 10){
        Minutes="0"+Minutes;
    }
    if(Seconds < 10){
        Seconds="0" +Seconds;
    }
    
    var MyDate =Hour+":"+Minutes+":"+Seconds;

    document.getElementById("clock").innerText= MyDate;

}