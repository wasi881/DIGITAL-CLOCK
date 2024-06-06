
function clock() {

    var now = new Date();
    var h = now.getHours()
    var m = now.getMinutes()
    var s = now.getSeconds()
    var session = " AM"

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = " PM";
    }

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    var time = h + ':' + m + ':' + s + '  ' + session;
    document.getElementById('digital').innerText = time;
    document.getElementById('digital').textContent = time;

    setTimeout(clock, 1000);

}

clock();
