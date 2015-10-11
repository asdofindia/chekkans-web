var unicoderter = require('unicode-converter');

document.querySelector('#convert').addEventListener('click', function(e){
    document.querySelector('#out').value = "Converting...";
    var unicoder = new unicoderter();
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
