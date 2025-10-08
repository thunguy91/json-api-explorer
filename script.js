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



// const postList = document.getElementById('postList')
// document.addEventListener('click', function(event) {
//     if(event.target.id === fetchButton){
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => {
//             response.json().then(jsonData =>
//             {
//                 console.log(jsonData);
//                 for(let obj of jsonData){
//                     postList.innerHTML += `${obj.title} \n ${obj.body}`
//                 }
//                 postList.innerHTML = JSON.stringify(jsonData);

//             })
//         })
//     }
// })


// const fetchButton = document.getElementById('fetchButton');
// const postList = document.getElementById('postList');
// const errorDiv = document.getElementById('error');
// const postForm = document.getElementById('postForm');
// const titleInput = document.getElementById('titleInput');
// const bodyInput = document.getElementById('bodyInput');
// const formError = document.getElementById('formError');
// const formSuccess = document.getElementById('formSuccess');

// const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// // Fetch and display posts
// function fetchPosts() {
//   postList.innerHTML = 'Loading posts...';
//   errorDiv.textContent = '';

//   fetch(API_URL)
//     .then(response => response.json())
//     .then(posts => {
//       postList.innerHTML = '';
//       posts.forEach(post => {
//         const postDiv = document.createElement('div');
//         postDiv.style.border = '1px solid #ccc';
//         postDiv.style.margin = '10px';
//         postDiv.style.padding = '10px';
//         postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
//         postList.appendChild(postDiv);
//       });
//     })
//     .catch(() => {
//       postList.innerHTML = '';
//       errorDiv.textContent = 'Failed to load posts.';
//     });
// }

// // Create and send a new post
// function submitPost(event) {
//   event.preventDefault();
//   formError.textContent = '';
//   formSuccess.textContent = '';

//   const title = titleInput.value.trim();
//   const body = bodyInput.value.trim();

//   if (!title || !body) {
//     formError.textContent = 'Please fill in both fields.';
//     return;
//   }

//   formSuccess.textContent = 'Submitting post...';

//   fetch(API_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ title, body })
//   })
//     .then(response => response.json())
//     .then(data => {
//       formSuccess.textContent = `Post submitted! ID: ${data.id}`;
//       postForm.reset();
//     })
//     .catch(() => {
//       formError.textContent = 'Failed to submit post.';
//       formSuccess.textContent = '';
//     });
// }

// // Event listeners
// fetchButton.addEventListener('click', fetchPosts);
// postForm.addEventListener('submit', submitPost);

//const fetchButton = document.getElementById('fetchButton');
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