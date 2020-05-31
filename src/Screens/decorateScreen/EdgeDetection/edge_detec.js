import { ImageLayer } from "../Objects/image_layer";



export class EdgeDetect extends ImageLayer{

    constructor(src, canvasController, colorConverter) {
        super(src, canvasController);
        this._canvas = canvas;
        this._colorConverter = colorConverter;
        //edge detect works by comparing each pixel with its neighbore
        //color experiments showed that if the color is too dark or too light
        //we must compare by saturation
        //else we compare with hue
        this._direction = {
            up : -this._canvas.width,
            right : 1,
            down : this._canvas.height,
            left: -1
        }

        this._comparision = {
            hue: 0,
            saturation: 1
        }

    }

    detectEdge(refImg, mouseX, mouseY){

        //get the pixel clicked
        let pixelClicked = this._getPixelClicked(mouseX, mouseY);

        //get the hsl of the pixel
        let refPixelHsl = this._colorConverter.rgbToHsl(refImg.data[pixelClicked * 4], refImg.data[pixelClicked * 4 + 1],  refImg.data[pixelClicked * 4 + 2]);

        // run the algorithim
        this._detectEdgeViaBreadth(refImg, pixelClicked, this._getComparision(refPixelHsl));
    }

    _detectEdgeViaBreadth(refImg, pixel, comparision){

        this._pixelToWhite(pixel);
        //Recursion reaches stack overflow
        //therefore, using "Recursion" with while loop
        let nextPixel;
        let pixelsTraversed = []
        let pop = false;

        while (nextPixel != -1 && nextPixel !== undefined)
        {
            let currentPixel = nextPixel;
            nextPixel = this._getNextPixel(currentPixel, comparision, refImg, direction.up, pop);
            if(nextPixel != -1 && nextPixel !== undefined)
            {
                this._pixelToWhite(nextPixel);
                pixelsTraversed.push(currentPixel);
                pop = false;
                continue;
            }
            nextPixel = this._getNextPixel(currentPixel, comparision, refImg, direction.right, pop);
            if(nextPixel != -1 && nextPixel !== undefined)
            {
                this._pixelToWhite(nextPixel);
                pixelsTraversed.push(currentPixel);
                pop = false;
                continue;
            }
            nextPixel = this._getNextPixel(currentPixel, comparision, refImg, direction.down, pop);
            if(nextPixel != -1 && nextPixel !== undefined)
            {
                this._pixelToWhite(nextPixel);
                pixelsTraversed.push(currentPixel);
                pop = false;
                continue;
            }
            nextPixel = this._getNextPixel(currentPixel, comparision, refImg, direction.left, pop);
            if(nextPixel != -1 && nextPixel !== undefined)
            {
                this._pixelToWhite(nextPixel);
                pixelsTraversed.push(currentPixel);
                pop = false;
                continue;
            }else{
                nextPixel = pixels.pop();
                pop = true;
            } 
        }


    }

    
    _pixelToWhite(pixel) {
        this._imgData.data[pixel * 4] = 255;
        this._imgData.data[pixel * 4 + 1] = 255;
        this._imgData.data[pixel * 4 + 2] = 255;
        this._imgData.data[pixel * 4 + 3] = 69;
    }


    _getPixelClicked(mouseX, mouseY){
        return (mouseX + mouseY * _canvas.width);
    }

    _getComparision(pixel){
        //check to configure the  variable
        
        if(pixel[1] < 0.15 || pixel[1] > 0.85)
        {
            return this._comparision.saturation;
        }else{
            return this._comparision.hue;
        }

    }

    _getHslFromRgb(pixel, imgData){
        return this._colorConverter.rgbToHsl(imgData.data[pixel * 4], imgData.data[pixel * 4 + 1], imgData.data[pixel * 4 + 2]);
    }

    _getRgbFromHsl(pixel, imgData){
        return this._colorConverter.rgbToHsl(imgData.data[pixel * 4], imgData.data[pixel * 4 + 1], imgData.data[pixel * 4 + 2]);
    }

    _getRgb(pixel, imgData){
        return [imgData.data[pixel * 4], imgData.data[pixel * 4 + 1], imgData.data[pixel * 4 + 2], imgData.data[pixel * 4 + 3]]
    }

    _getNextPixel(currentPixel, compare, refImg, direction, isPoped){
        //get the hsl of the pixel
        let currentHsl = this._getHsl(currentPixel, refImg);
        let compareValue;
        let compareLightness;
        let comparePixel;
        let comparePixelHsl;

        //compare the pixel above
        comparePixel = currentPixel + (direction);

        //get the rgb value of the pixel of the edgeimg layer
        //check if the pixel is already part of the pixel
        let currentPixelRgbEdge = _getRgb(currentPixel, this._imgData);
        if(!(currentPixelRgbEdge[0] == 255 && currentPixelRgbEdge[1] == 255 && currentPixelRgbEdge[2] == 255 && currentPixelRgbEdge[3] == 69) )
        {
            //get the hsl for the pixel to be compared in the mainimglayer
            comparePixelHsl = this._getHslFromRgb(currentPixel, refImg);
            compareValue = Math.abs(currentHsl[compare] - comparePixelHsl[compare]);

            //compare == 0 means comparison has to be done in hue
            //compare == 1 means comparision has to be done in saturation
            if(compare == 0)
            {
                compareValue /= 360;
            }

            compareLightness = currentHsl[2] - comparePixelHsl[2];

            let currentRgbValue = this._getRgb(currentPixel, refImg);
            let compareRgbValue = this._getRgb(comparePixel, refImg);

            //change this
            let rgbDiff = Math.abs(((currentRgbValue[0] + currentRgbValue[1] + currentRgbValue[2])/3) - ((compareRgbValue[0] + compareRgbValue[1] + compareRgbValue[2])/3));

            if( compareValue < 0.03 && compareLightness > -0.06 && compareLightness < 0.06 && rgbDiff < 5)
            {
                //this gets the avg values of lightness and saturation
                if(!isPoped)
                {
                    let compareHsl = rgbToHsl(...compareRgbValue);
                    avgL = (avgL + compareHsl[2])/2;
                    avgS = (avgS + compareHsl[1])/2; 
                }
                return comparePixel;
            }else{
                return -1;
            }

        }else{
            return -1;
        }    
    }
}
