$("#next").click(function(){

        var nextPage = parseInt($('#pageno').val())+1;
        $.ajax({
            type: 'POST',
            url: 'pagination.php',
            data: { pageno: nextPage },
            success: function(data){
                if(data != ''){                          
                    $('#response').append(data);
                    $('#pageno').val(nextPage);
                } else {                                 
                    $("#loader").hide();
                }
            }
        });

    });

    $("#prev").click(function(){

        var nextPage = parseInt($('#pageno').val())-1;
        $.ajax({
            type: 'POST',
            url: 'pagination.php',
            data: { pageno: nextPage },
            success: function(data){
                if(data != ''){                          
                    $('#response').append(data);
                    $('#pageno').val(nextPage);
                } else {                                 
                    $("#loader").hide();
                }
            }
        });
    
    });    
