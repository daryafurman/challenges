console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newPost = document.createElement("post");
newPost.innerHTML = `
<section class="post">
      <p class="post__content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <footer class="post__footer">
        <span class="post__username">@username</span>
        <button type="button" class="post__button" data-js="like-button">
          ♥ Like
        </button>
      </footer>
    </section>
`;

document.body.append(newPost);
