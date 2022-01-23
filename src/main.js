import "./styles.css";
import * as elementFactory from './elementFactory.js';

const currentDate = new Date();
const projects = [...document.body.querySelectorAll('.project')];

document.body.appendChild(elementFactory.projectBox('Vanilla Project', currentDate));
document.body.appendChild(elementFactory.emptyProjectBox());