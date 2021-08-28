class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1  = createInput("").attribute("placeholder", "Enter your name");
   //Create a input box to enter the number
   this.input = createInput("").attribute("placeholder", "Enter Correct Option");
   


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.q = createElement('h3');
    this.a1 = createElement('h4');
    this.a2 = createElement('h4');
    this.a3 = createElement('h4');
    this.a4 = createElement('h4');

    this.message = createElement("h2");
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.message.hide();
    //Add hide() for questions, options & input box
    this.q.hide();
    this.a1.hide(); 
    this.a2.hide();
    this.a3.hide();
    this.a4.hide();
    this.input.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.input.position(400,230);
    this.q.html("Give me wood and I will live , Give me water , and I will die");
    this.q.position(100,50);
    this.a1.html("1)Heart");
    this.a1.position(100,80);
    this.a2.html("2)Hole");
    this.a2.position(100,100);
    this.a3.html("3)Fire");
    this.a3.position(100,120);
    this.a4.html("4)Mirror");
    this.a4.position(100,140);
    


    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
   



    this.button.mousePressed(()=>{
      this.message.html("Thank You , Your Answer Has Been Submited"); 
    this.message.position(200,350); 
    })


  }
}
