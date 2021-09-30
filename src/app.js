import 'bootstrap';
import "regenerator-runtime";
import "./scss/style.scss";


import "./script/component/header-nav.js";
import "./script/component/header-jumbo.js";
import "./script/component/detail-header.js";
import "./script/component/footer-end.js";


import main from "./script/view/main.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

document.addEventListener("DOMContentLoaded", main);