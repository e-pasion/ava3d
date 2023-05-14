import { Component,OnInit } from '@angular/core';
declare const StlViewer:any;
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  ngOnInit(){
    this.initStlViewer();
  }
  

  initStlViewer() {
    let selectColor=document.getElementById("selectColor")! as HTMLInputElement;
    selectColor.value="#70f0ae";
    const stl_viewer = new StlViewer(document.getElementById("stl_cont"),{models: [{ id: 0, filename: "dino.stl",color:"#70f0ae",rotationx:Math.PI*1.5 }],auto_rotate:true});
  }

  cambiarColor(){
    
  }

}
