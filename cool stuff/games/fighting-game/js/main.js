const CANVAS_ID = 'main_canvas';
const CANVAS_WIDTH = 1024;
const CANVAS_HEIGHT = 576;
/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById(CANVAS_ID);
const context = canvas.getContext('2d');

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;