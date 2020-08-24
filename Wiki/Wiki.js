var States = require('./States/');



Postal Code
Alabama	Ala.	AL
Alaska	Alaska	AK
Arizona	Ariz.	AZ
Arkansas	Ark.	AR
California	Calif.	CA
Colorado	Colo.	CO
Connecticut	Conn.	CT
Delaware	Del.	DE
District of Columbia	D.C.	DC
Florida	Fla.	FL
Georgia	Ga.	GA
Hawaii	Hawaii	HI
Idaho	Idaho	ID
Illinois	Ill.	IL
Indiana	Ind.	IN
Iowa	Iowa	IA
Kansas	Kans.	KS
Kentucky	Ky.	KY
Louisiana	La.	LA
Maine	Maine	ME
Maryland	Md.	MD
Massachusetts	Mass.	MA
Michigan	Mich.	MI
Minnesota	Minn.	MN
Mississippi	Miss.	MS
Missouri	Mo.	MO
Montana	Mont.	MT
NE: Nebraska
NV: Nevada
NH: New Hampshire
NJ: New Jersey
NM: New Mexico
NY: New York
NC: North Carolina
ND: North Dakota
OH: Ohio
OK: Oklahoma
OR: Oregon
PA: Pennsylvania
RI: Rhode Island
SC: South Carolina
SD: South Dakota
TN: Tennessee
TX: Texas
UT: Utah
VT: Vermont
VA: Virginia
WA: Washington
WV: West Virginia
WI: Wisconsin
WY: Wyoming

// State's Indiv Obj Decl
var LAObj = {
  LAKey: States.LA,
  LATestKey: States.LATest
}

// State's Indiv Vars Decl
var la = LAObj;

// State Object
var stateObject = {
  la: la
}

// Wiki's Index
var wikiObject = {
  la: la
}



var exportobject = {
  wiki: wikiObject 
}

module.exports = exportobject;