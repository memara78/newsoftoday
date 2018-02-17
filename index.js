$(document).ready(function(){
  /*$('button').addClass("animated bounce");
  $('.btn-success').addClass("shake");
  //$('#target6').addClass("fadeOut");
  $('#target1').css({color: 'white', backgroundColor: 'blue'});
  $('#target2').prop('disabled', true);
  $('#PH').html('Learning <strong>jQurey</strong> startup 2');
  //$("#target1").remove();*/
  //$('.target:odd').addClass ('animated swing');
  //$('.target:even').addClass ('animated bounce');
  
  /*
  $('.question').on('click', function(){
    $('.answer').html('Thank you for asking');
  });
  */

  /*
  var url = 'http://hn.algolia.com/api/v1/search?query=emara';
  $.getJSON(url, function(data){
    var allNews = data.hits;
    var eachNews = '';
    allNews.map(function(item, index, array){
      eachNews += "<div>";
      eachNews += item.title;
      eachNews += "</div>";
      $('.question').on('click', function(){
        $('.answer').html(eachNews);
      }); 
    })
    
    console.log(data);
    */

   



  /*
  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(function(position){
      $('.answer').html ("lat: " + position.coords.latitude + "<br>long: " + position.coords.longitude);
    })
  }
  */
 
  var url = 'http://hn.algolia.com/api/v1/search?query=javascript';
  $.getJSON(url, function(data){
    var currQuote = '';
    var quotes = data.hits;


    $('.read').on('click', function(){
      currQuote = quotes[Math.floor(Math.random() * quotes.length)];
      //$('.quoteBody').html(currQuote.title);
      $('.quoteBody').hide();
      $('.qLink').html(currQuote.title);
      $('.qLink').attr('href', currQuote.url).attr('target','_blank');
      $('.qouteAuthor').html(currQuote.author);
      $('.tweet')
        .attr('href', 'https://twitter.com/intent/tweet?text=' + currQuote.title + ' - ' + currQuote.author)
        .attr('target', '_blank');

      //console.log(currQuote);
    }); 
    
    

    //console.log(quotes[0].title);
  });

});
