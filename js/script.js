let about = document.querySelector('.about');
let scrollUpButton = document.querySelector('.scrollUpButton');

autoScroll = (target, duration) => {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var firstPosition = window.pageYOffset;
    var distance = targetPosition - firstPosition;
    var startTime = null;
  
    function animation(currentTime) {
      if(startTime === null) 
        startTime = currentTime;
      var timeEllapsed = currentTime - startTime;
      var run = easeOutSine(timeEllapsed, firstPosition, distance, duration);
      window.scrollTo(0, run);
      if(timeEllapsed < duration)
        requestAnimationFrame(animation);
    }
  
    function easeOutSine (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    }

    requestAnimationFrame(animation);
  
  }

  scrollUpButtonAppearance = (button) => {
    let aboutPosition = about.getBoundingClientRect().top;
    let distance = aboutPosition - window.pageYOffset;

    if(distance < 0)
        button.classList.add("active");
    else 
        button.classList.remove("active");
  }
  
  about.addEventListener('click' , function() {
    autoScroll('.aboutPage' , 100);
  })

  // Code Mirror
  var myCodeMirror1 = CodeMirror.fromTextArea(document.getElementById('clientClass'), {
    mode: "text/x-java",
    theme: "yonce",
    lineNumbers: true
  });
  myCodeMirror1.setSize("100%", 1000)

  var myCodeMirror2 = CodeMirror.fromTextArea(document.getElementById('BodyMapClass'), {
    mode: "text/x-java",
    theme: "yonce",
    lineNumbers: true
  });
  myCodeMirror2.setSize("100%", 1000)

  var myCodeMirror3 = CodeMirror.fromTextArea(document.getElementById('functionsClass'), {
    mode: "text/x-java",
    theme: "yonce",
    lineNumbers: true
  });
  myCodeMirror3.setSize("100%", 550)

  var myCodeMirror4 = CodeMirror.fromTextArea(document.getElementById('GymMachineClass'), {
    mode: "text/x-java",
    theme: "yonce",
    lineNumbers: true
  });
  myCodeMirror4.setSize("100%", 1000)

  var myCodeMirror5 = CodeMirror.fromTextArea(document.getElementById('weightedMachineClass'), {
    mode: "text/x-java",
    theme: "yonce",
    lineNumbers: true
  });
  myCodeMirror5.setSize("100%", 800)

  var myCodeMirror6 = CodeMirror.fromTextArea(document.getElementById('vendingMachineClass'), {
    mode: "text/x-java",
    theme: "yonce",
    lineNumbers: true
  });
  myCodeMirror6.setSize("100%", 800)

  var myCodeMirror7 = CodeMirror.fromTextArea(document.getElementById('checkManagerClass'), {
    mode: "text/x-java",
    theme: "yonce",
    lineNumbers: true
  });
  myCodeMirror7.setSize("100%", 800)

  var myCodeMirror8 = CodeMirror.fromTextArea(document.getElementById('mySQLServiceClass'), {
    mode: "text/x-java",
    theme: "yonce",
    lineNumbers: true
  });
  myCodeMirror8.setSize("100%", 800)