var color1 = document.getElementsByClassName('color1');
var color2 = document.getElementsByClassName('color2');
var color3 = document.getElementsByClassName('color3');
var color4 = document.getElementsByClassName('color4');
var color5 = document.getElementsByClassName('color5');
var color6 = document.getElementsByClassName('color6');
var color7 = document.getElementsByClassName('color7');
var color8 = document.getElementsByClassName('color8');
var color9 = document.getElementsByClassName('color9');
var color10 = document.getElementsByClassName('color10');
var color11 = document.getElementsByClassName('color11');
var color12 = document.getElementsByClassName('color12');
var color13 = document.getElementsByClassName('color13');
var color14 = document.getElementsByClassName('color14');
var color15 = document.getElementsByClassName('color15');
var color16 = document.getElementsByClassName('color16');
var color17 = document.getElementsByClassName('color17');
var color18 = document.getElementsByClassName('color18');

var lists = document.getElementsByClassName('list');
var close = document.getElementById('btn');
var open = document.getElementById('open');
//menu bar
open.addEventListener('click', function onClick() {
    op();
});
close.addEventListener('click', function onClick() {
    cl();
});

function cl() {
    for (var list of lists) {
        list.classList.remove('open1');
    };
};

function op() {
    for (var list of lists) {
        list.classList.add('open1');
    };
};



//color1
color1[0].addEventListener('click', function() {
    console.log(color1);
});

for (var color1 of color1) {
    color1.addEventListener('click', function onClick() {
        alert('background-color: #0093E9;' +
            'background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 33%);');
    })
};


//color2
color2[0].addEventListener('click', function() {
    console.log(color2);
});

for (var color2 of color2) {
    color2.addEventListener('click', function onClick() {
        alert('background-color: #4158D0;' +
            'background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);');
    })
};


//color3
color3[0].addEventListener('click', function() {
    console.log(color3);
});

for (var color3 of color3) {
    color3.addEventListener('click', function onClick() {
        alert('background-color: #8EC5FC;' +
            'background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);');
    })
};

//color4
color4[0].addEventListener('click', function() {
    console.log(color4);
});

for (var color4 of color4) {
    color4.addEventListener('click', function onClick() {
        alert('background-color: #D9AFD9;' +
            'background-image: linear-gradient(191deg, #D9AFD9 0%, #97D9E1 100%);');
    })
};
//color5
color5[0].addEventListener('click', function() {
    console.log(color5);
});

for (var color5 of color5) {
    color5.addEventListener('click', function onClick() {
        alert('background-color: #FFFFFF;' +
            'background-image: linear-gradient(238deg, #FFFFFF 0%, #6284FF 50%);');
    })
};


//color6
color6[0].addEventListener('click', function() {
    console.log(color6);
});

for (var color6 of color6) {
    color6.addEventListener('click', function onClick() {
        alert('background-color: #FBAB7E;' +
            'background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);');
    })
};

//color7
color7[0].addEventListener('click', function() {
    console.log(color7);
});

for (var color7 of color7) {
    color7.addEventListener('click', function onClick() {
        alert('background-color: #8BC6EC;' +
            'background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);');
    })
};
//color8
color8[0].addEventListener('click', function() {
    console.log(color8);
});

for (var color8 of color8) {
    color8.addEventListener('click', function onClick() {
        alert('background-color: #FFE53B;' +
            'background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);');
    })
};
//color9
color9[0].addEventListener('click', function() {
    console.log(color9);
});

for (var color9 of color9) {
    color9.addEventListener('click', function onClick() {
        alert('background-color: #FF9A8B;' +
            'background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);');
    })
};
//color10
color10[0].addEventListener('click', function() {
    console.log(color10);
});

for (var color10 of color10) {
    color10.addEventListener('click', function onClick() {
        alert('background-color: #FBDA61;' +
            'background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);');
    })
};
//color11
color11[0].addEventListener('click', function() {
    console.log(color11);
});

for (var color11 of color11) {
    color11.addEventListener('click', function onClick() {
        alert('background-color: #FAACA8;' +
            'background-image: linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);');
    })
};
//color12
color12[0].addEventListener('click', function() {
    console.log(color12);
});

for (var color12 of color12) {
    color12.addEventListener('click', function onClick() {
        alert('background-color: #FAD961;' +
            'background-image: linear-gradient(90deg, #FAD961 0%, #F76B1C 100%);');
    })
};
//color13
color13[0].addEventListener('click', function() {
    console.log(color13);
});

for (var color13 of color13) {
    color13.addEventListener('click', function onClick() {
        alert('background-color: #FF3CAC;' +
            'background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);');
    })
};
//color14
color14[0].addEventListener('click', function() {
    console.log(color14);
});

for (var color14 of color14) {
    color14.addEventListener('click', function onClick() {
        alert('background-color: #74EBD5;' +
            'background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);');
    })
};
//color15
color15[0].addEventListener('click', function() {
    console.log(color15);
});

for (var color15 of color15) {
    color15.addEventListener('click', function onClick() {
        alert('background-color: #A9C9FF;' +
            'background-image: linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%);');
    })
};
//color16
color16[0].addEventListener('click', function() {
    console.log(color16);
});

for (var color16 of color16) {
    color16.addEventListener('click', function onClick() {
        alert('background-color: #0093E9;' +
            'background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);');
    })
};
//color17
color17[0].addEventListener('click', function() {
    console.log(color17);
});

for (var color17 of color17) {
    color17.addEventListener('click', function onClick() {
        alert('background-color: #505d5f;' +
            'background-image: linear-gradient(291deg, #505d5f 28%, #5f6f72 50%);');
    })
};
//color18
color18[0].addEventListener('click', function() {
    console.log(color18);
});

for (var color18 of color18) {
    color18.addEventListener('click', function onClick() {
        alert('background-color: #1b0000;' +
            'background-image: linear-gradient(74deg, #1b0000 0%, #2c0000 100%);');
    })
};