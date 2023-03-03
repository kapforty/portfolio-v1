const alertDialog = document.querySelector('#alertDialog');
const okButton = document.querySelector('#okButton');
const confirmDialog = document.querySelector('#confirmDialog');
const cancelButton = document.querySelector('#cancelButton');
const okButton2 = document.querySelector('#okButton2');
const promptDialog = document.querySelector('#promptDialog');
const cancelButton2 = document.querySelector('#cancelButton2');
const okButton3 = document.querySelector('#okButton3');
const input = document.querySelector('#input');

export function clickAlert() {  
    alertDialog.showModal();
    okButton.addEventListener('click', () => {
        alertDialog.close();
    });
}

export function clickConfirm() {  
    confirmDialog.showModal();
    cancelButton.addEventListener('click', () => {
        output.innerHTML = "The value returned by the confirm method is: false";
        confirmDialog.close();
    });
    okButton2.addEventListener('click', () => {
        output.innerHTML = "The value returned by the confirm method is: true";
        confirmDialog.close();
    });
}

export function clickPrompt() {  
    promptDialog.showModal();

    cancelButton2.addEventListener('click', () => {
        output.innerHTML = "Prompt result: User didn't enter anything";
        promptDialog.close();
    });
    okButton3.addEventListener('click', () => {
        let res = input.value;
        output.innerHTML = "Prompt result: User didn't enter anything";
        if (res != null && res.length > 0) {
            res = DOMPurify.sanitize(res);
            output.innerHTML = "Prompt result: " + res;
        }
        promptDialog.close();
    });
}
