var stims=[["cpresent.jpg","opresent.jpg"],
["cpresent.jpg","oabsent.jpg"],
["cabsent.jpg","opresent.jpg"],
["cabsent.jpg","oabsent.jpg"],
];

//dpindexes=[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1];
//var t=0;
//var rands=[Math.random(),Math.random(),Math.random(),Math.random()];


function getsequencefreqs (lowerbit,higherbit) {
	for(j=0; j<2000; j++){
	rands=[Math.random(),Math.random(),Math.random(),Math.random()];
	erand=math.divide(rands,math.sum(rands));
	bits=math.sum(arraylog(erand))*-1;
	console.log(bits);
	if(bits>lowerbit){
		if (bits<higherbit){
			probs=math.round(math.multiply(erand,50));
			return(probs);
			break;
		}
	}
	}
}


function arraylog (x) {
	saven=[];
  cnt=-1;
	for(i in x){
		cnt++
		saven[cnt]=x[i]*math.log(x[i],2)
	}
	return(saven);
}


var deltaPs=[[15,15,15,15],
[17,13,14,16],
[18,12,12,18],
[19,11,10,20],
[21,9,9,21],
[23,7,8,22],
[24,6,6,24],
[25,5,4,26],
[27,3,3,27],
[28,2,1,29],
[30,0,0,30]];

function createStream (input){
	conditions=[];
	c=-1;
	for (i=0;i<input[0];i++) {
		c++;
		conditions[c]=0;
	};
	for (i=0;i<input[1];i++) {
		c++;
		conditions[c]=1;
	};
	for (i=0;i<input[2];i++) {
		c++;
		conditions[c]=2;
	};
	for (i=0;i<input[3];i++) {
		c++;
		conditions[c]=3;
	};
	return conditions;
}




var flankerLetters=["s","d","j","k"];
flankerLetters=randomizearray(flankerLetters);
var CL=flankerLetters.slice(0,2).concat();
var TL=flankerLetters.slice(2,4).concat();
var Ptype=["High","Low"];
var Location=["up","down"];

Location=randomizearray(Location);
var ContextSet=[[CL[0]+CL[0]+CL[0]+CL[0]+CL[0],CL[0],CL[0],"Con","Context",Ptype[0],Location[0],"FT1b"],
[CL[1]+CL[1]+CL[1]+CL[1]+CL[1],CL[1],CL[1],"Con","Context",Ptype[0],Location[0],"FT1b"],
[CL[0]+CL[0]+CL[1]+CL[0]+CL[0],CL[1],CL[0],"Inc","Context",Ptype[1],Location[1],"FT1b"],
[CL[1]+CL[1]+CL[0]+CL[1]+CL[1],CL[0],CL[1],"Inc","Context",Ptype[1],Location[1],"FT1b"],
[CL[0]+CL[0]+CL[0]+CL[0]+CL[0],CL[0],CL[0],"Con","Context",Ptype[0],Location[0],"FT1b"],
[CL[1]+CL[1]+CL[1]+CL[1]+CL[1],CL[1],CL[1],"Con","Context",Ptype[0],Location[0],"FT1b"],
[CL[0]+CL[0]+CL[1]+CL[0]+CL[0],CL[1],CL[0],"Inc","Context",Ptype[1],Location[1],"FT1b"],
[CL[1]+CL[1]+CL[0]+CL[1]+CL[1],CL[0],CL[1],"Inc","Context",Ptype[1],Location[1],"FT1b"]
];

