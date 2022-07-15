$(document).ready(function(e){

	function processmediaData(formid,resultid,processingScript,Switcher){
			$("#"+formid).on('submit',(function(e) {

			$("#postButton").attr("disabled","disabled");
			$("#"+resultid).show("slow");
			$("#"+resultid).html("<img class='img-circle' src='../img/loaded.gif'/> Processing wait....");
			e.preventDefault();

			// uploading progressbar started

			$("#progress-div").show();
			$(this).ajaxSubmit({
				beforeSubmit: function() {
				  $("#progress-bar").width('0%');
				},
				uploadProgress: function (event, position, total, percentComplete){
					$("#progress-bar").width(percentComplete + '%');
					$("#progress-bar").html('<div id="progress-status">' + percentComplete +' %</div>');
				},
				success:function (){
					//$("#progress-div").hide("slow");
				},
				resetForm: true
			});

			// uploading progressbar ended
			$.ajax({
	        	url: processingScript+"?switcher="+Switcher,
				type: "POST",
				data:  new FormData(this),
				contentType: false,
	    	    cache: false,
				processData:false,
				success: function(data){
				$("#progress-div").hide("slow");
				$("#"+resultid).html(data);
				$("#postButton").removeAttr("disabled");
				},
			  	error: function(){ alert("Error: Failed to process data");}
		   });
		}));
	}

		function processTextData(formid,resultid,processingScript){
			$("#"+formid).on('submit',(function(e) {

			$("#"+resultid).show("slow");
			$("#"+resultid).html("<img class='img-circle' src='../img/loaded.gif'/> Processing wait....");
			e.preventDefault();
			$.ajax({
	        	url: processingScript,
				type: "POST",
				data:  new FormData(this),
				contentType: false,
	    	    cache: false,
				processData:false,
				success: function(data){
				$("#"+resultid).html(data);
				ControlPostingPanel("textarea_container","get_textarea_post");
				$("input").val("");$("textarea").val("");
				$("#frc").val("");$("#videofile").val("");$("#audiofile").val("");
				$("#photofile").val("");$("#docfile").val("");$("#yvideo").val("");
				$("#vidmeo").val("");$("#sound").val("");$("#option_a").val("");
				$("#option_b").val("");$("#option_c").val("");$("#option_d").val("");
				
				},
			  	error: function(){ alert("Error: Failed to make post");}
		   });
		}));
	}
		function processAjaxForm(formid,resultid,processingScript){
			$("#"+formid).on('submit',(function(e) {
			$("#"+resultid).show("slow");
			$("#"+resultid).html("<img class='img-circle' src='../img/loaded.gif'/> Processing wait....");
			e.preventDefault();
			$.ajax({
	        	url: processingScript,
				type: "POST",
				data:  new FormData(this),
				contentType: false,
	    	    cache: false,
				processData:false,
				success: function(data){
				$("input").val("");
				$("textarea").val("");
				$("#"+resultid).html(data);
				},
				
			  	error: function(){ alert("Error: Failed to process form");}
		   });
		}));
	}

			function FetchPostContent(resultid,processingScript){
			$("#"+resultid).show("slow");
			$("#"+resultid).fadeIn(400).html("<img class='img-circle' src='../img/ajax-loader.gif'/> wait....");
					 var dataString = "";
					 $.ajax({
						   type: "POST",
						   url: processingScript,
						   data: dataString,
						   cache: false,
						   success: function(result){
							$("#"+resultid).html(result);
						   }
					  });
				}
				


			function ControlPostingPanel(resultid,processingScript){
			$("#"+resultid).show("slow");
			$("#"+resultid).fadeIn(400).html("<img class='img-circle' src='../img/ajax-loader.gif'/> Processing wait....");
					 var dataString = "";
					 $.ajax({
						   type: "POST",
						   url: processingScript,
						   data: dataString,
						   cache: false,
						   success: function(result){
							$("#"+resultid).html(result);
							$("#frc").attr("data-emojiable","true");

						   }
					  });
		}

		function openContentYoutube(switcher){
			if(switcher == "1"){
				$(".youbuddy").click(function(){
				$("#youtubeurl").show("slow");
				$("#yvideo").attr("required","required");
			});
			}else if(switcher == "0"){
				$(".closeYoutube").click(function(){
				$("#youtubeurl").hide("slow");
				$("#yvideo").removeAttr("required");
				$("#yvideo").val("");
				});
			}else{

			}

		}
		function openContentVimeo(switcher){
			if(switcher == "1"){
					$(".vbuddy").click(function(){
					$("#vidmeourl").show("slow");
					$("#vidmeo").attr("required","required");
					});
				}else if(switcher == "0"){
						$(".closeVimeo").click(function(){
						$("#vidmeourl").hide("slow");
						$("#vidmeo").removeAttr("required");
						$("#vidmeo").val("");
						});
					}else{

			}

		}
		function openContentSound(switcher){
			if(switcher == "1"){
					$(".sbuddy").click(function(){
					$("#scurl").show("slow");
					$("#sound").attr("required","required");
					});
				}else if(switcher == "0"){
						$(".closeSound").click(function(){
						$("#scurl").hide("slow");
						$("#sound").removeAttr("required");
						$("#sound").val("");
						});
					}else{

			}

		}

			function openContentPoll(switcher){
			if(switcher == "1"){
					$(".pbuddy").click(function(){
					$("#createpoll").show("slow");
					$("#option_a").attr("required","required");
					$("#option_b").attr("required","required");
					});
				}else if(switcher == "0"){
						$(".closePbuddy").click(function(){
						$("#createpoll").hide("slow");
						$("#option_a").val("");
						$("#option_b").val("");
						$("#option_c").val("");
						$("#option_d").val("");
						$("#option_a").removeAttr("required");
						$("#option_b").removeAttr("required");
						});
					}else{

			}

		}

		// Fetching Created Group
		FetchPostContent("fetch_group","fetchgrouped");
		
		// CReate new group 
		processAjaxForm("group_create","formGroup","processGroup");
		
		// Fetching Withdrawal History
		FetchPostContent("appendWHistory","initial_withdrawal");
		// Bank withdrawals 
		processAjaxForm("withdrawal_form","withdrawal_now","processWithdrawals");
		// Fetching Transfer History
		FetchPostContent("appendTransferHistory","initial_tranferdata");
		// Tranfer to a Friend 
		processAjaxForm("make_instant_transfer","process_transfer","processTranfertoFriend");
		// Add Bank Account 
		processAjaxForm("add_bank_account","add_account_now","addbankacount");
		// Process Wallet funding
		processAjaxForm("fund_wallet","formWallet","processWallet");
		// Fetching Payment History
		FetchPostContent("appendPaymentHistory","FetchingPaymentHistory");
		// Fetching Bank account
		FetchPostContent("getbankaccount","get_bankaccount");
		
		ControlPostingPanel("textarea_container","get_textarea_post");
		
		openContentYoutube("0");
		
		openContentVimeo("0");
		
		openContentSound("0");
		
		openContentYoutube("1");
		
		openContentVimeo("1");
		
		openContentSound("1");
		
		openContentPoll("1");
		
		openContentPoll("0");
		
		// auto upload status videos 
		processmediaData("videopostonly","loadloss","processVideoFiles","vi");
		// auto upload status audio 
		processmediaData("audiopostonly","loadloss","processVideoFiles","au"); 
		// auto upload status images 
		processmediaData("imagepostonly","loadloss","processVideoFiles","im"); 
		// auto upload status documents 
		processmediaData("docpostonly","loadloss","processVideoFiles","dc"); 
		// process all user status post
		processTextData("createpost","loadloss","processPostNow"); 
		 // load your trends
		FetchPostContent("Showpostedtrend","getPostedTrend");
		// show who to follow
		FetchPostContent("showwhotofollow","peopleyoumayknow"); 
		// load General trends
		FetchPostContent("ShowGeneralPostedtrend","general_trends_initial"); 
		
		// Getting Naira Balance 
		//FetchPostContent("nairabossonly","get_naira_balance");
		// Getting Dollar Balance 
		//FetchPostContent("dollarbossonly","get_dollar_balance");
		
		// Pagination scripts

		function personalTrendLoader(resultid,pagingid,loaderid,scriptProcess){
			  $('#'+loaderid).on('inview', function(event, isInView) {
                 if (isInView) {
                     var nextPage = parseInt($('#'+pagingid).val())+1;
                     $.ajax({
                         type: 'POST',
                         url: scriptProcess,
                         data: { pageno: nextPage },
                         success: function(data){
                             if(data != ''){
                                 $('#'+resultid).append(data);
                                 $('#'+pagingid).val(nextPage);
                             } else {
                                 $("#"+loaderid).hide();
                             }
                         }
                     });
                 }
             });
		}
		// Personal Trends
		personalTrendLoader("Showpostedtrend","pageno","loader","paginate_posted");
		// General Trends
		personalTrendLoader("ShowGeneralPostedtrend","pagenogeneraltrend","loaderforgeneraltrend","paginate_general_trend");
		// Fetch wallet details
		personalTrendLoader("appendPaymentHistory","pagenoHistory","loaderph","getwalletdata");
		// Fetch Transfer details
		personalTrendLoader("appendTransferHistory","pagenoTransfer","loaderTransfer","getTranferData");
		// Fetch Withdrawal details
		personalTrendLoader("appendWHistory","pagenoW","loaderW","getWithdrawalData");
});

	function mediapusher(content){
		$("#"+content).submit();
	}
