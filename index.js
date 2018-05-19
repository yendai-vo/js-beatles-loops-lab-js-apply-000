function theBeatlesPlay(musicians, instruments){
  var i;
  for (i=0; i<musicians.length; i++) {
    var musicianWithInstrument=[];
    musicianWithInstrument[i]= musicians[i]+ " plays "+ instruments[i];
  }
  return musicianWithInstrument;
}
