// Get the 'id' parameter from the URL
const id = new URLSearchParams(window.location.search).get("id");

// Select the delete button
const deleteBtn = document.querySelector(".delete");

// Function to fetch and render a single blog post
const renderPost = async () => {
  try {
    const url = `http://localhost:8000/blogs/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const blog = await response.json();
    console.log(blog);

    const template = `
      <div class="blog">
        <h2>${blog.body}</h2>
        <h2>${blog.author}</h2>
      </div>
    `;

    document.querySelector(".blog").innerHTML = template;
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

// Event listener when the page loads
window.addEventListener("load", () => {
  renderPost();

  // Event listener for deleting the blog post
  deleteBtn.addEventListener("click", async (e) => {
    try {
      const url = `http://localhost:8000/blogs/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        window.location.replace('./../index.html');
      } else {
        console.error("Failed to delete the blog post");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });
});
