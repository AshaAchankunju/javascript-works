

var countries=[]
var url="https://restcountries.com/v2/all/"
fetch(url).then(res=>res.json()).then(data=>{
  countries=[...data]
  populateSelectBox(countries);
  populateRegion(countries);
  displayCountryByName(countries)
  displayCountries(countries)
})



  function populateSelectBox(countries){
    let selectBox=document.querySelector("#id_select")
    for (let c of countries){
        let countryName=c.name;
        let tag=document.createElement("option")
        tag.value=countryName
        tag.text=countryName
        selectBox.appendChild(tag)
    }
  }

  function displayCountryByName(event){
    let countryName=event.target.value;
    let data=countries.find(c=>c.name==countryName)
    console.log(data);
    let htmlData=`
        <div class="card" style="width:100%;">
      <img src="${data.flag}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Capital: ${data.capital}</li>
        <li class="list-group-item">Currency: ${data.currencies&& data.currencies[0].name}</li>
        <li class="list-group-item">Population: ${data.population}</li>
      </ul>
      
    </div>
    `
    document.querySelector("#root").innerHTML=htmlData;
  }
  
  function populateRegion(countries){
    let allRegions=new Set(countries.map(c=>c.region))
    let selectBox=document.querySelector("#id_region")
    for (let r of allRegions){
      let optiontag=document.createElement("option")
      optiontag.value=r
      optiontag.text=r
      selectBox.appendChild(optiontag)
    }

  }

  function displayCountryByRegion(event){
    let regionName=event.target.value;
    let data=countries.filter(c=>c.region==regionName)
    console.log(data)
    displayCountries(data) 
  }

  function displayCountries(data){
    let htmlData=``
    for (let c of data){
      htmlData+=`
      <div class="col-4">
      <div class="card">
          <img src="${c.flag}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${c.name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
         </div>
      `
    }
    document.querySelector("#root").innerHTML=htmlData;
  }