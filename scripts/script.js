let data = [];

// Load JSON on start
fetch('data/data.json')
  .then(res => res.json())
  .then(json => {
    data = json;
    renderData();
  });

// Render all entries to DOM
function renderData() {
  const container = $('#data-container');
  container.empty();
  data.forEach((entry, index) => {
    container.append(`
      <div class="card mb-2" id="list" data-index="${index}">
        <div class="card-body">
          <h4 class="card-title">${entry.title}</h4>
          <p><strong>Ingredients:</strong> ${entry.ingredients}</p>
          <p><strong>Instructions:</strong> ${entry.instructions}</p>
          <button class="btn btn-sm btn-warning editBtn">Edit</button>
          <button class="btn btn-sm btn-danger deleteBtn">Delete</button>
        </div>
      </div>
    `);
  });

  console.log("Current JSON Data:", JSON.stringify(data, null, 2));
}

// Handle new entry form submission
$('#dataForm').on('submit', function (e) {
  e.preventDefault();
  const title = $('#entryTitle').val();
  const ingredients = $('#entryIngredients').val();
  const instructions = $('#entryInstructions').val();

  data.push({ title, ingredients, instructions });
  renderData();
  this.reset();
});

// Load sample data into form
$('#loadSample').on('click', () => {
  $('#entryTitle').val('Space Pancakes');
  $('#entryIngredients').val('Interstellar flour, Martian syrup');
  $('#entryInstructions').val('Mix, pour onto hover-pan, flip with anti-grav spatula, enjoy!');
});

// Export data to console as JSON
$('#exportData').on('click', () => {
  console.log("Exported JSON:", JSON.stringify(data, null, 2));
});

// Delete an entry
$('#data-container').on('click', '.deleteBtn', function () {
  const card = $(this).closest('.card');
  const index = card.data('index');
  if (confirm("Are you sure you want to delete this entry?")) {
    data.splice(index, 1);
    renderData();
  }
});

// Edit an entry
$('#data-container').on('click', '.editBtn', function () {
  const card = $(this).closest('.card');
  const index = card.data('index');
  const entry = data[index];

  const newTitle = prompt("Edit title:", entry.title);
  const newIngredients = prompt("Edit ingredients:", entry.ingredients);
  const newInstructions = prompt("Edit instructions:", entry.instructions);

  if (newTitle !== null && newIngredients !== null && newInstructions !== null) {
    data[index] = {
      title: newTitle,
      ingredients: newIngredients,
      instructions: newInstructions
    };
    renderData();
  }
});


// Dummy Login Modal Handling
$('#submitLogin').on('click', () => {
  const name = $('#username').val().trim();
  if (!name) {
    alert("Please enter your name.");
    return;
  }

  // Replace login button with greeting and logout
  $('#loginArea').html(`
    <span class="navbar-text text-light me-2">Hi, ${name}!</span>
    <button class="btn btn-sm btn-outline-warning" id="logoutBtn">Logout</button>
  `);

  // Close login modal
  const modalEl = document.getElementById('loginModal');
  const loginModal = bootstrap.Modal.getInstance(modalEl);
  loginModal.hide();

  // Remove leftover backdrop and unlock scrolling
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();

  // Show main content
  $('#mainContent').fadeIn();
});

// Handle logout
$(document).on('click', '#logoutBtn', () => {
  $('#loginArea').html(`
    <button class="btn btn-outline-light" id="loginBtn" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
  `);

  // Hide content
  $('#mainContent').hide();

  // Reset data and UI
  data = [];
  $('#data-container').empty();

  // Reopen login modal
  const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
  loginModal.show();
});
