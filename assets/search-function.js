
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("product-search-input");
    const searchButton = document.getElementById("product-search-button");
    const searchResultsGrid = document.getElementById("search-results-grid");
    const searchResultsContainer = document.querySelector(".search-results");

    searchButton.addEventListener("click", async () => {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;

        // Fetch all products to search
        const response = await fetch('/collections/all/products.json');
        const data = await response.json();

        // Filter products by name
        const matchingProducts = data.products.filter(product =>
            product.title.toLowerCase().includes(query)
        );

        // Display results
        searchResultsGrid.innerHTML = '';
        if (matchingProducts.length > 0) {
            matchingProducts.forEach(product => {
                const productHTML = `
                    <div class="product-card">
                      <a href="/products/${product.handle}">
                        <img src="${product.images[0].src}" alt="${product.title}" />
                        <h4>${product.title}</h4>
                      </a>
                    </div>`;
                searchResultsGrid.innerHTML += productHTML;
            });
            searchResultsContainer.style.display = 'block';
        } else {
            searchResultsGrid.innerHTML = '<p>No products found</p>';
            searchResultsContainer.style.display = 'block';
        }
    });
});