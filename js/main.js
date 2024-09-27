import { toggleSelect, selectOption } from "./modules/customSelect.js";
import { getFileName } from "./modules/customInputFile.js";
import { handlerInputRange } from "./modules/customInputRange.js";
import { stickHeader } from "./modules/stickHeader.js";
import { smoothScroll } from "./modules/smoothScroll.js";

// Custom select
toggleSelect();

selectOption();

// Custom Scroll
new SimpleBar(document.querySelector(".select-dropdown"), { autoHide: false });

// Custom Input Range
handlerInputRange();

// Custom Input File
getFileName();

// sticky header
stickHeader();

// Smooth Scroll
smoothScroll();

// AOS.JS Animation
AOS.init();