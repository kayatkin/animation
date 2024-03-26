import './style.css';
import Collapse from './collapse';

const collapseButton = document.querySelector('.collapse-button');
const collapsibleContent = document.querySelector('.collapsible-content');

const collapse = new Collapse(collapseButton, collapsibleContent);
collapse.addListener();
