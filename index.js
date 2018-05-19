function theBeatlesPlay(musicians, instruments){
  var musicians = [
    "John Lennon",
    "Paul Mccarthy"
  ]
  
  var instruments = [
    "Guitar",
    "Drums"
  ]
  
  var musicianWithInstrument=[];
  var i;
  for (i=0; i<musicians.length; ) {
    musicianWithInstrument[i]= musicians[i]+ " plays "+ instruments[i];i++
  }
  return musicianWithInstrument;
}

