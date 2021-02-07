$(window).scroll(function()
{
    if($(window).scrollTop() > 60)
    {
      $('#nav').css({'position':'fixed','top':'0px','left':'0px'});
    }
    else
    {
       $('#nav').css({'position':'absolute','top':60+'px'});
     }
});

/*GALERIA
  var total_slides=0;
  var slide=0;

  function mostrar_slider()
  {
    //contar todas las imagenes qeu se tienen la clase myslide
    let imagenes=document.querySelectorAll(".mySlides");
    total_slides=imagenes.length;

    if(slide<total_slides){
      slide=slide+=1;
    }
    else{
      slide=1;
    }

    var galeria=document.getElementById("galeryFake");

    for(let t=1;t<=total_slides;t++)
    {
      if(t==slide)
      {
        console.log(imagenes[t-1].currentSrc);
        galeria.style.backgroundImage="url('"+imagenes[t-1].currentSrc+"')";
      }
    }
  }

  //invocar cada 3 segundos
  function empezar_slider(){
    setInterval(mostrar_slider,3000);
  }

  window.addEventListener("load",function(){
    console.log("empezar");
    empezar_slider();
  });

  */
