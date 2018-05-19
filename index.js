function theBeatlesPlay(musicians, instruments){
  var musicianWithInstrument=[];
  var i;
  for (i=0; i<musicians.length; i++) {
    musicianWithInstrument[i]= musicians[i]+ " plays "+ instruments[i];
  }
  return musicianWithInstrument;
}

theBeatlesPlay(
  [
    "John Lennon",
    "Paul Mccarthy"
  ],
  [
    "Guitar",
    "Drums"
  ]
)

"John lennon plays guitar"
"Paul mccarythy plays drums"