function switchcolor(color){
  document.querySelector('.container')
    .style.backgroundColor = color;
    let txt = document.getElementsByClassName(".container");
  if(color==="#000000"){
    document.querySelector('.container')
      .style.border = color;
    for(let word of txt){
      word.style.color = "white";
    }
  }else{
    for(let word of txt){
      word.style.color = "black";
    }
  }
}
