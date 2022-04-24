const userDataURL =  "https://mekadalibrahem.github.io/Portfolio//resources/data/user.json" ;
const toUserInfoELemente  = document.getElementById("user-info");
const toUserAboutElemente = document.getElementById("aboutMe");
const toContactElemente   = document.getElementById("contact");

function showUserInfo(user , touserInfoElemente , touserAboutElement , tocontactElemente){
    touserInfoElemente.innerHTML = createUserElemente(user) ;
    touserAboutElement.innerHTML = `${user.About_Me}` ;
    tocontactElemente.innerHTML  = createUserContactElemente(user);

}

function createUserElemente({name , Birth_day , country , job , experians ,image1}){
    return `
        <div class=" d-block d-md-none "  style="width: 25% ;">
        </div>
        <div class="col-6 col-md-4 text-center myphoto">
        
            <img src="${image1}" width="auto" height="auto" alt="personal image">
        </div>
        <div class="col-12 col-md-7 my-info">
        <p>
            My name is ${name} I'm a ${job} , I  live in ${country}.<br>
            birth day : ${Birth_day} <br>
            experians : ${experians}
        </p>
        </div>
    `;
}
function createUserContactElemente({contact : {github , linkedin}}){
    return ` 
    <li>
        <a href="${linkedin}">
            <i class="fab fa-linkedin" > </i> <span> Linkedin </span>
        </a>
        
    </li>
    <li>
        <a href="${github}" >
            <i class="fab fa-github" > </i> <span> github </span>
        </a>
    </li>
    <li>
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#sendEmailModal">
            Send Email 
        </button>  
    </li>
    `;
}

export default function addUserInfoToPage(dataURL =  userDataURL , toUserElemente = toUserInfoELemente ,toAboutElemente = toUserAboutElemente , toContactsElemente =  toContactElemente  ){
    fetch(dataURL) 
    .then (response => response.json())
    .then(

        (result) => showUserInfo(result.user ,  toUserElemente , toAboutElemente, toContactsElemente)
        );
}

