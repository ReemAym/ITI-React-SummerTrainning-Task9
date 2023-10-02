
 
        function playv() {

            document.getElementById("v").play();
        }

        function pausev() {
            document.getElementById("v").pause();
        }

        function mutev() {
            if (document.getElementById("v").muted) {
                document.getElementById("v").muted = false;
                document.getElementById("btn-m").value = "mute";

            }
            else {
                document.getElementById("v").muted = true;
                document.getElementById("btn-m").value = "unmute";
            }
        }

        function speed() {
            var s = document.getElementById("spd-R").value;
            document.getElementById("v").playbackRate = s;
        }

        function back10() {
            document.getElementById("v").currentTime -= 10;
        }
        function add10() {
            document.getElementById("v").currentTime += 10;
        }
        function vol() {
            var voice = document.getElementById("vol").value;
            document.getElementById("v").volume = voice;

        }