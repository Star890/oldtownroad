const url = "http://jsonplaceholder.typicode.com/posts";
const blog = document.querySelector("#post");
const display = data => {
  console.log(data.length);
  const displayPost = document.querySelector("#get-all");
  if (data.length === undefined) {
    console.log("post runner");

    let post = data;
    let header = document.createElement("h2");
    let author = document.createElement("h4");
    let list = document.createElement("li");
    let body = document.createElement("p");
    let id = document.createTextNode(`Author: ${post.userId}`);
    let postTitle = document.createTextNode(post.title);
    let postBody = document.createTextNode(post.body);

    header.appendChild(postTitle);
    body.appendChild(postBody);
    author.appendChild(id);
    list.appendChild(header);
    list.appendChild(body);
    list.appendChild(author);
    blog.appendChild(list);
  } else {
    data.map(post => {
      let header = document.createElement("h2");
      let author = document.createElement("h4");
      let list = document.createElement("li");
      let body = document.createElement("p");

      let id = document.createTextNode(`Author: ${post.userId}`);
      let postTitle = document.createTextNode(post.title);
      let postBody = document.createTextNode(post.body);
      header.appendChild(postTitle);
      body.appendChild(postBody);
      author.appendChild(id);
      list.appendChild(header);
      list.appendChild(body);
      list.appendChild(author);
      blog.appendChild(list);
      list.addEventListener("click", console.log("hella click"));
    });
  }
};

// toggles hide/show posts
const hideAll = () => {
  const posts = document.querySelector("#post");
  const hideButton = document.querySelector("#hide");
  posts.classList.toggle("hide");
  posts.classList.value === "hide"
    ? (hideButton.textContent = "Show")
    : (hideButton.textContent = "Hide");
};

const getAll = () => {
  $.get(url, data => {
    console.log(data);
    display(data);
  });
};

// get post by id;
let post = document.querySelector("#getById");
post.addEventListener("submit", e => {
  e.preventDefault();
  $.get(`${url}/${userId.value}`, function(data) {
    console.log(data);
    display(data);
  });
});

// get comments by id;
let getComments = document.querySelector("#getComments");
getComments.addEventListener("submit", e => {
  e.preventDefault();
  $.get(`${url}/${userId2.value}/comments`, function(data) {
    console.log(data);
    displayComments(data);
  });
});

const displayComments = data => {
  data.map(post => {
    const blog = document.querySelector("#post");
    let header = document.createElement("h2");
    let author = document.createElement("h4");
    let list = document.createElement("li");
    let body = document.createElement("p");

    let id = document.createTextNode(`email: ${post.email}`);
    let postTitle = document.createTextNode(post.name);
    let postBody = document.createTextNode(post.body);
    header.appendChild(postTitle);
    body.appendChild(postBody);
    author.appendChild(id);
    list.appendChild(header);
    list.appendChild(body);
    list.appendChild(author);
    blog.appendChild(list);
  });
};

// create a new post and log id;
const createPost = document.querySelector("#create-post");
createPost.addEventListener("submit", e => {
  e.preventDefault();
  console.log("new psot runnign", createTitle.value);
  $.post(
    url,
    {
      userId: 1,
      title: createTitle.value,
      body: createBody.value
    },
    data => {
      console.log(data.id);
    }
  );
});

// replace post with id of 12
const replacePost = () => {
  $.ajax({
    method: "PUT",
    url: `${url}/12`,
    data: {
      userId: 1,
      title: "Replace post",
      body: "New post added"
    },
    complete: response => console.log(response.responseJSON)
  });
};

// update title of  post 12
const updateTitle = () => {
  $.ajax({
    method: "PATCH",
    url: `${url}/12`,
    data: {
      title: "title is updated"
    },
    complete: response => console.log(response.responseJSON)
  });
};

// delete post with id of 12;
const deletePost = () => {
  $.ajax({
    method: "DELETE",
    url: `${url}/12`,
    complete: response => console.log(response.statusText)
  });
};

let allList = blog.getElementsByTagName("li");
console.log(allList.length);
Collapse

