$(document).ready(function(){
    $("#hidden").hover(function(){
        $(this).css("color", "black");
    },
    function(){
        $(this).css("color", "white");
    });
    /**
    $("button").click(function() {
        alert("I'm alerting you!");
    });
    */
    var apparelData = [];
    $.ajax({
        url: 'http://10.0.0.159:3000/api/apparel/all',
        type: 'GET',
        success: function(data) {
            console.log(data);
            $.each(data, function(index, apparel) {
                var apparelItem = {
                    id: apparel.id, 
                    name: apparel.name,
                    category: apparel.category, 
                    description: apparel.description, 
                    price: apparel.price,
                    imageUrl: apparel.imageUrl};
                apparelData.push(apparelItem);
            });
            var carouselInner = $("#myCarousel .carousel-inner");
            var indicators = $("#myCarousel .carousel-indicators");
            var slides = $("#mySlides");
            for(var i = 0; i < apparelData.length; i++){
                // Make Items
                var item = apparelData[i];
                var activeClass = i == 0 ? "active" : "";
                var itemHTML = '<div class="carousel-item ' + activeClass + '">';
                itemHTML += '<img class="d-block w-100" src="' + item.imageUrl + '" alt="' + item.name + '">';
                itemHTML += '<div class=carousel-caption d-none d-md-block">';
                itemHTML += '<h5>' + item.name + '</h5>';
                itemHTML += '<p>' + item.description + '</p>';
                itemHTML += '</div>'
                itemHTML += '</div></div>';
                carouselInner.append(itemHTML);

                // Make Indicator
                var indicatorHTML = '<li data-target="#myCarousel" data-slide-to="' + i
                +'" class="' + activeClass + '"></li>';
                indicators.append(indicatorHTML);
                
                // Make Slides
                var slideHTML = '<div class="card" style="width:  18rem;">';
                slideHTML += '<img class="card-img-top" src="' + item.imageUrl + '" alt="' + item.name + '">';
                slideHTML += '<div class="card-body">';
                slideHTML +='<h5 class="card-title">' + item.name + '</h5>';
                slideHTML += '<h6 class="card-subtitle">' + item.description + '</h6>';
                slideHTML += '<p class="card-text"><strong>Price: $' + item.price + '</p>';
                slideHTML += '<a href="#" class="btn btn-primary">Add to Cart</a>';
                slideHTML += '</div></div>';
                slides.append(slideHTML);

            }
            
        },
        error: function(error) {
            console.log(error);
        }
    });



});