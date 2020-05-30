export class CanvasView {

    constructor(){
        //selecting the html elements this view is in charge of
        this._canvas =  document.querySelector("canvas");
        this._rect = this._canvas.getBoundingClientRect();
        this._ctx = this._canvas.getContext("2d");
        this._editor = document.getElementById("editor-container");
        //This is a temporary variable, we should get this from other controllers
        //this.toolbox = document.querySelector("#photoEditor-toolbox-upload");
        //this is a reference to the screen i worked with
        //Different Screen sizes should be consistent
        //therefore, there is a reference
        this._baseInnerWidth = 1366;
        this._baseInnerHeight = 657;
        this._baseCanvasWidth = 700;
        this._baseCanvasHeight = 500; 



        this.setUpCanvas();
    }

    getEditor(){
        return this._editor;
    }

    getCanvasValues(){
        return {
            canvas:  this._canvas,
            ctx: this._ctx,
            rect: this._rect
        };
    }

    //set up the canvas 
    //should be called mostly at the start
    setUpCanvas (){

        //get the marginleft
        const margin = this._getMargin();
        //assigning the margin of the editor containerS
        this._editor.style.marginLeft =  ""+ margin + "px";

        //change design when the screen size is medium
        //mediaMd start from 940 to below
        if(innerWidth <= 940)
        {
            this._canvas.width = innerWidth - 50;
            this._rect.width = this._canvas.width;
            this._editor.style.marginLeft =  "25px";
            this._editor.style.marginRight = "25px";
        }
    }

    //to resize the canvase
    //we call the setup canvas again
    resizeCanvas(){
        this.setUpCanvas();
    };

    clearCanvas(){
        //clear the canvas
        this._ctx.clearRect(0,0,this._rect.width,this._rect.height); 
    }

    _getMargin(){

        let innerWidthRatio = this._baseInnerWidth/innerWidth;
        this._canvas.width = this._baseCanvasWidth/innerWidthRatio;
        this._canvas.height = this._baseCanvasHeight;
            
        //This is the original code
        //let margin = (innerWidth - this._canvas.width - 50 - toolbox.offsetWidth)/2;
        //due to development we are going to use a constant for now

        const toolboxWidth = 100;

        let margin = (innerWidth - this._canvas.width - 50 - toolboxWidth)/2;

        return margin;
    }
}