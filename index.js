function theBeatlesPlay(musicians, instruments){
  a=[];
  var i;
  for (i=0; i<musicians.length; i++) {
    a[i]= musicians[i]+ " plays "+ instruments[i];
  }
  return a;
}