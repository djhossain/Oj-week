 

const rank=0;
const name=1;
const total=2;

const h=70;
const posi=5;
var lastId=1;

var days= parseInt(prompt("Enter the nember of days"));
var people= parseInt(prompt("Enter the nember of person"));
var p=[];
p[0]=new person();

 for(var n=1;n<=people;n++)
 {
 	p[n]= new person();
 	p[n].name=prompt("Enter the name");
 	p[n].array[0]=0;
 	p[n].exist=0;
 	for(var i=1;i<=days;i++)
 	{
 		p[n].array[i]=parseInt(prompt(p[n].name + "'s Solve in day "+i))+p[n].array[i-1];
 	}
 }


(async function Main() {
  await wait(500);
  for(var day=1;day<=days;day++)
	{
		document.getElementById('dayCount').innerHTML=day;
		for(pers=1;pers<=people;pers++)
		{
			if(p[pers].exist==0 && p[pers].array[day]>0)
			{
				p[pers].exist=1;
				p[pers].rank=lastId;
				p[pers].start=posi+(h*(lastId-1));
				console.log(p[pers].start);
 				await createnew(pers,lastId);
 				await updateSolve(p[pers].array[day-1],p[pers].array[day],document.getElementById(lastId),total);
 				lastId++;
			}
			else
			{
				await updateSolve(p[pers].array[day-1],p[pers].array[day],document.getElementById(pers),total);
			}
			var now=pers;
			while (now>1) 
			{
				if(p[now].array[day]>p[now-1].array[day])
				{
					if(p[now-1].exist==1)
					{
						await swap(now);
					}

					var temp=p[now];
					p[now]=p[now-1];
					p[now-1]=temp;
					now--;
				}
				else
					break;
			}
		}
		await wait(500);
	}
  
})();


function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms)
    }, ms )
  })
}  


function updateSolve(from,to,ele,s)
{
	update(from,to,ele,s);
	var de = (to-from)*50;
  	return new Promise((resolve, reject) => {
    	setTimeout(() => {
      		resolve()
    	}, de)
  	})

}

function swap(now)
{
	var prev=now-1;

	nowbox=document.getElementById(now);
	prevbox=document.getElementById(prev);

	p[now].rank=prev;
	p[prev].rank=now;

	var s1=p[now].start;
	var s2=p[prev].start;

	myMove(s1,s2,nowbox);
	myMove(s2,s1,prevbox);

	update(now-1,now,prevbox,rank);
	update(now,now-1,nowbox,rank);

	var tempid=99999;
	changeid(now,tempid);
	changeid(now-1,now);
	changeid(tempid,now-1);

	var tempStart=p[now].start;
	p[now].start=p[now-1].start;
	p[now-1].start=tempStart;


	return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 500 )
  })

}
 
function changeid(from,to)
{
	document.getElementById(from).id=to;

}



function person()
 {
 	this.name=null;
 	this.rank=0;
 	this.start=0;
 	this.array=[];
 	this.exist=0;
 	this.id;
 }


function myMove(from,to,ele) {

	var cls;
  	var pos = from;
  	var id = setInterval(frame, 7.5);
  	function frame() {
    if (pos == to) 
    {
    	ele.classList.remove(cls) ;
      	clearInterval(id);
    } 
    else 
    {

    	if(from<to)
    	{
    		cls = 'toDown';
    		ele.classList.add(cls);
      		pos++;
    	}
      	else 
      	{
      		cls = 'toUp';
      		ele.classList.add(cls);
      	 	pos--;
      	} 
      	ele.style.top = pos + "px"; 
    }
  }
}

function update(from,to,ele,s) {

  	var pos = from;
  	var id = setInterval(frame, 50);

  	function frame() {
    if (pos == to) 
    {
      clearInterval(id);
    } 
    else 
    {
    	if(from<to)
    	{
      		pos++;
    	}
      	else 
      	{
      	 	pos--;
      	} 
      	ele.children[s].innerHTML = pos; 
    }
  }
}

function newCome(ele) {

	var cls;
  	var opa = 0.0;
  	var pos = 270;
  	var id = setInterval(frame, 5);
  	function frame() {
    if (opa == 1 && pos == 210) 
    {
      	clearInterval(id);
    } 
    else 
    {
    	if(pos>210)
    		pos--;
    	if(opa<1.0)
    		opa+=0.02;
      	ele.style.opacity = opa; 
      	ele.style.left = pos + "px"; 
      	console.log(pos);
    }
  }
}





function createnew(n,newid)
{
	var main=document.getElementById("container");

	var div=document.createElement("div");
 	div.classList.add('rank_box');
 	div.id=newid;
 	main.appendChild(div);
 	div.style.opacity = 0;
 	div.style.top = p[n].start + 'px';
 	p[n].id=newid;

 	var rankSpan= document.createElement("span");
 	rankSpan.innerHTML=p[n].rank;
 	rankSpan.classList.add('rank');
 	div.appendChild(rankSpan);

 	var nameSpan= document.createElement("span");
 	nameSpan.innerHTML=p[n].name;
 	nameSpan.classList.add('name');
 	div.appendChild(nameSpan);

 	var totalSpan= document.createElement("span");
 	totalSpan.innerHTML=0;
 	totalSpan.classList.add('total');
 	div.appendChild(totalSpan);

 	newCome(document.getElementById(newid));

 	return new Promise((resolve, reject) => {
    	setTimeout(() => {
      		resolve()
    	}, 300)
  	})

}
