class Color {
    constructor() {
        this.color1 = document.getElementById("color1");
        this.color1.addEventListener("click", () => {
            this.select_color("color1");
            // When click on button has id="color-1" then parameter value become equal color-2 and so on to others.
        });

        this.color2 = document.getElementById("color2");
        this.color2.addEventListener("click", () => {
            this.select_color("color2");
        });

        this.color3 = document.getElementById("color3");
        this.color3.addEventListener("click", () => {
            this.select_color("color3");
        });

        this.color4 = document.getElementById("color4");
        this.color4.addEventListener("click", () => {
            this.select_color("color4");
        });
        if (localStorage.getItem("COLOR") == null) {
            document.body.style.background = "linear-gradient(to right,#ff9966, #ff5e62)";
        }
        this.select_color(localStorage.getItem("COLOR"));
    }

    select_color(color) {
        // Color variable value it'll be define as button it'll be clicked on from the visitors.
        if (color == "color1") {
            document.body.style.background = "rgba(39, 39, 37, 1)";
            // Only body element don't need id to define, others need id.
        } else if (color == "color2") {
            document.body.style.background = "linear-gradient(to right,#ff9966, #ff5e62)";
            // Only body element don't need id to define, others need id.
        } else if (color == "color3") {
            document.body.style.background = "rgb(243, 81, 81)";
            // Only body element don't need id to define, others need id.
        } else if (color == "color4") {
            document.body.style.background = "rgb(61, 141, 210)";
            // Only body element don't need id to define, others need id.
        }
        localStorage.setItem("COLOR", color);
    }
}
onload = new Color();
// Run class when onload the website.
// Run class when onload the website.