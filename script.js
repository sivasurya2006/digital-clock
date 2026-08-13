function updateclock(){
    let now=new Date();

    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();

    let  period="AM";

    if(hours >=12){
        period ="PM"
    }
    if(hours>12){
        hours=hours-12;
    }
    if(hours === 0){
        hours=12;
    }
    hours=hours<10 ? "0"+hours :hours;
    minutes=minutes<10 ? "0"+minutes :minutes;
    seconds=seconds<10 ? "0"+seconds :seconds;

    document.getElementById("hours").textContent=hours;
    document.getElementById("minutes").textContent=minutes;
    document.getElementById("seconds").textContent=seconds;
    document.getElementById("period").textContent=period;

    let options={
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric"
    };
    document.getElementById("date").textContent=now.toLocaleDateString("en-us",options);
}
    updateclock();
    setInterval(updateclock,1000);