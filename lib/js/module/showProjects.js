const projectsDataUrl = "https://mekadalibrahem.github.io/Portfolio/resources/data/project.json";
const toElements = document.getElementById("projects-list");

function showProjects(projectsList , toElement){
    let projectsElemnts= '' ;
    projectsList.forEach(project => {
        let card = crearProjectElement(project);
        projectsElemnts += card ; 
    });
    toElement.innerHTML = projectsElemnts ;
}

function crearProjectElement({name , image , description , tech :[...techList] , version , link_repo , link_info}){
    return ` 
        <div class="col-11">
                
            <div class="card sm-12 card-project " style="min-width: 80%;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="${image}" class="img-fluid rounded-start img-project" alt="${name}-logo">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">
                               ${description}
                            <p class="card-text ">
                                Technologies used : <small class=" text-muted " >  ${techList}   </small>
                  
                                <br>
                                <small class="text-muted"> last version ${version}</small>
                            </p>
                        </div>
                    <div class="card-footer bg-transparent border-success">
                    <a  href="${link_repo}" target="_blank" class="btn btn-primary " > link repo </a> 
                    <a  href="${link_info}" target="_blank" class="btn btn-primary " > learn more </a> 
                    </div>
                    </div>
                </div>
            </div>


        </div>
    `;
}

export default function addProjectsToPage(dataURL = projectsDataUrl , toElement = toElements){
    fetch(dataURL)
    .then(response => response.json())
    .then(
        (result) => {
            let projectsList = result.project ;
            showProjects(projectsList , toElement);
        }
    );
}