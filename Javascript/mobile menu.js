document.getElementById("mobile-menu").addEventListener("change", function(){
    var selectedOption=this.options[this.selectedIndex];
    if (selectedOption.value !== ""){
        window.location.href= selectedOption.value;
    }
});