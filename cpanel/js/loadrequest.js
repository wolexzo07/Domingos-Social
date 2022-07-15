function fetchrequestnow(page) {
	$('#hidecfluid').hide("slow");
	$('#contentgo').html("<center><img src='loadingimg/loader1.gif' class='img-responsive'/></center>");
	$.ajax({
		type	: 'GET',
		url		: page,
		success	: function(data) {
			try {
				$('#contentgo').html(data);
			} catch (err) {
				alert(err);
			}
		}
	});
}

function relaymessage(page) {
	$('#showpageless').html("<center><img src='loadingimg/loader1.gif' class='img-responsive'/></center>");
	$.ajax({
		type	: 'GET',
		url		: page,
		success	: function(data) {
			try {
				$('#showpageless').html(data);
			} catch (err) {
				alert(err);
			}
		}
	});
}