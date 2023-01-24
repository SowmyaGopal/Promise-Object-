function textstate(){
  
    let loadingandresulttxt = document.getElementById('loadingandresulttxt');
      
    function loadingandresult() {
      let a = `<span id="loading">Loading...</span>`;
      
     loadingandresulttxt.innerHTML=a
      var prom  = new Promise((res,rej)=> {
        setTimeout(()=> {
          res("Data - Iam Loaded")
          rej("Data Not Found!")
        },2500)
      })
      return prom
    }
    
    loadingandresult().then((data)=>{
      loadingandresulttxt.style.color='green';
      loadingandresulttxt.innerHTML=data
    }).catch((e)=> {
      loadingandresulttxt.style.color='red';
      loadingandresulttxt.innerHTML=e
    }) ;
    
    }