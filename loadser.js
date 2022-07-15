$(document).ready(function(){
		$("#contactme").on('submit',(function(e) {
		$("#loadloss").html("<img class='img-circle' src='img/loaded.gif'/> Processing wait....");
		$("#loadloss").show("slow");
		e.preventDefault();
		$.ajax({
        	url: "processRequest",
			type: "POST",
			data:  new FormData(this),
			contentType: false,
    	    cache: false,
			processData:false,
			success: function(data){
			$("#loadloss").html(data);
			
		    },
		  	error: function(){
				alert("Failed to send query!");
			} 	        
	   });
	})
	);
	
	
		$("#coded").on('submit',(function(e) {
		$("#loadloss").html("<img class='img-circle' src='img/loaded.gif'/> Processing wait....");
		$("#loadloss").show("slow");
		e.preventDefault();
		$.ajax({
        	url: "gotoupload",
			type: "POST",
			data:  new FormData(this),
			contentType: false,
    	    cache: false,
			processData:false,
			success: function(data){
			$("#loadloss").html(data);
			$("#code").val("");
		    },
		  	error: function(){
				alert("Failed to send query!");
			} 	        
	   });
	})
	);
	
	$("#uploadphoto").on('submit',(function(e) {
		$("#loadloss").html("<img class='img-circle' src='img/loaded.gif'/> Processing wait....");
		$("#loadloss").show("slow");
		e.preventDefault();
		$.ajax({
        	url: "processphotoupload",
			type: "POST",
			data:  new FormData(this),
			contentType: false,
    	    cache: false,
			processData:false,
			success: function(data){
			$("#loadloss").html(data);
			$("#photop").val("");
		    },
		  	error: function(){
				alert("Failed to send query!");
			} 	        
	   });
	})
	);
	
	$("#loginprocess").on('submit',(function(e) {
		$("#loadloss").html("<img class='img-circle' src='img/loaded.gif'/> Processing wait....");
		$("#loadloss").show("slow");
		e.preventDefault();
		$.ajax({
        	url: "loginprocess",
			type: "POST",
			data:  new FormData(this),
			contentType: false,
    	    cache: false,
			processData:false,
			success: function(data){
			$("#loadloss").html(data);
			$("#userinfo").val("");
			$("#passkey").val("");
		    },
		  	error: function(){
				alert("Failed to send query!");
			} 	        
	   });
	}));
		});