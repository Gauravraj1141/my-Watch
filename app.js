
setInterval(() => {
    let date = new Date()
    let dd = date.getDate()
    let mm = date.getMonth() + 1
    let yy = date.getFullYear()

    // dayname logic 
    let day = date.getDay();

    let dayname = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let dayname1 = dayname[day]


    // before add zero at datelogic
    if ((dd).toString().length < 2) {
        dd = `0${dd}`;

    }
    if ((mm).toString().length < 2) {
        mm = `0${mm}`;

    }


    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    //  am pm logic
    let ap;
    if (hour > 0 && hour < 12) {
        ap = "AM";


    }

    else if (hour > 12) {
        ap = "PM";
    }


    // before add zero at time
    if (minute.toString().length < 2) {
        minute = `0${minute}`;


    }
    if (second.toString().length < 2) {
        second = `0${second}`;

    }
    if ((hour - 12).toString().length < 2) {
        hour = `0${hour - 12}`;

    }




    let html = "";
    html += `<p>${hour}:${minute}:${second}:${ap}</p>`

    let hour1 = document.getElementById("hour")

    hour1.innerHTML = html;


    let html1 = "";

    let Date1 = document.getElementById("date")
    html1 += `<p>${dd}-${mm}-${yy} (${dayname1})</p>`


    Date1.innerHTML = html1;


}, 100);



