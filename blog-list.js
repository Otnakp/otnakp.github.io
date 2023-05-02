fetch('https://yourusername.github.io/your-blog-repo/posts.json')
  .then(response => response.json())
  .then(posts => {
    const blogList = document.getElementById('blog-list');
    posts.forEach(post => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = post.url;
      link.textContent = post.title;
      listItem.appendChild(link);
      blogList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error fetching blog posts:', error);
  });
