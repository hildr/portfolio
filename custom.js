var menu = document.querySelector('.menu');

window.addEventListener('scroll', function() {

    if (this.pageYOffset >= 80) {
        menu.classList.add('sticky');
        menu.classList.remove('menu');
    } else {
        menu.classList.remove('sticky');
        menu.classList.add('menu');
    }
    // console.log(this.pageYOffset);

});

var showText = function(target, message, index, interval) {
    if (index < message.length) {
        var text = document.createElement('span')
  			text.innerHTML = message[index++]
    		document.querySelector(target).appendChild(text) 
    		setTimeout(function () { showText(target, message, index, interval); }, interval) 
    } else if (index == message.length){
    	setTimeout(function(){
    	document.querySelector(target).innerHTML = ""
    }, 1000 ) 
    }
}

setTimeout(function() {
    showText("#html", "HTML", 0, 200);
}, 0);


setTimeout(function() {
    showText("#css", "CSS", 0, 200);
}, 1800);

setTimeout(function() {
    showText("#js", "JavaScript", 0, 100)
}, 3400);

setTimeout(function() {
    showText("#jq", "jQuery", 0, 100)
}, 5400);

setTimeout(function() {
    showText("#wp", "Wordpress", 0, 100)
}, 7100);

setTimeout(function() {
    showText("#sass", "SASS", 0, 100)
}, 9100);

setTimeout(function() {
    showText("#ai", "Illustrator", 0, 100)
}, 10700);

setTimeout(function() {
    showText("#ps", "Photoshop", 0, 100)
}, 12800);

setTimeout(function() {
    showText("#id", "InDesign", 0, 100)
}, 14800);

setTimeout(function() {
    showText("#ae", "After Effects", 0, 100)

}, 16800);

setTimeout(function() {
    showText("#pr", "Premier Pro", 0, 100)
}, 19200);

setTimeout(function() {
    showText("#flash", "Flash", 0, 100)
},21400);


setInterval(function(){

var showText = function(target, message, index, interval) {
    if (index < message.length) {
        var text = document.createElement('span')
  		text.innerHTML = message[index++]
    	document.querySelector(target).appendChild(text) 
    	setTimeout(function () { showText(target, message, index, interval); }, interval) 
    } else if (index == message.length){
    	setTimeout(function(){
    	document.querySelector(target).innerHTML = ""
    }, 1000)
    }
}

setTimeout(function() {
    showText("#html", "HTML", 0, 200);
}, 0);


setTimeout(function() {
    showText("#css", "CSS", 0, 200);
}, 1800);

setTimeout(function() {
    showText("#js", "JavaScript", 0, 100)
}, 3400);

setTimeout(function() {
    showText("#jq", "jQuery", 0, 100)
}, 5400);

setTimeout(function() {
    showText("#wp", "Wordpress", 0, 100)
}, 7100);

setTimeout(function() {
    showText("#sass", "SASS", 0, 100)
}, 9100);

setTimeout(function() {
    showText("#ai", "Illustrator", 0, 100)
}, 10700);

setTimeout(function() {
    showText("#ps", "Photoshop", 0, 100)
}, 12800);

setTimeout(function() {
    showText("#id", "InDesign", 0, 100)
}, 14800);

setTimeout(function() {
    showText("#ae", "After Effects", 0, 100)

}, 16800);

setTimeout(function() {
    showText("#pr", "Premier Pro", 0, 100)
}, 19200);

setTimeout(function() {
    showText("#flash", "Flash", 0, 100)
},21400);

}, 23000);

window.onload = function () {
    var elem = document.querySelector('.flickity');
  var flkty = new Flickity(elem, {
    contain: true,
    wrapAround: true,
    autoPlay: 5000,
    prevNextButtons: false,
    lazyLoad: true
  });

  var elem2 = document.querySelector('.flickity-2');
  var flkty = new Flickity(elem2, {
    contain: true,
    wrapAround: true,
    autoPlay: 5000,
    prevNextButtons: false,
    lazyLoad: true
  });

  var elem3 = document.querySelector('.flickity-3');
  var flkty = new Flickity(elem3, {
    contain: true,
    wrapAround: true,
    autoPlay: 5000,
    prevNextButtons: false,
    lazyLoad: true
  });

  var elem4 = document.querySelector('.flickity-4');
  var flkty = new Flickity(elem4, {
    contain: true,
    wrapAround: true,
    autoPlay: 5000,
    prevNextButtons: false,
    lazyLoad: true
  });

  var elem5 = document.querySelector('.flickity-5');
  var flkty = new Flickity(elem5, {
    contain: true,
    wrapAround: true,
    autoPlay: 5000,
    prevNextButtons: false,
    lazyLoad: true
  });  

  var elem6 = document.querySelector('.flickity-6');
  var flkty = new Flickity(elem6, {
    contain: true,
    wrapAround: true,
    autoPlay: 5000,
    prevNextButtons: false,
    lazyLoad: true
  });
 }