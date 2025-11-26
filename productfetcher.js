// Q6: Fetch and display product data

async function displayProducts() {
  try {
    const resp = await fetch("https://fakestoreapi.com/products");
    if (!resp.ok) throw new Error("Network error");
    const products = await resp.json();
    products.forEach(p => {
      console.log(`Product: ${p.title}\nPrice: $${p.price}\nImage: ${p.image}`);
    });
    // Optional: Create product cards
    /*
    products.forEach(p => {
      const card = document.createElement('div');
      card.innerHTML = `<h3>${p.title}</h3><img src="${p.image}" style="max-width:150px"/><div>$${p.price}</div>`;
      document.body.appendChild(card);
    });
    */
  } catch (err) {
    console.log("Failed to load products. Please try again.");
  }
}

displayProducts();
