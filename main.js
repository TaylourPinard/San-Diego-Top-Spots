$(document).ready(function(){
    $.getJSON('data.json', function(result){
        $.each(result, function(i, name, description, location){
            var name = result[i].name;
            var description = result[i].description;
            var location = result[i].location;
            $("#tableData").append(`<tr><td class="name">${name}</td><td class="description">${description}</td><td class="location"><input type="button" onclick='location.href="https://www.google.com/maps/search/?api=1&query=${location[0]},${location[1]}";' value="Open in Google Maps"></td></tr>`);
        })
    })
})