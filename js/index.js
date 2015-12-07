
ion.sound({
    sounds: [
        {name: "animeShing"},
        {name: "BASSDRUM"},
        {name: "clapSnare"},
        {name: "C_39_Mon"},
        {name: "Chant_Hey_002"},
        {name: "Chant_Noise"},
        {name: "Chant_Who_001"},
        {name: "clap3"},
        {name: "clap5"},
        {name: "fx3"},
        {name: "fx4"},
        {name: "kick"},
        {name: "kick2"},
        {name: "kick3"},
        {name: "Skrillex"},
        {name: "snare3"},
        {name: "snareDry"},
        {name: "sword-hit"},
        {name: "snareLight"}
    ],

    // main config
    path: "sounds/",
    preload: true,
    multiplay: true,
    volume: 0.9
});

// play sound


$(document).ready(function() {
  $(document).keydown(function(key) {
    switch (parseInt(key.which, 10)) {
// kick drums:
    case 37:
    // 'left' arrow key
        $('div').toggleClass('do');
        ion.sound.play("kick");
        break;
    case 38:
    // 'up' arrow key
        $('div').toggleClass('dob');
        ion.sound.play("kick2");
        break;
    case 39:
    // 'right' arrow key        
        $('div').toggleClass('doc');
        ion.sound.play("BASSDRUM");
        break;
    case 40:
    // 'down' arrow key
        $('div').toggleClass('dod');
        ion.sound.play("kick3");
        break;
// snares & claps:
    case 49:
    // '1' key
        $('div').toggleClass('do3');
        ion.sound.play("snareLight");
        break; 
    case 50:
    // '2' key
        $('div').toggleClass('do3a');
        ion.sound.play("clapSnare");
        break;
    case 51:
    // '3' key
        $('div').toggleClass('do3b');
        ion.sound.play("clap3");
        break;
    case 52:
    // '4' key
        $('div').toggleClass('do3');
        ion.sound.play("clap5");
        break;
    case 53:
    // '5' key
        $('div').toggleClass('do3a');
        ion.sound.play("snare3");
        break;
    case 54:
    // '6' key
        $('div').toggleClass('do3b');
        ion.sound.play("snareDry");
        break;

// effects & fx:
    case 35:
    // 'end' key
        $('div').toggleClass('do2');
        ion.sound.play("animeShing");
        break;
    case 46:
    // 'delete' key
        $('div').toggleClass('do2a');
        ion.sound.play("sword-hit");
        break;
    case 34:
    // 'pagedown' key
        $('div').toggleClass('do2b');
        ion.sound.play("Chant_Noise");
        break;
    case 33:
    // 'pageup' key
        $('div').toggleClass('do2c');
        ion.sound.play("fx3");
        break;
    case 36:
    // 'home' key
        $('div').toggleClass('do2d');
        ion.sound.play("fx4");
        break;

// vocals:            
    case 13:
    // 'return/enter' key
        $('div').toggleClass('do1');
        ion.sound.play("C_39_Mon");
        break;
    case 16:
    // 'shift' key
        $('div').toggleClass('do1a');
        ion.sound.play("Chant_Hey_002");
        break;
    case 17:
    // 'ctrl' key
        $('div').toggleClass('do1b');
        ion.sound.play("Chant_Who_001");
        break;
    case 18:
    // 'alt' key
        $('div').toggleClass('do1c');
        ion.sound.play("Skrillex");
        break;      
    }
  });

})

