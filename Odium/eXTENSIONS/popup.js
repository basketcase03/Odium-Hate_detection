$(function(){

    chrome.storage.sync.get(['Svalue'],function(sentiment_obj){
        var newvalue=sentiment_obj.Svalue

          

            $.ajax({ 
                type: "POST",
                url:"http://127.0.0.1:8000/sentiment/",
                dataType:"json",
                data:{
                    number:newvalue
                },
                crossDomain:true,
                async:true,
                success:function(json)
                {
                    $('#Svalue').text(json.number)
                }
            })       

          
           
            
            
            $('#Sentence').val(newvalue);
    })

    $('#GetSentiment').click(function(){
        chrome.storage.sync.get('Svalue',function(sentiment_obj){
            var newvalue=$('#Svalue').val()
            
            var senten=$('#Sentence').val();
            if(senten){
                newvalue+=senten;
            }

          

            $.ajax({ 
                type: "POST",
                url:"http://127.0.0.1:8000/sentiment/",
                dataType:"json",
                data:{
                    number:newvalue
                },
                crossDomain:true,
                async:true,
                success:function(json)
                {
                    $('#Svalue').text(json.number)
                }
            })       

          
           
            
            
            $('#Sentence').val(newvalue);
        });
    });
});