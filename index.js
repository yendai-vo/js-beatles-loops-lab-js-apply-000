function theBeatlesPlay(musicians, instruments){
  var musicians = [
    "John Lennon",
    "Paul Mccarthy"
  ]
  
  var instruments = [
    "Guitar",
    "Drums"
  ]
  
  var musicianWithInstrument=[
    "",0
    ""
  ];
  var i;
  for (i=0; i<musicians.length; i++) {
    musicianWithInstrument[i]= musicians[i]+ " plays "+ instruments[i];
  }
  return musicianWithInstrument;
}

