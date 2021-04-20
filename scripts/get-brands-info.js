const body_tag = document.getElementsByTagName('body');
const grid_item_template = document.getElementById('grid-card-template');
const grid_left = document.getElementsByClassName('grid-left');
const grid_center = document.getElementsByClassName('grid-center');
const grid_right = document.getElementsByClassName('grid-right');
const grid_item_img = document.getElementsByClassName('grid-item-img');
const brand_title = document.getElementsByClassName('brand-title');
const brand_slogan = document.getElementsByClassName('brand-slogan');

const add_brand_card = (i,f,node)=>{
  for(i; i<f; i++){
    let template = grid_item_template.cloneNode(true);
    node[0].appendChild(template);
    grid_item_img[i].src = brands[i].brand_url;
    brand_title[i].innerHTML = brands[i].brand_title;
    brand_slogan[i].innerHTML = brands[i].brand_slogan;
  }
}
const indentify_screen = ()=>{
  add_brand_card(0,3,grid_left),
  add_brand_card(3,6,grid_center),
  add_brand_card(6,10,grid_right)
}
window.onload = ()=>{
  body_tag[0].removeChild(grid_item_template);
  indentify_screen();
}