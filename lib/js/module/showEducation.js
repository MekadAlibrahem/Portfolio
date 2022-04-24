const dataURLEducation = "https://mekadalibrahem.github.io/Portfolio/resources/data/education.json" ;
const toElements = document.getElementById("Education");
function showsEducation(EducationList ,toElement){
    let EducationElements = '' ;
    EducationList.forEach(education => {
        let card =  creatEducationElement(education);
        EducationElements += card ;
    });
    toElement.innerHTML = EducationElements ;
}

function creatEducationElement({from , title , Academic_average , date_start , date_end}){
    let educationElement = `
        <li>
            <figure>
                <blockquote class="blockquote">
                    <p> ${from}  - ${title} </p>
                </blockquote>
                <figcaption class="blockquote-footer">
                   ${date_start}  -> ${date_end} <cite title="Source Title"> ${Academic_average}</cite>
                </figcaption>
            </figure>
        </li>
    ` ;
    return educationElement ;
}
export default function addEducationsToPage(dataURL = dataURLEducation , toElement = toElements){
    fetch(dataURL) 
    .then(response => response.json())
    .then (
        (result) => {
            let EducationList = result.Education;
            showsEducation(EducationList , toElement);
        }
    );
}