const bgElements = () =>{
  const elements = document.querySelectorAll(".set-bg");
//console.log(elements);

for (let i = 0; i < elements.length; i++) {
  //console.dir(elements[i]);
  const src = elements[i].dataset.setbg;
  //elements[i].style.backgroundImage = "url(" + src + ")";
  elements[i].style.backgroundImage = `url(${src})`;
  //console.dir(elements[i]);
  //console.log(src);
}
}
bgElements();
