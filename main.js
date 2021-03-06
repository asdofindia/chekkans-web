var unicoderter = require('unicode-converter');

document.querySelector('#mapselect').addEventListener('change', function(e){
    var mapUrl = $('#mapselect').val();
    mapUrl = './maps/' + mapUrl + '.map';
    $.ajax({
        url: mapUrl,
        success: function(data) {
            $('#map').val(data);
            // console.log('response data' + data);
        },
        dataType: 'text'
    });
});

document.querySelector('#convert').addEventListener('click', function(e){
    document.querySelector('#out').value = "Converting...";
    var map = document.querySelector('#map').value;
    var unicoder = new unicoderter({
        map: map,
        postBase: ["െ", "േ", "ൈ", "ൊ", "ോ", "്ര"]
    });
    var output = '';
    unicoder.on('data', function(chunk) {
        output = output + chunk;
    });
    unicoder.on('end', function(){
        document.querySelector('#out').value = output;
        output = '';
    });
    var input = document.querySelector("#in").value;
    unicoder.write(input);
    unicoder.end();
});
