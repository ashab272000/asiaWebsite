
export class ImageLayer{

    constructor(src, canvasController){
        this._canvasController = canvasController;
        this._loadImageData(src, (result) => {
            this._imgData = result.img;
            this._imgTransform = result.transform;
        });
        this._src = src;
    }
    
    getSrc(){
        return this._src;
    }

    getImgData()
    {
        console.log(this._imgData);
        return this._imgData;
    }

    getImgTransform(){
        console.log(this._imgTransform);
        return this._imgTransform;
    }


    
    _loadImageData(src, callback){
        const img = new Image();
        let result;
    
        //when the image loads
        //fit the image to the canvas
        img.onload = () => {
            
            let transform = this._getImageTransform(img.width, img.height)
            img.width = transform.width;
            img.height= transform.height;
            result = {
                img: img,
                transform: transform
            };
            callback(result);
            
        };

        //img source should be set after the image.onload() function
        img.src = src;

        return result;
    }

    
    _getImageTransform(imgWidth, imgHeight){

        //get the canvas
        let canvas = this._canvasController.getCanvas();
        let x = 0;
        let y = 0;
        let width = imgWidth;
        let height = imgHeight;
        //get the ratio of width:height of the image
        let imgRatio = width/height;
        //get the ratio of width:height of the canvas
        let canvasRatio = canvas.width/canvas.height;

        //we run a check
        //to know if the image size is a landscape or a potrait
        //landscape: width of image = width of canvas, height is calculated based on the image ratio
        //potrait: height of image = height of canvas, width is calculated based on the image ratio
        //check if image is landscape
        if(imgRatio > canvasRatio)
        {
            width = canvas.width;
            height = width/(imgRatio);
            x = 0;
            y= (canvas.height - height)/2;
        }else
        {
            height = canvas.height;
            width = height * imgRatio;
            y = 0;
            x = (canvas.width - width)/2;
        }

        return {
            width: width,
            height: height,
            x:x,
            y:y
        }
    }
}