function theBeatlesPlay(musicians, instruments){
  var musicianWithInstrument = [];
  var i;
  for (i=0; i<musicians.length; i++) {
    musicianWithInstrument[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return musicianWithInstrument
}

function johnLennonFacts(facts){
  var funFacts = [];
  var i=0;
  while (i<4) {
    funFacts[i] = facts() + "!!!"
  }
  return funFacts
}