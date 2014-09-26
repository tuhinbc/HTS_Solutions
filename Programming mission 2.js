var im=new Image();
//im.src="png";
im.src="/missions/prog/2/PNG";
var cc=document.createElement('canvas');
cc.id="tuhin";
cc.height=30;
cc.width=100;
var cont=cc.getContext('2d');
cont.drawImage(im,0,0);
//document.body.appendChild(cc);


//element = document.getElementById("tuhin");
//kk = element.getContext("2d");
//width = element.width;
//height = element.height;

imageData= cont.getImageData(0,0,100,30);

var ar=new Array();
var t=0;
for(;t<12000;t+=4)
{
if(imageData.data[t]>0) {ar.push((t/4));}
}

var len=ar.length;

for(t=len-1;t>0;t--){
ar[t]=ar[t]-ar[t-1];
}


var st="";
var vv=0;
var out="";
var ts="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

var sar=new Array(".-", "-..."   , "-.-."    , "-.."    , "."    , "..-."    , "--."    , "...."    , ".."   , ".---"   , "-.-"    , ".-.."   , "--", "-."   , "---"   , ".--."   , "--.-"   , ".-."   , "..."   , "-"   , "..-"   , "...-"   , ".--"    , "-..-"   , "-.--"   , "--.."   , ".----"   , "..---"   , "...--"   , "....-" , "....."  , "-...." , "--...", "---..", "----.", "-----");

var ll="";
for(t=0;t<len;t++)
{
	if(ar[t]==47){
		out+=" ";
	}
	else if(ar[t]==32){
		//st+=String.fromCharCode(ar[t]);
		
		/// Recheck This Part
		///
		///
		for(vv=0;vv<37;vv++)
		{
			if(sar[vv]==st)
			{
				//out+=String.fromCharCode(vv+65
				out+=ts[vv];
				st="";
				break;
			}
			//else ll+=st+"+";
		}
	}
	else st+=String.fromCharCode(ar[t]);
}
out;
//alert(out);
pl=document.getElementsByTagName('input');
pl[0].setAttribute('value',out);

document.getElementsByTagName('input')[1].click();