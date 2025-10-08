// Tasks
// 1. Fetch and Display Posts
//      ● Use fetch() to retrieve a list of posts from
//      https://jsonplaceholder.typicode.com/posts
//      ● Convert the response to JSON
//      ● Dynamically render the post titles and bodies inside the #postList div
// 2. Create and Send a New Post
//      ● Add a form with title and body fields
//      ● Use fetch() with the POST method to send the data as JSON to the API
//      ● Show a confirmation message with the response data
// 3. Add Loading and Error States
//      ● Show a “Loading…” message while the fetch is in progress
//      ● Display an error message if the fetch fails
// Deliverables:
//      ● A working fetch call that loads and displays posts
//      ● A functional form that submits data via POST
//      ● Error handling and user feedback (e.g., loading spinner or error messages)
//      ● Clean and well-commented JavaScript code

// 💡 Extensions
//      ● Allow users to delete posts using a DELETE request
//      ● Allow users to filter posts by keyword using an input field
//          ○ Use async/await instead of .then()

const postList = document.getElementById('postList')
const success = document.getElementById('formSuccess')
const title = document.getElementById('titleInput')
const body = document.getElementById('bodyInput')
const formError = document.getElementById('formError')
document.addEventListener('click', function(event) {
    if(event.target.type === 'submit'){
        formError.textContent = '';
        if (title.value.trim()=== ''){
            event.preventDefault();
            formError.textContent = 'Title can not be empty'
        }
        else if (body.value.trim() === ''){
            event.preventDefault();
            formError.textContent = 'Body can not be empty'
        }
        else {event.preventDefault();
            success.innerHTML = "Successful"
             success.innerHTML = `Success, <br> TITLE: ${titleInput.value} BODY: ${bodyInput.value}`
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            BODY: {
                title: titleInput.value,
                body: bodyInput.value
            }
        })};
    };
    if(event.target.id === 'fetchButton'){
        success.innerHTML = '';
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => response.json())
            .then((jsonData) => {
        console.log(jsonData);
        for (let obj of jsonData){
        postList.innerHTML += `<strong>${obj.title}</strong> <br>
        ${obj.body}<br>`
        }})
    }
})