var TransferSet=[[TL[0]+TL[0]+TL[0]+TL[0]+TL[0],TL[0],TL[0],"Con","Transfer",Ptype[0],Location[0],"FT1b"],
[TL[1]+TL[1]+TL[1]+TL[1]+TL[1],TL[1],TL[1],"Con","Transfer",Ptype[0],Location[0],"FT1b"],
[TL[0]+TL[0]+TL[1]+TL[0]+TL[0],TL[1],TL[0],"Inc","Transfer",Ptype[0],Location[0],"FT1b"],
[TL[1]+TL[1]+TL[0]+TL[1]+TL[1],TL[0],TL[1],"Inc","Transfer",Ptype[0],Location[0],"FT1b"],
[TL[0]+TL[0]+TL[0]+TL[0]+TL[0],TL[0],TL[0],"Con","Transfer",Ptype[1],Location[1],"FT1b"],
[TL[1]+TL[1]+TL[1]+TL[1]+TL[1],TL[1],TL[1],"Con","Transfer",Ptype[1],Location[1],"FT1b"],
[TL[0]+TL[0]+TL[1]+TL[0]+TL[0],TL[1],TL[0],"Inc","Transfer",Ptype[1],Location[1],"FT1b"],
[TL[1]+TL[1]+TL[0]+TL[1]+TL[1],TL[0],TL[1],"Inc","Transfer",Ptype[1],Location[1],"FT1b"]
];

OneBlock=randomizearray(extend2darray(multiplytrials(ContextSet,6),multiplytrials(TransferSet,6)));
trialarray=multiplytrials(OneBlock,4);





function copy2darray (input) {
	var temp=[''];
	for (x in input) {
	temp[x]=input[x].concat();
	}
	return temp;
}

function extend2darray () {
var temp=[''];
var c=-1;
for (i=0; i<arguments.length; i++){
	for (x in arguments[i]) {
	c++;
	temp[c]=arguments[i][x].concat();
	}
}
return temp;
}



//wordstims = randomizearray(wordstims);

//var trialarray = randomizearray(multiplytrials(wordstims,4));
//counterbalance(trialarray);

function counterbalance(input) {
		var ww = 0;
		var t = ["trecall","drecall"];
		t=randomizearray(t);
		for (ww=0; ww<=input.length-1; ww++) {
		if (input[ww][4] == "up") {
			input[ww][5]=t[0];
		}
		else {
			input[ww][5]=t[1];
			}
		}
}

function multiplytrials(input,ntimes) {
	var temparray = new Array(new Array(''));
	iii=-1;
	for (i=0; i<=ntimes-1; i++) {
		for (ii=0; ii<=input.length-1; ii++){
			iii++;
			temparray[iii]=input[ii].concat();
		}
	}
	return temparray;
}

function colPop(t) {
	var n = "";
	n = "<font color= green>"+t[0]+t[1]+"</font><font color = red>" + t[2] + "</font>" +"<font color= green>"+t[3]+t[4]+ "</font>";
	return n;
}

function colnoPop(t) {
	var n = "";
	n = "<font color= green>"+t[0]+t[1]+t[2]+t[3]+t[4]+"</font>";
	return n;
}


function colFirst(t) {
	var n = "";
	n = "<font color = red>" + t[0] + "</font>" +t[1]+t[2]+t[3]+t[4];
	return n;
}

function colLast(t) {
	var n = "";
	n = t[0]+t[1]+t[2]+t[3]+"<font color = red>"+t[4]+"</font>";
	return n;
}

function randomizearray(t){
    var tt= t;
    var n = 0;
    var a = "";
    var b = "";
    var i = 0;
    for (i=0; i <= t.length-1; i++){
        n = Math.floor(Math.random()*t.length);
        a = tt[i];
        b = tt[n];
        tt[i] = b;
        tt[n] = a;
    }
    return tt;
}

function reverseStr ( str ) {
  var rvStr, tR = [ ];
  str = str.split("");
  for ( var i = str.length - 1; i >= 0; i-- ) {
   tR.push( str[ i ] );
  }
  return tR.join( "" );
}


var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

var BrowserInfo = [];
BrowserInfo[0] = BrowserDetect.browser;
BrowserInfo[1] = BrowserDetect.version;
BrowserInfo[2] = BrowserDetect.OS;
