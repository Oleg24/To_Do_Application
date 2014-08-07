var debugX;
window.onload = function () {
	console.log("window loaded!");
	

	var taskObj = {
		newTask : document.getElementById("newTaskInput"),
		submitBtn : document.getElementById('submitBtn'),
		taskList : document.getElementById('new-tasks')
		};

	taskObj.addNewTask = function () {
		var taskSpan = document.createElement("span");
		var inputSpan = document.createElement("span");
		var controlSpan = document.createElement("span");

		var taskDiv = document.createElement("div");
		var completeBtn = document.createElement("button");
		completeBtn.innerHTML = "complete";
		var editBtn = document.createElement("button");
		editBtn.innerHTML = "edit";
		var completeList = document.getElementById('completedTaskList');
		var completeDiv = document.createElement("div");
		var completedTask = document.createElement("span");
	
		completeBtn.onclick = function (event) {
			taskObj.taskList.removeChild(taskDiv);
			taskDiv.removeChild(controlSpan);
			completeList.appendChild(taskDiv);
		}; 

		editBtn.onclick = function (){

			var editInput = document.createElement("INPUT");
			taskSpan.style.display='none';
			editInput.value = taskSpan.innerHTML;
			inputSpan.appendChild(editInput);
			completeBtn.style.display="none";
			editBtn.style.display='none';
			
			var updateBtn = document.createElement("button");
			updateBtn.innerHTML ="update";
			controlSpan.appendChild(updateBtn);

			updateBtn.onclick = function(){
				taskSpan.innerHTML = editInput.value;
				console.log(taskSpan.innerHTML);
				taskSpan.style.display='inline';
				completeBtn.style.display="inline";
				editBtn.style.display='inline';
				editInput.style.display='none';
				updateBtn.style.display='none';

			};

		}
		// Populate new task fields
		taskSpan.innerHTML = taskObj.newTask.value;
		controlSpan.appendChild(completeBtn);
		controlSpan.appendChild(editBtn);
		// Append new task to dom
		taskDiv.appendChild(taskSpan);
		taskDiv.appendChild(inputSpan);
		taskDiv.appendChild(controlSpan);
		taskObj.taskList.appendChild(taskDiv);
		// reset value
		taskObj.newTask.value='';


		// console.log(task);
	};

	


	taskObj.newTask.onkeypress=function(x){
		if(x.which===13){
			taskObj.addNewTask();
			}
		};
	taskObj.submitBtn.onclick=taskObj.addNewTask;

	

};

	






