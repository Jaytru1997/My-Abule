document.addEventListener("DOMContentLoaded", function(event) {
    const dropSideBar = () => {
        const icon1 = document.getElementById("icon1");
        (icon1.className === "nav l")
        ?
        icon1.className = "l1 l"
        :
        icon1.className = "nav l";

        const icon2 = document.getElementById("icon2");
        (icon2.className === "nav2 l")
        ?
        icon2.className = "l2 l"
        :
        icon2.className = "nav2 l";

        const icon3 = document.getElementById("icon3");
        (icon3.className === "nav3 l")
        ?
        icon3.className = "l3 l"
        :
        icon3.className = "nav3 l";

        const sBar = document.getElementById("collapsed");
        (sBar.className === "hidden-nav")
        ?
        sBar.className = "dropdown-content"
        :
        sBar.className = "hidden-nav";
    }
    document.getElementById("icon").addEventListener("click", dropSideBar);

    const resizeImage = () => {
        const smallImage = document.getElementById("smart_thumbnail");
        (smallImage.className === "small")
        ?
        smallImage.className = ""
        :
        smallImage.className = "small";
    }
    document.getElementById("smart_thumbnail").addEventListener("click", resizeImage);
});
