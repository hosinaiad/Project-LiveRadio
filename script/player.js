// Lesson(84) v(85) Explain:  How to create web App for Live Radio Broadcast:
// إنشاء تطبيق ويب ل بث مباشر لراديو || جزء 1
// ..............................................................................
// Target: create project, how to use element you learn.
// ..............................................................................
//  Part (1):
// Ex (1):
// ............. succeeded ..............

// Lesson(85) v (86) Explain:  How to create web App for Live Radio Broadcast:
// إنشاء تطبيق ويب ل بث مباشر لراديو || جزء 2
// ..............................................................................
// Target: create project, how to use element you learn.
// ..............................................................................
//  Part (2):
// Ex (2):

// Lesson(86) v(87) Explain:  How to create web App for Live Radio Broadcast:
// إنشاء تطبيق ويب ل بث مباشر لراديو || جزء 3
// ..............................................................................
// Target: create project, how to use element you learn.
// ..............................................................................
//  Part (3):
// Ex (3):
//  We work on this lesson within the same project, inside constructor.
//Note: To search about Live Radio Broadcast,via google search we write
// "بث مباشر للراديو الجزائر".
// From search result we choose website we need, here, choosen ""
// Then we choseesult we choose website we need, here, choosen ""
// Then we chose

// Note: Code this lisson within above code.
// .................. Succeeded ....................
//.....................................................................................

// Lesson(87) v(88) Explain:  How to create web App for Live Radio Broadcast:
// إنشاء تطبيق ويب ل بث مباشر لراديو || جزء 4
// ..............................................................................
// Target: create project, how to use element you learn.
// ..............................................................................
//  Part (4):
// Ex (44):

// Note: Code this lisson within above code.
// .................. Succeeded ....................

// Code this lesson within above code.
// .................. Succeeded ....................

class Player {
    constructor() {
        var heightMain = document.getElementById("player");
        heightMain.style.height = screen.height + "px";
        if (screen.width < 620) {
            // Instead using screen width equal 500px, Use a screen width equal 620px to be responsive with most devices, to be that we want our screen website size equal screen Mobile device size, to get responsive website.
            heightMain.style.width = screen.width + "px";
            // Now our website appears as App on Mobile devices.
        }
        var heightDiv = document.getElementById("content");
        heightDiv.style.height = screen.height + "px";
    }
}

onload = new Player();
// ............. succeeded ..............
// ..............................................................................

//  Class buttons:
class Audio_Player {
    constructor() {
        this.audio_file = document.getElementById("audio_file");
        // Create variable.
        this.title_audio = document.getElementById("title_radio");
        // Create variable.
        this.play_pause_button = document.getElementById("play_pause");
        // Create variable.
        this.isPlayed;
        // Create variable, to know do audio file run or not.
        this.play_pause_button.addEventListener("click", () => {
            this.play_pause();
            // We want to run this method when click this button, then run this code.
        });
        // this.play_pause(); Cancel this code

        // Lesson (86) v (87) ...
        this.names_radio = [];
        // Create variable.
        this.names_radio[0] = " مونت كارلو الدولية ";
        this.names_radio[1] = "اداعة طريق السلف - ليبيا";
        this.names_radio[2] = "راديو أصوات - المغرب";
        this.names_radio[3] = "راديو الرجال  أف إم - مصر";
        this.names_radio[4] = "راديو روتانا - السعودية";
        this.names_radio[5] = "اذاعة القرآن الكريم - السعودية";
        this.names_radio[6] = "اداعة صوت الخليج";
        this.names_radio[7] = "ٌRadio Olive  106.3 FM - Doha, Qatar";
        this.names_radio[8] = "سكاي نيوز عربية - الامارات العربية المتحدة";
        this.names_radio[9] = "اداعة الشارقة - الامارات العربية المتحدة";
        this.names_radio[10] = "BBC World Service";
        //  To restore data within array we define.

        this.source_audio = [];
        // Create another variable to store data resource.
        this.source_audio[0] =
            "https://montecarlodoualiya128k.ice.infomaniak.ch/mc-doualiya.mp3";
        this.source_audio[1] = "https://airtime.salafwayfm.ly/";
        this.source_audio[2] = "https://broadcast.ice.infomaniak.ch/aswat-high.mp3";
        this.source_audio[3] = "https://stream.zeno.fm/ebitxokyr7ptv";
        this.source_audio[4] = "http://curiosity.shoutca.st:6035/;";
        this.source_audio[5] = "https://n02.radiojar.com/0tpy1h0kxtzuv";
        this.source_audio[6] = "http://ruby.streamguys.com:8120/sar-qatar-2";
        this.source_audio[7] =
            "https://playerservices.streamtheworld.com/api/livestream-redirect/OLIVE1063.mp3";
        this.source_audio[8] =
            "http://radio.skynewsarabia.com/stream/radio/skynewsarabia";
        this.source_audio[9] =
            "https://l3.itworkscdn.net/smcradiolive/smcradiolive/icecast.audio";
        this.source_audio[10] =
            "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service";

        // You can add any number of channel, and put their names above within the array, here three channel enough.
        // There're Three way to get servers:
        // 1. Directly via it's link.
        // 2. From inspect to console then reload page, then play radio chanel, click warnings, maybe or not sure show the chanel, right click and click open in new tab, then reload, it's attempt to get server, if e chanel open copy its link and paste it in new tab, and reload server, if succeeded then it's ready, click the play to listen, you can attempt all servers you see.
        // 3. Right click on play button, From inspect to elements and choose  element lead you to run buttons, inside search about links servers we need, maybe appears or not appear if not the reason that website strong security,
        this.server = 0;
        // This code for move between channels.

        this.setResource();
        // To run this method.
        document.getElementById("next").addEventListener("click", () => {
            if (this.server < this.source_audio.length - 1) {
                // length tart count from (1), but start count from (0), so we add (-1).
                ++this.server;
                // To move to the next channel.
                this.isPlayed = false;
            } else {
                this.server = 0;
            }
            localStorage.setItem("SAVE-POSITION", this.server);
            this.setResource();
            // To change data audio and paragraph automatically.
        });
        document.getElementById("back").addEventListener("click", () => {
            if (this.server > 0) {
                --this.server;
                this.isPlayed = true;
            } else {
                this.server = this.source_audio.length - 1;
            }
            localStorage.setItem("SAVE-POSITION", this.server);

            this.setResource();
            // To reload data.
        });
    }

    setResource() {
        // To run this method.
        if (localStorage.getItem("SAVE-POSITION") != null) {
            this.server = localStorage.getItem("SAVE-POSITION");
            // To stabilizing channel when we close the radio.
        }
        this.audio_file.src = this.source_audio[this.server];
        this.title_audio.innerHTML = this.names_radio[this.server];
        this.play_pause();
    }

    play_pause() {
        // Create Method.
        if (this.isPlayed == false) {
            this.play_pause_button.src = "./icons/pause.ico";

            this.audio_file.play();
            // We want to run audio file.
            this.isPlayed = true;
        } else {
            this.play_pause_button.src = "./icons/play.ico";
            this.audio_file.pause();
            this.isPlayed = false;
        }
    }
}
onload = new Audio_Player();
// ............. succeeded ..............

//....................................................................................
// Note:  When use point, that means we say we want to get out of folder that contains JS file we use now, and it'll become your path in main folder that contains file HTML and other folders.
//.....................................................................................