// Section Navigation
let currentIndex = 0;
const sections = document.querySelectorAll('.step-section');

function showSection(index) {
  sections.forEach((sec, i) => {
    sec.classList.toggle('active', i === index);
  });
}

function nextSection() {
  if (currentIndex < sections.length - 1) {
    currentIndex++;
    showSection(currentIndex);
  }
}

function prevSection() {
  if (currentIndex > 0) {
    currentIndex--;
    showSection(currentIndex);
  }
}

showSection(currentIndex);

// To-Do Logic
function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
  });
}

window.addEventListener('load', renderTasks);

// Products Logic
const products = [
  { name: "T-shirt", category: "clothing", price: 25, rating: 4.1 },
  { name: "Jeans", category: "clothing", price: 50, rating: 3.9 },
  { name: "Smartphone", category: "electronics", price: 300, rating: 4.7 }
];

function renderProducts(data = products) {
  const container = document.getElementById("productList");
  container.innerHTML = '';
  data.forEach(product => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${product.name}</strong><br>
      Category: ${product.category}<br>
      Price: ₹${product.price}<br>
      Rating: ⭐ ${product.rating}
    `;
    container.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  renderProducts(filtered);
}

function sortProducts() {
  const sort = document.getElementById("sortOption").value;
  const sorted = [...products].sort((a, b) => a[sort] - b[sort]);
  renderProducts(sorted);
}

window.addEventListener('load', () => {
  renderProducts();
});
