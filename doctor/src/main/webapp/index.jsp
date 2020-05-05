<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/styles.css">
</head>
<body>

<div class="container">
<div class="row">
	<div class="col-sm-4">
    
     
    </div>

	<div class="col-sm-4">
	<form id="formDoctor" name="formDoctor" method="post" action="Doctor.jsp" >
		
		<br>
	
		<h3 class="text-center">Doctor Page</h3>
		
		<br>
		<input type="text" id="DID" name="DID" class="form-control form-control-sm" placeholder="DID" ><br>
		<input type="text" id="lastName" name="lastName" class="form-control form-control-sm" placeholder="Last name" ><br>
		<input type="text" id="firstName" name="firstName" class="form-control form-control-sm" placeholder="First name"><br>
		<input type="text" id="email" name="email" class="form-control form-control-sm" placeholder="E mail"><br>
		<input type="email" id="role" name="role" class="form-control form-control-sm" placeholder= "Role" value="Doctor"><br>
		<input type="text" id="docID" name="docID" class="form-control form-control-sm" placeholder="Doctor register ID"><br>
		<input type="text" id="password" name="password" class="form-control form-control-sm" placeholder="Password"><br>
		<input type="text" id="specialization" name="specialization" class="form-control form-control-sm" placeholder="Specialization"><br>
		<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-info my-4 btn-block">
		
			
		
	</form>
	</div>
	

	<div class="container text-center">
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
	</div>

	


			


   </div>
	<ul style="list-style: none;" id="apps" class="row" ></ul>
</div>

<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/main.js"></script>

</body>
</html>