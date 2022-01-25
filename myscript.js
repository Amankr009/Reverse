function revS(){
var x=document.getElementById("i").value;
if(x.length===0)
window.alert("Please enter some INPUT.");
else{
var s=x.split(" ");
var r=[];
for(var i=0;i<s.length;i++)
{
	for(var j=s[i].length-1;j>=0;j--)
	{
		r.push(s[i][j]);
	}
	r.push(" ");
} 
document.getElementById("o").value=r.join(''); 
//document.getElementById("o").value=x.split(" ").reverse().join('');			// for string reverse.
}
}
function resT(){
var x=document.getElementById("i").value;
if(x.length===0)
window.alert("All fields are already blank.");
else if(confirm("Your data will Lost. Do you want to continue?")){
document.getElementById("i").value='';
document.getElementById("o").value='';
}
}
function exiT(){
if(confirm("Do you want to close this tab?")){
close();
}
}
