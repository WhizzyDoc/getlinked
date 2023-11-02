window.addEventListener("load", async () => {
    const searchForm = document.querySelector(".search");
    const blogsContainer = document.querySelector(".blogs");
  
    const renderPosts = async (term) => {
      let url = "http://localhost:8000/blogs";
      if (term) {
        url += `?q=${term}`;
      }
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const blogs = await response.json();
  
        const template = blogs.map((each_blog) => `
          <div class="each_blog">
            <h2>${each_blog.body}....</h2>
            <h2>${each_blog.title}.....</h2>
            <a href="./details.html?id=${each_blog.id}">Read more</a>
          </div>
        `).join('');

  
        blogsContainer.innerHTML = template;
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
  
    renderPosts();
  
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      renderPosts(searchForm.term.value.trim());
    });
  });


