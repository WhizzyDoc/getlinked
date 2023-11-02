window.addEventListener("load", function () {
    
    if (localStorage.save_id) {
        last_post = Number(localStorage.save_id);
    } else {
        var last_post = 4;
        localStorage.save_id = last_post;
    }

    const createblog = async () => {
        
        const doc = {
            title: document.forms["create_blog"]["title"].value,
            body: document.forms["create_blog"]["new_blog"].value,
            author: `sheriff_baba${last_post}`
        };
        

        try {
            const response = await fetch("http://localhost:8000/blogs", {
                method: "POST",
                body: JSON.stringify(doc),
                headers: { "Content-Type": "application/json" }
            });

            if (response.ok) {
                window.location.replace('./../index.html');
            } else {
                console.error("Request failed with status:", response.status);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    const createBlogForm = document.forms["create_blog"];
    if (createBlogForm) { // Check if the form exists
        createBlogForm.addEventListener("submit", function(e){
            e.preventDefault()
            createblog()
            last_post++; 
            localStorage.save_id = last_post;
    
        });
    } else {
        console.error("Form with name 'create_blog' not found.");
    }
});
