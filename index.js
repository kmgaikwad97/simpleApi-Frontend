<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.5/axios.min.js" integrity="sha512-nnNHpffPSgINrsR8ZAIgFUIMexORL5tPwsfktOTxVYSv+AUAILuFYWES8IHl+hhIhpFGlKvWFiz9ZEusrPcSBQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

// Make a request to the products API endpoint
axios.get('/api/products')
  .then(response => {
    // Handle the response from the API
    const products = response.data;

    // Render the products on your HTML page
    renderProducts(products);
  })
  .catch(error => console.error(error));



// Function to render products on the page
function renderProducts(products) {
    // Get the element where you want to render the products
    const productsContainer = document.getElementById('products');
  
    // Loop through each product and create an HTML element to display it
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p><p>Price: ${product.price}</p>`;
      productsContainer.appendChild(productElement);
    });
  }
