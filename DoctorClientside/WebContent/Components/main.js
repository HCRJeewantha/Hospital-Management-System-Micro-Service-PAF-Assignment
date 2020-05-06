$(document).ready(function()
{
	 $("#alertSuccess").hide();
	 $("#alertError").hide();
}); 


$(function (){
	var $apps = $('#apps');
	var $DID = $('#DID');
	var $lastName = $('#lastName');
	var $firstName = $('#firstName');
	var $email = $('#email');
	var $role = $('#role');
	var $docID = $('#docID');
	var $password = $('#password');
	var $specialization = $('#specialization');
	

	$.ajax({
		type: 'GET',
		url: 'http://localhost:8080/doctor/webapi/myresource/',
		success: function(apps){
			//console.log('success',data);
			$.each(apps, function(i, app){
				$apps.append('<li><div class="card shadow-lg p-3 mb-5 bg-white rounded bg-light m-2\" style=\"width: 20rem;float: left;">'
							+'DID:<span class="noedit DID">' + app.DID +'</span><input class="edit DID"/>'+'<br>'
							+'lastName:<span class="noedit lastName">' + app.lastName +'</span><input class="edit lastName"/>'+'<br>'
							+'firstName:<span class="noedit firstName">'+ app.firstName +'</span><input class="edit firstName"/> '+'<br>'
							+'email:<span class="noedit email">'+ app.email +'</span><input class="edit email"/> '+'<br>'
							+'role:<span class="noedit role">'+ app.role +'</span><input class="edit role"/>'+'<br>'
							+'docID:<span class="noedit docID">'+ app.docID +'</span><input class="edit docID"/> '+'<br>'
							+'password:<span class="noedit password">'+ app.password +'</span><input class="edit password"/>'+' <br>'
							+'specialization:<span class="noedit specialization">'+ app.specialization +'</span><input class="edit specialization"/>'+'<br>'
							+'<input type="button" id="'+ app.DID +'" value="Remove" class="btn btn-outline-danger remove">'+'<br>'
							+'<input type="button" " value="Edit" class="editapp btn btn-outline-primary noedit">'+'<br>'
							+'<input type="button" " value="Save" class="saveedit btn btn-outline-success edit">'+'<br>'
							+'<input type="button" " value="Cancel" class="canceledit btn btn-outline-danger edit"></li>');

			});
		},
		error: function() {
			alert('Adding doctor loading error...');
		}
	});
	
	
	$('#btnSave').on('click', function(){
		
		//Show and Clear Messages
		$("#alertSuccess").text("");
		$("#alertSuccess").hide();
		$("#alertError").text("");
		$("#alertError").hide();
		
		//Validation Function
		var status = validateDoctorForm(); 
		

		
		//Check any Error
		if (status != true)
		 {
			 $("#alertError").text(status);
			 $("#alertError").show();
			 return;
		 } 
		
		

		
		var app = {
				DID: $DID.val(),
				lastName: $lastName.val(),
				firstName: $firstName.val(),
				email: $email.val(),
				role: $role.val(),
				docID: $docID.val(),
				password: $password.val(),
				specialization: $specialization.val(),
		};
		

		
		$.ajax({
			headers: { 
		        'Accept': 'application/json',
		        'Content-Type': 'application/json' 
		    },
			type: 'POST',
			url: 'http://localhost:8080/doctor/webapi/myresource/doctor',
			data: JSON.stringify(app),
			dataType: 'json',
			success: function(newDoctor){
				console.log("Inserted");
				$apps.append('<li><div class="card shadow-lg p-3 mb-5 bg-white rounded bg-light m-2\" style=\"width: 20rem;float: left;">'
						+'DID:<span class="noedit DID">' + newDoctor.DID +'</span><input class="edit DID"/>'+'<br>'
						+'lastName:<span class="noedit lastName">' + newDoctor.lastName +'</span><input class="edit lastName"/>'+'<br>'
						+'firstName:<span class="noedit firstName">'+ newDoctor.firstName +'</span><input class="edit firstName"/> '+'<br>'
						+'email:<span class="noedit email">'+ newDoctor.email +'</span><input class="edit email"/> '+'<br>'
						+'role:<span class="noedit role">'+ newDoctor.role +'</span><input class="edit role"/>'+'<br>'
						+'docID:<span class="noedit docID">'+ newDoctor.docID +'</span><input class="edit docID"/> '+'<br>'
						+'password:<span class="noedit password">'+ newDoctor.password +'</span><input class="edit password"/>'+' <br>'
						+'specialization:<span class="noedit specialization">'+ newDoctor.specialization +'</span><input class="edit specialization"/>'+'<br>'
						+'<input type="button" id="'+ newDoctor.DID +'" value="Remove" class="btn btn-outline-danger remove">'+'<br>'
						+'<input type="button" " value="Edit" class="editapp btn btn-outline-primary noedit">'+'<br>'
						+'<input type="button" " value="Save" class="saveedit btn btn-outline-success edit">'+'<br>'
						+'<input type="button" " value="Cancel" class="canceledit btn btn-outline-danger edit"></li>');
				
				//Show Success Message
				$("#alertSuccess").text("Doctor details saved");
				$("#alertSuccess").show();

				$("#formDoctor")[0].reset(); 
				
			},
			
			error: function() {
				alert('Doctor Saving Error');
			}
		});
		
		function validateDoctorForm()
		{
			if ($DID.val().trim() == "")
			{
				return "Please Insert DID";
			}
			if ($lastName.val().trim() == "")
			{
				return "Please Insert Last Name";
			}
			if ($firstName.val().trim() == "")
			{
				return "Please Insert First Name";
			}
			
			if ($email.val().trim() == "")
			{
				return "Please Insert Email";
			}
			
			if ($role.val().trim() == "")
			{
				return "Please Insert Role";
			}
			if ($docID.val().trim() == "")
			{
				return "Please Insert Doc ID";
			}
			if ($password.val().trim() == "")
			{
				return "Please Insert Password";
			}
			
			if ($specialization.val().trim() == "")
			{
				return "Please Insert Specialization";
			}
			
			return true;
		}
		

		
	});
	
	
	$apps.delegate('.remove','click',function(){
		var $li=$(this).closest('li');
		var self = this;
		$.ajax({
			type:'DELETE',
			url:'http://localhost:8080/doctor/webapi/myresource/doctor/'+$(this).attr('id'),
			success: function(){
				console.log("Deleted");
				$(self);
				$li.fadeOut(300,function(){
					$(this).remove();
					
					$("#alertSuccess").text("Doctor Delete Successfully");
					$("#alertSuccess").show(); 
					
				})
				
			},
		
			error: function() {
				alert('Doctor Delete Error');
			}
		});
	});
	
	
	$apps.delegate('.editapp','click',function(){
		
		var $li=$(this).closest('li');
		
		$li.find('input.DID').val($li.find('span.DID').html());
		$li.find('input.lastName').val($li.find('span.lastName').html());
		$li.find('input.firstName').val($li.find('span.firstName').html());
		$li.find('input.email').val($li.find('span.email').html());
		$li.find('input.role').val($li.find('span.role').html());
		$li.find('input.docID').val($li.find('span.docID').html());
		$li.find('input.password').val($li.find('span.password').html());
		$li.find('input.specialization').val($li.find('span.specialization').html());
		
		$li.addClass('edit');
	});
	
	$apps.delegate('.canceledit','click',function(){
		$(this).closest('li').removeClass('edit');
		
	});
	
	$apps.delegate('.saveedit','click',function(){
		var $li=$(this).closest('li');
		var app={

				DID: $li.find('input.DID').val(),
				lastName: $li.find('input.lastName').val(),
				firstName: $li.find('input.firstName').val(),
				email: $li.find('input.email').val(),
				role: $li.find('input.role').val(),
				docID: $li.find('input.docID').val(),
				password: $li.find('input.password').val(),
				specialization: $li.find('input.specialization').val()
				
		};
		
		$.ajax({
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
					
					
			},
			type: 'PUT',
			url: 'http://localhost:8080/doctor/webapi/myresource/doctor',
			data: JSON.stringify(app),
			dataType: 'json',
			
			success: function(newDoctor){

				$li.find('span.DID').html(app.DID);
				$li.find('span.lastName').html(app.lastName);
				$li.find('span.firstName').html(app.firstName);
				$li.find('span.email').html(app.email);
				$li.find('span.role').html(app.role);
				$li.find('span.docID').html(app.docID);
				$li.find('span.password').html(app.password);
				$li.find('span.specialization').html(app.specialization);
				$li.removeClass('edit');
				},
		
				error: function(){
				alert('Doctor Update Error');
			}
			
		});
	});
	
	
	
	
	
	
});