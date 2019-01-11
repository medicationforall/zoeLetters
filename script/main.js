function scrollIn(event){
    //console.log('scroll in',arguments);
    var node = $(this).data('node');
    if(node.scrollIn){
      node.scrollIn();
    }
}

function scrollOut(event){
    //console.log('scroll in',arguments);
    var node = $(this).data('node');
    if(node.scrollOut){
      node.scrollOut();
    }
}


$(document).ready(function(){
  console.log('zoe letters');
  
  var letters = [
  //{"letter":"a","label":"Apple","image":"12197659796_46448fa0d3_o.jpg"},
  {
    "letter":"a",
    "label":"Alligator",
    "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Alligator_Canberra_Zoo.jpg/1280px-Alligator_Canberra_Zoo.jpg",
    "sound":"https://www.google.com/logos/fnbx/animal_sounds/alligator.mp3"
  },
  {
    "letter":"b",
    "label":"Bird",
    "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cyanocitta-cristata-004.jpg/1280px-Cyanocitta-cristata-004.jpg",
    "sound":"https://www.google.com/logos/fnbx/animal_sounds/robin.mp3"
  },
  {
    "letter":"c",
    "label":"Cat",
    "image":"https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
    "sound":"https://www.google.com/logos/fnbx/animal_sounds/cat.mp3"
  },
  {
    "letter":"d",
    "label":"Dog",
    "image":"https://upload.wikimedia.org/wikipedia/commons/b/b3/Siberian_husky2.jpg",
    "sound":"https://www.google.com/logos/fnbx/animal_sounds/dog.mp3"
  },
  {
    "letter":"e",
    "label":"Elephant",
    "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Elephant_%28Loxodonta_Africana%29_05.jpg/1280px-Elephant_%28Loxodonta_Africana%29_05.jpg",
    "sound":"https://www.google.com/logos/fnbx/animal_sounds/elephant.mp3"
  },
  {
    "letter":"f",
    "label":"Fox",
    "image":"https://upload.wikimedia.org/wikipedia/commons/d/df/Fox_study_6.jpg",
    "textSound":"Ring-ding-ding-ding-dingeringeding!"
  },
  {
    "letter":"g",
    "label":"Giraffe",
    "image":"https://upload.wikimedia.org/wikipedia/commons/0/02/Giraffe_Ithala_KZN_South_Africa_Luca_Galuzzi_2004.JPG",
    "sound":"https://www.google.com/logos/fnbx/animal_sounds/giraffe.mp3"
  },
  {
    "letter":"h",
    "label":"Horse",
    "image":"https://upload.wikimedia.org/wikipedia/commons/e/e6/IcelandicHorseInWinter.jpg",
    "sound":"https://www.google.com/logos/fnbx/animal_sounds/horse.mp3"
  },
  {
    "letter":"i",
    "label":"Iguana",
    "image":"https://upload.wikimedia.org/wikipedia/commons/7/7f/Iguana_V.jpg",
    "sound":"https://www.google.com/logos/fnbx/animal_sounds/lizard.mp3"
  },
  {
    "letter":"j",
    "label":"Jellyfish",
    "image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg",
    "textSound":"Blub Blub"
  },
  {
    "letter":"k",
    "label":"Koala",
    "image":"https://upload.wikimedia.org/wikipedia/commons/2/25/Friendly_Female_Koala.JPG",
    "sound":"http://alphabetimals.com/wp-content/uploads/sounds/g-sound.mp3"
  },
  {
    "letter":"l",
    "label":"Lion",
    "image":"https://upload.wikimedia.org/wikipedia/commons/b/b5/Lion_d%27Afrique.jpg",
    "sound":"https://www.google.com/logos/fnbx/animal_sounds/lion.mp3"
  },
  {
    "letter":"m",
    "label":"Mouse",
    "image":"https://upload.wikimedia.org/wikipedia/commons/8/83/Mouse-19-Dec-2004.jpg",
    "sound":"http://alphabetimals.com/wp-content/uploads/sounds/m-sound-mouse.mp3"
  },
  {
    "letter":"n",
    "label":"Nautilus",
    "image":"https://upload.wikimedia.org/wikipedia/commons/d/d5/Nautilus_Palau.JPG",
    "sound":"http://alphabetimals.com/wp-content/uploads/sounds/x-sound.mp3"
  },
  {
    "letter":"o",
    "label":"Ostrich",
    "image":"https://upload.wikimedia.org/wikipedia/commons/2/28/Ostrich_male_RWD.jpg"
  },
  {
    "letter":"p",
    "label":"Parrot",
    "image":"https://upload.wikimedia.org/wikipedia/commons/d/d7/Amazona_autumnalis_-The_Parrot_Zoo%2C_Friskney%2C_Lincolnshire%2C_England-8a-2c.jpg",
    "sound":"https://www.google.com/logos/fnbx/animal_sounds/african-grey-parrot.mp3"
  },
  {
    "letter":"q",
    "label":"Quail",
    "image":"https://upload.wikimedia.org/wikipedia/commons/5/59/Blue-headed_quail_dove_%28Starnoenas_cyanocephala%29.JPG",
    "sound":"http://alphabetimals.com/wp-content/uploads/sounds/q-sound.mp3"
  },
  {
    "letter":"r",
    "label":"Rabbit",
    "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Young_Netherland_Dwarf_rabbit.jpg/1280px-Young_Netherland_Dwarf_rabbit.jpg"
  },
  {
    "letter":"s",
    "label":"Stork",
    "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/White_Stork.jpg/1280px-White_Stork.jpg"
  },
  {
    "letter":"t",
    "label":"Tiger",
    "image":"https://upload.wikimedia.org/wikipedia/commons/d/d4/Siberian_Tiger_by_Malene_Th.jpg",
    "sound":"https://www.google.com/logos/fnbx/animal_sounds/tiger.mp3"
  },
  {
    "letter":"u",
    "label":"Upupa",
    "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Common_Hoopoe_Upupa_epops_by_Dr._Raju_Kasambe_DSCN1570_%282%29.jpg/1280px-Common_Hoopoe_Upupa_epops_by_Dr._Raju_Kasambe_DSCN1570_%282%29.jpg"
  },
  {
    "letter":"v",
    "label":"Vicuna",
    "image":"https://upload.wikimedia.org/wikipedia/commons/3/3e/Vicuna_near_Arequipa.jpg",
    "sound":"http://alphabetimals.com/wp-content/uploads/sounds/l-sound-llama.mp3"
  },
  {
    "letter":"w",
    "label":"Whale",
    "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Mother_and_baby_sperm_whale.jpg/1280px-Mother_and_baby_sperm_whale.jpg",
    "sound":"https://www.google.com/logos/fnbx/animal_sounds/humpback-whale.mp3"
  },
  {
    "letter":"x",
    "label":"Xerus",
    "image":"https://upload.wikimedia.org/wikipedia/commons/d/d2/Xerus_inauris.jpg",
    "sound":"http://alphabetimals.com/wp-content/uploads/sounds/r-sound.mp3"
  },
  {
    "letter":"y",
    "label":"Yak",
    "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bos_grunniens_at_Yundrok_Yumtso_Lake.jpg/1280px-Bos_grunniens_at_Yundrok_Yumtso_Lake.jpg",
    "sound":"https://www.google.com/logos/fnbx/animal_sounds/yak.mp3"
  },
  {
    "letter":"z",
    "label":"Zebra",
    "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Equus_quagga.jpg/1280px-Equus_quagga.jpg",
    "sound":"https://www.google.com/logos/fnbx/animal_sounds/zebra.mp3"
  },
  ];
  
  
  
  for(var i = 0,letter;(letter=letters[i]);i++){
    var letterCard = new LetterCard(letter);
    $('main').append(letterCard.node);
  }
  
  
  var trigger = new ScrollTrigger({    
    centerHorizontal: true
    });
});