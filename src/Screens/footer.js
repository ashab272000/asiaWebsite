

/*
export const setupFooter = () => {
    
    console.log("paka")
    
    document.querySelector('#input-button').addEventListener('click', () => {
        sendEmail();
    });
    const emailTextarea = document.querySelector(`#email-input-textarea`);
    const messageTextarea = document.querySelector(`#message-input-textarea`);
    
    const sendEmail = () => {
        console.log("puka,gada");
        const email = emailTextarea.value;
        const message = messageTextarea.value;
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);
        
        fetch('/send', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                message: message
            })
        })
        .then((res) => res.json())
        .then((res) => {
            console.log('here is the response: ', res);
        })
        .catch((err) => {
            console.error('here is the error: ', err);
        })
    }
    
}
*/
