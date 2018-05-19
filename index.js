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
    "John Lennon",  0
    "Paul Mccarthy" 1
  ],
  [
    "Guitar", 0
    "Drums"   1
  ]
)

"John lennon plays guitar"
"Paul mccarythy plays drums"