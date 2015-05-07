

var peeps = [
                {name: "Mike", ip: "192.168.20.233"},
                {name: "Gavitron", ip: "192.168.20.238", css:"style = 'color:pink;'"},
                {name: "Lisa", ip: "192.168.20.227"},
                {name: "Sean-tastic", ip: "192.168.20.143"},
                {name: "Adrian", ip: "192.168.20.42"},
                {name: "David", ip: "?"},
                {name: "Old School", ip: "grunt.dev", css:"style = 'color:blue;'"}
            ];
            var names="";

            for (var i = 0; i < peeps.length; i++) {
                var thisOne = ("<div class='button' id='"+peeps[i].name+"'");
                if (peeps[i].css) thisOne += peeps[i].css;
                thisOne += (">"+ peeps[i].name +" @ "+peeps[i].ip+" </div>");
                names += thisOne;
            }

            document.addEventListener("DOMContentLoaded", function() {
                var d = document.getElementById('names');
                d.innerHTML=names;
            });


var ports =[
    80, 8000, 8001
];

for (var i = 0; i < ports.length; i++) {
    ports[i]
}