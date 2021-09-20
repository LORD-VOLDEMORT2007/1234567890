class Form {
  constructor() {
    this.title = createElement('h2')
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset = createButton('reset');
    this.greeting = createElement('h3');
  }

  hideForm(){
this.title.hide()
this.input.hide();
this.button.hide();
this.greeting.hide()

  }

  display(){
    
    this.title.html("Car Racing Game");
    this.title.position(width/2-50,0);
    
    this.reset.position(width -100 ,20);
    
    this.input.position(width/2-40,height/2-80);
    this.button.position(width/2+30,height/2);

    this.button.mousePressed(() =>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.name = this.input.value();

      player.index = playerCount;

      player.update()
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(width/2-70,height/4)
    });
    this.reset.mousePressed(() =>{

      game.update(0)
      player.updateCount(0)

    })
  }
}
