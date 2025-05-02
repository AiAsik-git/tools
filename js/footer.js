document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="bg-light text-dark py-4 mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mb-4 mb-md-0">
                            <h5 class="mb-3">About iLoveTools</h5>
                            <p>iLoveTools is a comprehensive collection of free online tools designed to make your life easier. From text manipulation to image processing, we've got you covered.</p>
                        </div>
                        <div class="col-md-4 mb-4 mb-md-0">
                            <h5 class="mb-3">Quick Links</h5>
                            <ul class="list-unstyled">
                                <li><a href="../../index.html" class="text-dark">Home</a></li>
                                <li><a href="#" class="text-dark">Privacy Policy</a></li>
                                <li><a href="#" class="text-dark">Terms of Service</a></li>
                                <li><a href="#" class="text-dark">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h5 class="mb-3">Connect With Us</h5>
                            <div class="social-links">
                                <a href="#" class="text-dark me-3"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="text-dark me-3"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="text-dark me-3"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="text-dark"><i class="fab fa-github"></i></a>
                            </div>
                            <div class="mt-3">
                                <p class="mb-1">Subscribe to our newsletter</p>
                                <form class="d-flex">
                                    <input type="email" class="form-control me-2" placeholder="Your email">
                                    <button class="btn btn-primary" type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <hr class="my-4">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start">
                            <p class="mb-0">&copy; ${new Date().getFullYear()} iLoveTools. All rights reserved.</p>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <p class="mb-0">Made with <i class="fas fa-heart text-danger"></i> by @Ai for People </p>
                        </div>
                    </div>
                </div>
            </footer>
        `;

        // Add newsletter subscription functionality
        const newsletterForm = footerContainer.querySelector('form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = this.querySelector('input[type="email"]');
                const email = emailInput.value;
                
                if (email && email.includes('@')) {
                   
                    // In a real application, you would send this to your backend
                    alert('Thank you for subscribing to our newsletter!');
                    emailInput.value = '';
                } else {
                    alert('Please enter a valid email address.');
                }
            });
        }
    }
}); 