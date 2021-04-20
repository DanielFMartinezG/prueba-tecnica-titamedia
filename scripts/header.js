const show_menu = document.getElementsByClassName("show-menu");
show_menu[0].addEventListener("click", scroll_body);
function scroll_body(){
    if(body_tag[0].style.overflow == "hidden"){
      body_tag[0].style.overflow = "visible";
    }else{
      body_tag[0].style.overflow = "hidden";
    }
}