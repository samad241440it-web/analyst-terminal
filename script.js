const ctx=document.getElementById('chart');

let values=[10,20,30,40,50];

const chart=new Chart(ctx,{
type:'line',
data:{
labels:["1","2","3","4","5"],
datasets:[{
label:'Market Data',
data:values,
borderColor:'cyan'
}]
}
});

setInterval(()=>{

let newValue=Math.floor(Math.random()*100);

values.push(newValue);

if(values.length>10){
values.shift();
}

chart.update();

document.getElementById("ticker").innerText=
"BTC "+Math.floor(Math.random()*70000)+" | ETH "+Math.floor(Math.random()*4000);
if(newValue>80){
let s=document.getElementById("signal");
s.innerText="⚠ Unusual market activity detected!";
s.style.color="red";
}

let li=document.createElement("li");
li.innerText="New data "+newValue;

document.getElementById("log").appendChild(li);

},2000);