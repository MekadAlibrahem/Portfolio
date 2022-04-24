const dataURLsCourse = "https://mekadalibrahem.github.io/Portfolio/resources/data/courses.json" ;
const toElements = document.getElementById("courses");
function showsCourse(CourseList ,toElement){
    let CourseElements = '' ;
    CourseList.forEach(Course => {
        let card =  creatCourseElement(Course);
        CourseElements += card ;
    });
    toElement.innerHTML = CourseElements ;
}

function creatCourseElement({from , title , type , date, link}){
    let CourseElement = `
        <li>
            <figure>
                <blockquote class="blockquote">
                <p>${from} -${title}  </p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    <cite title="Source Title">${type}</cite> ${date}<br>
                    <a href="${link}" target="_blank">
                        <button type="button" class="btn btn-success "  > learn more </button>
                    </a>
                </figcaption>
            </figure>
        </li>
    ` ;
    return CourseElement ;
}
export default function addCourseToPage(dataURL = dataURLsCourse , toElement = toElements){
    fetch(dataURL) 
    .then(response => response.json())
    .then (
        (result) => {
            let CourseList = result.Education;
            showsCourse(CourseList , toElement);
        }
    );
}