            var names       =   "",
                portlist    =   "";

            var buttons     =   document.getElementsByClassName('button');
            var ports       =   document.getElementsByClassName('port');
            var old         =   document.getElementsByClassName('loaded');
            

            

            var peeps = [
                {name: "Mike",          ip: "192.168.20.233"},
                {name: "Gavitron",      ip: "192.168.20.238",   css:"style='color:#ff00ff;'"},
                {name: "Lisa",          ip: "192.168.20.227"},
                {name: "Sean-tastic",   ip: "192.168.20.143"},
                {name: "Adrian",        ip: "192.168.20.42",    css:"id=loaded"},
                {name: "David",         ip: "?"},
                {name: "Old School",    ip: "grunt.dev",        css:"style='color:blue;'"}
            ];
            var ports =[
                80, 8000, 8001
            ];

            for (var i = 0; i < peeps.length; i++) {
                var thisOne = ("<li><button class='button' id='"+i+"'");
                if (peeps[i].css) thisOne += peeps[i].css;
                thisOne += (">"+ peeps[i].name +" @ "+peeps[i].ip+" </button></li>");
                names += thisOne;
            }
            for (var i = 0; i < ports.length; i++) {
                var builder = ("<li><button class='port' id='"+ports[i]+"'>On Port: "+ports[i]+"</button></li>");
                portlist += builder;
            }

            

            document.addEventListener('DOMContentLoaded', function() {

                var buttonNames = document.getElementById('names'),
                    portNumbers = document.getElementById('ipfreely');

                buttonNames.innerHTML=names;
                portNumbers.innerHTML=portlist;

                for(var z =0; z < buttons.length; z++){
                    var elem = buttons[z];   
                    elem.onclick = function(){
                        var dest        =   peeps[this.id];
                        var goButton    =   document.getElementById('destination');
                        var ipButton    =   document.getElementById('ip');


                        while (old.length != 0) {
                            old[0].classList.remove('loaded');
                        }
                        this.classList.add('loaded');

                        goButton.innerHTML=dest.name;

                        if (dest.name === "David") {
                            goButton.innerHTML = "... wait is there no free lunch at Comcast today?";
                        }
                    }
                }

            });