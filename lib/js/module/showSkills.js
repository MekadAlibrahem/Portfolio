
const dataURL = "https://mekadalibrahem.github.io/Portfolio/resources/data/skills.json" ;
const toElements = document.getElementById("skill-list");
function showsKils(skillList, toElement){
    let skillsElements = '' ;
    
    
    skillList.forEach(skill => {
        let card = CreatSkillElements(skill);
        skillsElements += card ;
    });
    toElement.innerHTML  = skillsElements ;

}
let progressStatus = (progress)=>{
    if(progress >= 0 && progress < 50 ){
        return "danger";
    }else if(progress >=  50 && progress < 75 ){
        return "info" ;
    }else if( progress >= 75){
        return "success" ;
    }
}

function CreatSkillElements({name , image , description , progress}){
    
    
    let skillElement = `
   
    <div class="card dual">
        <h2>${name}</h2>
        <div class="header">
            <img src="${image}" alt="${name}">
        </div>
        <div class="description">
            <p>${description}</p>
            <div class="progress">
                <div class="progress-bar bg-${progressStatus(progress)}" role="progressbar" style="width: ${progress}%" aria-valuenow=" ${progress}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>
    
    
    
    `;
    return skillElement ;
}

// "../../../resources/data/components.json"
export default  function  addSkillsToPage(DataURL = dataURL , toElement = toElements){
    fetch(DataURL)
    .then(response => response.json())
    .then( 
        (result)=>{
            let skillList = result.skill;
          
            showsKils(skillList , toElement);
        }
    );
}
// export  { 
//     addSkillsToPage,
//     dataURL as skillDatat ,
//     toElement as skillsCards, 
// };



