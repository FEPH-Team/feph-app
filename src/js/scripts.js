$(document).ready(function(){


	$("button.submit_vote").click(function(){
		if($('.senatorial_candidates :checkbox:checked').length == 0){
   			$("#senator_candidate_warning").show();
   		}
   		else{
   			$("#senator_candidate_warning").hide();	
   		}
	});

	
});