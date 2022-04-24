import {addComponentsToPage , dataURL , toElement } from "./module/showComponents.js";
import addUserInfoToPage from "./module/showUser.js";
addUserInfoToPage();


addComponentsToPage(dataURL , toElement);
