 function myFirstApp(name, age) {
     alert(`Привет, меня зовут ${name} и это моя первая программа`);

     function swowSkills() {
         let skills = ['html', ' css', ' js.'];
         // Я владею: html
        console.log('Я владею: ' + skills);
     }
        swowSkills();

      function checkAge() {
          //age > 18
          // У тебя хорошие шансти стать FrontEnd dev!
            if (age > 18) {
                alert('У тебя хорошие шансти стать FrontEnd dev!', '');
            } else if (age < 18) {
                alert('Тебя ждет светлое будущее!');
            }
      }
        checkAge();


      function calcPow(num) {
          console.log(num * num);

      }
      calcPow(4);
      //console.log((4)); // 16
 }
 

myFirstApp("Juliia", 30);