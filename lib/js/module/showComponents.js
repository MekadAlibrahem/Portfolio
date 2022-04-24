
const dataURL = "../../../resources/data/components.json" ;
const toElement = document.getElementById("components-list");
function showComponents(ComponentsList, toElement){
    let componentElements = '' ;
    
    
    ComponentsList.forEach(component => {
        let card = CreatCompmemtsElements(component);
        componentElements += card ;
    });
    toElement.innerHTML  =componentElements ;

}

function CreatCompmemtsElements({title , image , tech : [...techs] , view_links , source_link}){
    
    
    let componentElement = `
   
    <div class="col-12 col-md-6 col-lg-4 " >
        <div class="card" style="width: auto;">
            
            <img src="${image}" class="card-img-top img-fluid" alt=" 3-column-preview-card ">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">
                Technologies used : <small class="text-muted"> ${techs} </small></p>
               </p>
              <a href="${view_links}" target="_balck" class="btn btn-primary">view</a>
              <a href="${source_link}" target="_balck" class="btn btn-primary">source code</a>
              
            </div>
          </div>
    </div>
    
    
    
    `;
    return componentElement ;
}

// "../../../resources/data/components.json"
function  addComponentsToPage(DataURL , toElement){
    fetch(DataURL)
    .then(response => response.json())
    .then( 
        (result)=>{
            let ComponentsList = result.components;
            console.log(ComponentsList);
            showComponents(ComponentsList , toElement);
        }
    );
}
export  { 
    addComponentsToPage  ,
    dataURL ,
    toElement, 
};


   
    
    

   
