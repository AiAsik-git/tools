document.addEventListener('DOMContentLoaded', function() {
    const toolsGrid = document.getElementById('tools-grid');
    const toolSearch = document.getElementById('toolSearch');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    let currentCategory = 'all';
    let currentSearchTerm = '';
    
    // Function to create tool card HTML
    function createToolCard(tool) {
        return `
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="card tool-card h-100">
                    <div class="card-body">
                        <div class="text-center mb-3">
                            <i class="${tool.icon} fa-3x text-primary"></i>
                        </div>
                        <h5 class="card-title text-center">${tool.title}</h5>
                        <p class="card-text">${tool.description}</p>
                        <a href="${tool.link}" class="btn btn-primary mt-auto">Use Tool</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Function to filter and display tools
    function displayTools() {
        let filteredTools = [];
        
        // Get all tools from all categories
        if (currentCategory === 'all') {
            Object.values(toolsData).forEach(category => {
                filteredTools = filteredTools.concat(category);
            });
        } else {
            filteredTools = toolsData[currentCategory] || [];
        }
        
        // Apply search filter
        if (currentSearchTerm) {
            const searchTerm = currentSearchTerm.toLowerCase();
            filteredTools = filteredTools.filter(tool => 
                tool.title.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm)
            );
        }
        
        // Display tools
        toolsGrid.innerHTML = filteredTools.length > 0 
            ? filteredTools.map(createToolCard).join('')
            : '<div class="col-12 text-center"><p>No tools found matching your criteria.</p></div>';
    }
    
    // Event listener for search input
    toolSearch.addEventListener('input', function() {
        currentSearchTerm = this.value.trim();
        displayTools();
    });
    
    // Event listeners for category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Update current category
            currentCategory = this.getAttribute('data-category');
            // Reset search
            toolSearch.value = '';
            currentSearchTerm = '';
            // Display tools
            displayTools();
        });
    });
    
    // Check URL parameters for initial category or search
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const searchParam = urlParams.get('search');
    
    if (categoryParam && toolsData[categoryParam]) {
        currentCategory = categoryParam;
        document.querySelector(`.category-btn[data-category="${categoryParam}"]`).classList.add('active');
    }
    
    if (searchParam) {
        currentSearchTerm = searchParam;
        toolSearch.value = searchParam;
    }
    
    // Initial display of tools
    displayTools();
}); 