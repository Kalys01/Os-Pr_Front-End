document.getElementById('color').onclick = function() {
    let bod = document.querySelector('button');

    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));

    color = `#${r.toString(16) + g.toString(16) + b.toString(16)}`;
    console.log(color);
    bod.style.background = color;
}

document.getElementById('del').onclick = function(){
    var d = document.getElementById("but");
    d.parentNode.removeChild(d);
}

var time = setInterval(function() {
    let bod = document.querySelector('body');
    let date = new Date();
    let time = document.getElementById("dataTime");
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    time.innerHTML = (("0" + h).slice(-2) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2));

    color = `#${h.toString(16) + s.toString(16) + m.toString(16)}`;
    bod.style.background = color;
    
  }, 1000);
//   time();

//time.innerHTML = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

    // if ((h && m && s) > 9)
    //     time.innerHTML = (h + ":" + m + ":" + s);
    // if (h < 10)
    //     time.innerHTML = ("0" + h + ":" + m + ":" + s);
    // if (m < 10)
    //     time.innerHTML = (h + ":" + "0" + m + ":" + s);
    // if (s < 10)
    //     time.innerHTML = (h + ":" + m + ":" + "0" + s);


var a = 13;
console.log(a.toString(16));