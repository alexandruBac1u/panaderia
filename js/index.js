const loadfn =() =>{
    const _nav =document.querySelector('nav').style;
    const _img1 =document.getElementsByClassName('logo1');
    const _img2 =document.getElementsByClassName('logo2');
    const button =document.querySelector('button');
    const _a =document.getElementsByClassName('navenlacea');
    if(window.scrollY >10){
      _nav.backgroundColor = '#101010';
      _nav.boxShadow = '2px 2px 4px rgba(0,0,0,0.5)';
      _nav.color = '#ffffff';
      
      
      _img1[0].style.display='none';  
      _img2[0].style.display='block';
      button.style.color="white"
      for(let i=0; i<_a.length; i++){
        _a[i].style.color="white";
      };
      
    }else {
      _nav.backgroundColor = 'transparent';
      _nav.boxShadow = 'none';
      _nav.color = '#000000';
      _img1[0].style.display='block';
      _img2[0].style.display='none';
      button.style.color="black"
      _a.color="white"; 
      for(let i=0; i<_a.length; i++){
        _a[i].style.color="black";
      };
    }
  };
