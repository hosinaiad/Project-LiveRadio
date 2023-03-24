class Volume {
    constructor() {
        this.audio_file = document.getElementById("audio_file");
        this.audio_file.volume = 50 / 100;
        // Set new value for sound equal 50% = 0.5 = half of bar "Range".
        this.volume_range = document.getElementById("volume_range");
        this.volume_range.addEventListener("change", () => {
            this.audio_file.volume = this.volume_range.value / 100;
        });

        this.volume_speed = document.getElementById("volume_speed");
        this.volume_speed.playbackRate = 1;
        // Recommended define default speed as above for visitors.
        this.volume_speed.addEventListener("change", () => {
            this.audio_file.playbackRate = this.volume_speed.value / 100;
            // When we divide value on 100 to become value between 1 & 2.
        });

    }
}

onload = new Volume();

onload = new Volume();