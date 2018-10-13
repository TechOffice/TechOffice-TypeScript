import { Scene, Engine } from 'babylonjs';
import * as BABYLON from 'babylonjs';

var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('renderCanvas');;
var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});