document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand text-primary" href="../../index.html">
                        <i class="fas fa-tools me-2"></i>iLoveTools
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-dark" href="#" id="textDropdown" role="button" data-bs-toggle="dropdown">
                                    <i class="fas fa-font me-1"></i>Text Tools
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="../text/word-counter.html">Word Counter</a></li>
                                    <li><a class="dropdown-item" href="../text/character-counter.html">Character Counter</a></li>
                                    <li><a class="dropdown-item" href="../text/text-case-converter.html">Text Case Converter</a></li>
                                    <li><a class="dropdown-item" href="../text/text-reverser.html">Text Reverser</a></li>
                                    <li><a class="dropdown-item" href="../text/text-to-binary.html">Text to Binary</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-dark" href="#" id="imageDropdown" role="button" data-bs-toggle="dropdown">
                                    <i class="fas fa-image me-1"></i>Image Tools
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="../image/image-to-png.html">Image to PNG</a></li>
                                    <li><a class="dropdown-item" href="../image/image-to-jpg.html">Image to JPG</a></li>
                                    <li><a class="dropdown-item" href="../image/image-resizer.html">Image Resizer</a></li>
                                    <li><a class="dropdown-item" href="../image/image-compressor.html">Image Compressor</a></li>
                                    <li><a class="dropdown-item" href="../image/image-cropper.html">Image Cropper</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-dark" href="#" id="developerDropdown" role="button" data-bs-toggle="dropdown">
                                    <i class="fas fa-code me-1"></i>Developer Tools
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="../developer/json-formatter.html">JSON Formatter</a></li>
                                    <li><a class="dropdown-item" href="../developer/json-validator.html">JSON Validator</a></li>
                                    <li><a class="dropdown-item" href="../developer/json-to-xml.html">JSON to XML</a></li>
                                    <li><a class="dropdown-item" href="../developer/xml-to-json.html">XML to JSON</a></li>
                                    <li><a class="dropdown-item" href="../developer/json-to-yaml.html">JSON to YAML</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-dark" href="#" id="securityDropdown" role="button" data-bs-toggle="dropdown">
                                    <i class="fas fa-shield-alt me-1"></i>Security Tools
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="../security/password-generator.html">Password Generator</a></li>
                                    <li><a class="dropdown-item" href="../security/password-strength.html">Password Strength</a></li>
                                    <li><a class="dropdown-item" href="../security/hash-generator.html">Hash Generator</a></li>
                                    <li><a class="dropdown-item" href="../security/base64-encoder.html">Base64 Encoder</a></li>
                                    <li><a class="dropdown-item" href="../security/base64-decoder.html">Base64 Decoder</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-dark" href="#" id="financeDropdown" role="button" data-bs-toggle="dropdown">
                                    <i class="fas fa-calculator me-1"></i>Finance Tools
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="../finance/currency-converter.html">Currency Converter</a></li>
                                    <li><a class="dropdown-item" href="../finance/loan-calculator.html">Loan Calculator</a></li>
                                    <li><a class="dropdown-item" href="../finance/interest-calculator.html">Interest Calculator</a></li>
                                    <li><a class="dropdown-item" href="../finance/mortgage-calculator.html">Mortgage Calculator</a></li>
                                    <li><a class="dropdown-item" href="../finance/investment-calculator.html">Investment Calculator</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search tools..." id="searchInput">
                            <button class="btn btn-outline-primary" type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        `;

        // Add search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const searchTerm = this.value.toLowerCase();
                    const toolLinks = document.querySelectorAll('.dropdown-item');
                    
                    toolLinks.forEach(link => {
                        const toolName = link.textContent.toLowerCase();
                        if (toolName.includes(searchTerm)) {
                            link.style.display = 'block';
                        } else {
                            link.style.display = 'none';
                        }
                    });
                }
            });
        }
    }
}); 