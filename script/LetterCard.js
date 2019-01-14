function LetterCard(options){
  var template='<div class="card" data-scroll data-scroll-showCallback="scrollIn" data-scroll-hideCallback="scrollOut">'+
  '<div class="letter"></div>'+
  '<div class="label"></div>'+
  '<div class="image"><img src="" /></div>'+
  '</div>';
  
  this.node = $(template);
  this.node.data('node',this);
  
  /**
   *
   */
  this.node.on('click','.letter,.label',$.proxy(function(card,event){
    console.log('clicked on',card.letter,card.label);
    
    if ('speechSynthesis' in window) {
      var msg = new SpeechSynthesisUtterance();
      //var voices = speechSynthesis.getVoices();
      /*for(var i=0,voice;(voice=voices[i]);i++){
        console.log('voice is',voice);
      }*/
      //msg.voice = voices[0];
      msg.text = 'The letter "'+card.letter+'" for '+card.label;
      speechSynthesis.speak(msg);
    }
  },null,this));
  
  /**
   *
   */
  this.node.on('click','.image',$.proxy(function(card,event){
    console.log('clicked on',card.image);
    
    if (card.sound) {
    console.log('play sound on',card.sound);
      var sound = new Howl({
        src: [card.sound],
        html5 : true
      });

      sound.play();
    }else if(card.textSound && 'speechSynthesis' in window){
      var msg = new SpeechSynthesisUtterance();
      var voices = speechSynthesis.getVoices();
      msg.voice = voices[0];
      msg.pitch = 2;
      msg.text = card.textSound;
      speechSynthesis.speak(msg);
    }
  },null,this));
  
  /**
   *
   */
  this._construct=function(){
    /*if(options.multi){
      var data = options.multi[Math.floor(Math.random()*options.multi.length)];
      this.setLetter(data.letter);
      this.setLabel(data.label);
      this.setImage(data.image);
      this.setSound(data.sound);
      this.setTextSound(data.textSound);
      this.setColor(data.color);
      
    }else{*/
      this.setLetter(options.letter);
      this.setLabel(options.label);
      this.setImage(options.image);
      this.setSound(options.sound);
      this.setTextSound(options.textSound);
      this.setColor(options.color);
      
      LetterCard.count++;
    //}
  }
  
  /**
   *
   */
  this.setLetter=function(letter){
    this.letter=letter;
    this.node.find('.letter').text(this.letter);
  };

  
  /**
   *
   */  
  this.setLabel=function(label){
    if(label){
      this.label=label;
      this.node.find('.label').text(this.label);
    }
  };
  
  /**
   *
   */  
  this.setColor=function(color){
    if(color){
      this.color=color;
    }else{
      this.color="white";
    }
  };
  
  
  /**
   *
   */  
  this.setSound=function(sound){
    if(sound){
      this.sound=sound;
    }
  };
  
  
   /**
   *
   */  
  this.setTextSound=function(textSound){
    if(textSound){
      this.textSound=textSound;
    }
  };
  
  
  /**
   *
   */
  this.setImage=function(img){
    if(img){
      this.image=img;
      this.node.find('.image img').attr('src',this.image);
    }
  };
  
  
  /**
   *
   */
  this.scrollIn=function(){
    console.log('scroll in event',this.letter,this.color);
    $('main').css('background-color',this.color);
  }
  
  /**
   *
   */
  this.scrollOut=function(){
    console.log('Scroll Out event',this.letter);
  }
  
  this._construct();
}

LetterCard.count = 0;
