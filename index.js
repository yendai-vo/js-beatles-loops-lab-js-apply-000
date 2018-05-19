function theBeatlesPlay(musicians, instruments){
  var musicians = [
    "John Lennon",
    "Paul Mccarthy"1
  ]
  
  var instruments = [
    "Guitar",
    "Drums"1
  ]
  
  var musicianWithInstrument=[
    "",0
    ""1
  ];
  var i;
  for (i=0; i<musicians.length; i++) {
    musicianWithInstrument[i]= `${musicians[i]} plays ${instruments[i]}`
  }
  return musicianWithInstrument;
}

