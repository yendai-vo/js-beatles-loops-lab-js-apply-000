function theBeatlesPlay(musicians, instruments){
  musicianWithInstrument=[];
  var i;
  for (i=0; i<musicians.length; i++) {
  musicianWithInstrument[i]= musicians[i]+ " plays "+ instruments[i];
  }
  return musicianWithInstrument;
}