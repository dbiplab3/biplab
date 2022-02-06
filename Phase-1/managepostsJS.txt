let id="no";
//localStorage.clear();
selectData();
function manageData(){
	document.getElementById('msg').innerHTML="";
	let name=document.getElementById('title').value;
	let title=document.getElementById('Author').value;
	if(name=='' || title == ''){
		document.getElementById('msg').innerHTML='Please enter your details';
	}else{
		console.log(id);
		if(id=='no'){
			let arr=getCrudData();
			let arr2=getItemsData();
			if(arr==null || arr2==null){
				let data=[name];
                let data2=[title];
				setCrudData(data);
				setItemsData(data2);
			}else{
				arr.push(name);
				arr2.push(title);
				setCrudData(arr);
				setItemsData(arr2);
			}
			document.getElementById('msg').innerHTML='Data added';
		}else{
			let arr=getCrudData();
			let arr2=getItemsData();
			arr[id]=name;
			arr2[id] = title;
			setCrudData(arr);
			setItemsData(arr2);
			document.getElementById('msg').innerHTML='Data updated';
		}
		document.getElementById('title').value='';
        document.getElementById('Author').value='';
		selectData();
	}
}

function selectData(){
	let arr=getCrudData();
	let arr2=getItemsData();
	if(arr!=null && arr2!==null){
		let html='';
		let sno=1;
		for(let k in arr,arr2){
			html=html+`<tr><td>${sno}</td><td>${arr[k]}</td><td>${arr2[k]}</td><td><a href="javascript:void(0)" class="edit" onclick="editData(${k})">Edit</a>&nbsp;<a href="javascript:void(0)" class="delete" onclick="deleteData(${k})">Delete</a></td></tr>`;
			sno++;
		}
		document.getElementById('root').innerHTML=html;
		
	}
}

function editData(rid){
    window.location.href = "create.html";
	id=rid;
	let arr=getCrudData();
	let arr2=getItemsData();
	document.getElementById('title').value=arr[rid];
	document.getElementById('Author').value=arr2[rid];
    
}

function deleteData(rid){
	let arr=getCrudData();
	let arr2=getItemsData();
	arr.splice(rid,1);
	arr2.splice(rid,1);
	setCrudData(arr);
	setItemsData(arr2);
	selectData();
}

function getCrudData(){
	let arr=JSON.parse(localStorage.getItem('crud'));
	
	return arr;
}

function getItemsData(){
	let arr2=JSON.parse(localStorage.getItem('items'));
	
	return arr2;
}

function setCrudData(arr){
	localStorage.setItem('crud',JSON.stringify(arr));
	
}

function setItemsData(arr2){
	localStorage.setItem('items',JSON.stringify(arr2));
	
}