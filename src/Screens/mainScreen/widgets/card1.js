

export class Card1 {

    constructor(){
    }

    create(iconName, title, message){
        return `
        <div class="wwd-group-card">
            <div class="wwd-group-card-icon">
                <ion-icon name="${iconName}"></ion-icon>
            </div>
            <div class="wwd-group-card-des">
                <h4>
                    ${title.toUpperCase()}
                </h4>
                <br>
                <p>
                    ${message}
                </p>
            </div>
        </div>
        `;
    }
}