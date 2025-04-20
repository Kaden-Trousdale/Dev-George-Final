# Seal Chef's Questionable Recipes

A humorous, stylish recipe submission web app designed by a web dev student for fun, creativity, and a touch of chaos.

---

## 👤 Authorship & Attribution

**Created by:** Kaden Trousdale  
**GitHub:** [Kaden-Trousdale](https://github.com/Kaden-Trousdale)

### Attribution & Resources Used:
- Bootstrap 5: For responsive layout and modals  
- jQuery: For DOM manipulation  
- W3Schools, MDN Web Docs, and Stack Overflow for general guidance  
- Image credit for Seal Chef: [PNGTree](https://pngtree.com/freepng/chef-seal-vector_14711663.html)

---

## 🙋‍♂️ User Story

**As a web dev student,**  
I want to create a site to house information  
**So that** it is easy and accessible, while also humorous and stylish.

---

## 🧾 Narrative

This project began as a simple tutorial into the world of web development for my university course. This project has now evolved into our final project for the class as a way to practice building a CRUD (Create, Read, Update, Delete) web app using front-end technologies like HTML, CSS, JavaScript, and Bootstrap.

The idea was to create a parody recipe site where users could submit absurd or *questionable* recipes. The development process included:

- Implementing a login system with modal authentication  
- Building a form with dynamic JSON-based data handling  
- Creating a system to add, edit, and delete user-submitted recipes  
- Making the UI accessible, mobile-friendly, and humorous in tone  
- Deploying to GitHub Pages for accessibility


---

## 💻 Code Sample

```js
// Login logic with modal cleanup
$('#submitLogin').on('click', () => {
  const name = $('#username').val().trim();
  if (!name) {
    alert("Please enter your name.");
    return;
  }

  $('#loginArea').html(`
    <span class="navbar-text text-light me-2">Hi, ${name}!</span>
    <button class="btn btn-sm btn-outline-warning" id="logoutBtn">Logout</button>
  `);

  // Close modal + remove backdrop
  const modalEl = document.getElementById('loginModal');
  const loginModal = bootstrap.Modal.getInstance(modalEl);
  loginModal.hide();
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();

  $('#mainContent').fadeIn();
});
