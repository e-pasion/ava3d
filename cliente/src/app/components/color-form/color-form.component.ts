import { Component,OnInit,ElementRef,ViewChild,Output,EventEmitter } from '@angular/core';
declare const StlViewer:any;
@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent {
  @ViewChild('stlCont',{static:true}) stlCont!:ElementRef<HTMLDivElement>;
  stl_viewer:any;
  colorSeleccionado: string= "#70f0ae";
  ngOnInit(){
    this.initStlViewer();
  }


  
  initStlViewer() {
    this.stl_viewer = new StlViewer(this.stlCont.nativeElement,{models: [{ id: 0, filename: "dino.stl",color:this.colorSeleccionado,rotationx:Math.PI*1.5 }],auto_rotate:true});
  }

  cambiarColor(color:string){
    this.colorSeleccionado=color;
    this.stl_viewer.set_color(0,color);
  }
}
