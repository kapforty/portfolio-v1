const addPostDialog = document.querySelector('#addPostDialog');
const inputTitle = document.querySelector('#title');
const inputDate = document.querySelector('#date');
const inputSummary = document.querySelector('#summary');
const posts = document.querySelector('#posts');

let db = JSON.parse(localStorage.getItem('db')) || [];

export function clickPostButton() {  
    addPostDialog.showModal();
}

export function clickCancel() {  
    addPostDialog.close();
}

export function clickSave() {  
    let title = DOMPurify.sanitize(inputTitle.value);
    let date = inputDate.value;
    let summary = DOMPurify.sanitize(inputSummary.value);
    let temp = [title, date, summary];
    db.push(temp);
    updatePosts();
    addPostDialog.close();
    localStorage.setItem('db', JSON.stringify(db));
}

export function updatePosts() {
    posts.innerHTML = "";
    let index = 0;
    db.forEach((post) => {
        let idx = index;
        let item = document.createElement("li");
        item.innerHTML = "<h3>"+post[0]+"</h3>" + "<h4>"+post[1]+"</h4>" + "<h5>"+post[2]+"</h5>" + "<br>";

        let editButton = document.createElement("button");
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.addEventListener("click", () => {
            editPost(idx);
        });
        item.appendChild(editButton);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.addEventListener("click", () => {
            deletePost(idx);
        });

        item.appendChild(deleteButton);
        index += 1;
        posts.appendChild(item);
    })
    localStorage.setItem('db', JSON.stringify(db));
}

function editPost(index) {
    let post = db[index];
    inputTitle.value = post[0];
    inputDate.value = post[1];
    inputSummary.value = post[2];
    db.splice(index, 1);
    updatePosts();
    addPostDialog.showModal();
}

function deletePost(index) {
    db.splice(index, 1);
    updatePosts();
}