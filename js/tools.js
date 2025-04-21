const toolsData = {
    image: [
        {
            id: 'image-to-png',
            title: 'Image to PNG Converter',
            description: 'Convert any image format to PNG with high quality.',
            icon: 'fas fa-image',
            link: 'tools/image/image-to-png.html'
        },
        {
            id: 'image-to-jpg',
            title: 'Image to JPG Converter',
            description: 'Convert images to JPG format with customizable quality.',
            icon: 'fas fa-file-image',
            link: 'tools/image/image-to-jpg.html'
        },
        {
            id: 'image-resizer',
            title: 'Image Resizer',
            description: 'Resize images while maintaining aspect ratio.',
            icon: 'fas fa-expand-arrows-alt',
            link: 'tools/image/image-resizer.html'
        },
        {
            id: 'image-compressor',
            title: 'Image Compressor',
            description: 'Compress images without losing quality.',
            icon: 'fas fa-compress-arrows-alt',
            link: 'tools/image/image-compressor.html'
        },
        {
            id: 'image-cropper',
            title: 'Image Cropper',
            description: 'Crop images to any size and aspect ratio.',
            icon: 'fas fa-crop',
            link: 'tools/image/image-cropper.html'
        },
        {
            id: 'image-to-base64',
            title: 'Image to Base64',
            description: 'Convert images to Base64 string format.',
            icon: 'fas fa-code',
            link: 'tools/image/image-to-base64.html'
        },
        {
            id: 'webp-to-png',
            title: 'WebP to PNG Converter',
            description: 'Convert WebP images to PNG format.',
            icon: 'fas fa-exchange-alt',
            link: 'tools/image/webp-to-png.html'
        },
        {
            id: 'gif-maker',
            title: 'GIF Maker',
            description: 'Create animated GIFs from images or videos.',
            icon: 'fas fa-film',
            link: 'tools/image/gif-maker.html'
        },
        {
            id: 'qr-code-generator',
            title: 'QR Code Generator',
            description: 'Generate QR codes for URLs, text, and more.',
            icon: 'fas fa-qrcode',
            link: 'tools/image/qr-code-generator.html'
        },
        {
            id: 'screenshot-to-pdf',
            title: 'Screenshot to PDF',
            description: 'Convert screenshots to PDF documents.',
            icon: 'fas fa-file-pdf',
            link: 'tools/image/screenshot-to-pdf.html'
        },
        {
            id: 'image-to-pdf',
            title: 'Image to PDF',
            description: 'Convert images to PDF document with custom layout options',
            icon: 'fa-file-pdf',
            link: 'tools/image/image-to-pdf.html'
        }
    ],
    seo: [
        {
            id: 'meta-tag-generator',
            title: 'Meta Tag Generator',
            description: 'Generate optimized meta tags for your website.',
            icon: 'fas fa-tags',
            link: 'tools/seo/meta-tag-generator.html'
        },
        {
            id: 'keyword-density',
            title: 'Keyword Density Checker',
            description: 'Analyze keyword density in your content.',
            icon: 'fas fa-chart-bar',
            link: 'tools/seo/keyword-density.html'
        },
        {
            id: 'sitemap-generator',
            title: 'Sitemap Generator',
            description: 'Create XML sitemaps for your website.',
            icon: 'fas fa-sitemap',
            link: 'tools/seo/sitemap-generator.html'
        },
        {
            id: 'robots-txt',
            title: 'Robots.txt Generator',
            description: 'Generate robots.txt files for your website.',
            icon: 'fas fa-robot',
            link: 'tools/seo/robots-txt.html'
        },
        {
            id: 'google-index',
            title: 'Google Index Checker',
            description: 'Check if your pages are indexed by Google.',
            icon: 'fab fa-google',
            link: 'tools/seo/google-index.html'
        },
        {
            id: 'domain-authority',
            title: 'Domain Authority Checker',
            description: 'Check domain authority and metrics.',
            icon: 'fas fa-globe',
            link: 'tools/seo/domain-authority.html'
        },
        {
            id: 'backlink-checker',
            title: 'Backlink Checker',
            description: 'Analyze backlinks to your website.',
            icon: 'fas fa-link',
            link: 'tools/seo/backlink-checker.html'
        },
        {
            id: 'page-speed',
            title: 'Page Speed Checker',
            description: 'Check your website loading speed.',
            icon: 'fas fa-tachometer-alt',
            link: 'tools/seo/page-speed.html'
        },
        {
            id: 'xml-validator',
            title: 'XML Sitemap Validator',
            description: 'Validate your XML sitemap files.',
            icon: 'fas fa-check-circle',
            link: 'tools/seo/xml-validator.html'
        },
        {
            id: 'mobile-friendly',
            title: 'Mobile-Friendly Test',
            description: 'Test if your website is mobile-friendly.',
            icon: 'fas fa-mobile-alt',
            link: 'tools/seo/mobile-friendly.html'
        }
    ],
    text: [
        {
            id: 'word-counter',
            title: 'Word Counter',
            description: 'Count words, characters, and sentences in text.',
            icon: 'fas fa-calculator',
            link: 'tools/text/word-counter.html'
        },
        {
            id: 'character-counter',
            title: 'Character Counter',
            description: 'Count characters in your text.',
            icon: 'fas fa-text-width',
            link: 'tools/text/character-counter.html'
        },
        {
            id: 'case-converter',
            title: 'Case Converter',
            description: 'Convert text between different cases.',
            icon: 'fas fa-font',
            link: 'tools/text/case-converter.html'
        },
        {
            id: 'plagiarism-checker',
            title: 'Plagiarism Checker',
            description: 'Check text for plagiarism.',
            icon: 'fas fa-copy',
            link: 'tools/text/plagiarism-checker.html'
        },
        {
            id: 'grammar-checker',
            title: 'Grammar Checker',
            description: 'Check and correct grammar in text.',
            icon: 'fas fa-spell-check',
            link: 'tools/text/grammar-checker.html'
        },
        {
            id: 'text-to-speech',
            title: 'Text to Speech',
            description: 'Convert text to speech.',
            icon: 'fas fa-volume-up',
            link: 'tools/text/text-to-speech.html'
        },
        {
            id: 'speech-to-text',
            title: 'Speech to Text',
            description: 'Convert spoken words to text using your microphone',
            icon: 'fa-microphone',
            link: 'tools/text/speech-to-text.html'
        },
        {
            id: 'url-encoder',
            title: 'URL Encoder/Decoder',
            description: 'Encode and decode URLs.',
            icon: 'fas fa-link',
            link: 'tools/text/url-encoder.html'
        },
        {
            id: 'fancy-text',
            title: 'Fancy Text Generator',
            description: 'Generate fancy text styles.',
            icon: 'fas fa-magic',
            link: 'tools/text/fancy-text.html'
        },
        {
            id: 'random-text',
            title: 'Random Text Generator',
            description: 'Generate random text for testing.',
            icon: 'fas fa-random',
            link: 'tools/text/random-text.html'
        }
    ],
    developer: [
        {
            id: 'json-formatter',
            title: 'JSON Formatter',
            description: 'Format and validate JSON data.',
            icon: 'fas fa-code',
            link: 'tools/developer/json-formatter.html'
        },
        {
            id: 'html-to-markdown',
            title: 'HTML to Markdown',
            description: 'Convert HTML to Markdown format.',
            icon: 'fab fa-markdown',
            link: 'tools/developer/html-to-markdown.html'
        },
        {
            id: 'css-minifier',
            title: 'CSS Minifier',
            description: 'Minify CSS code.',
            icon: 'fab fa-css3',
            link: 'tools/developer/css-minifier.html'
        },
        {
            id: 'js-minifier',
            title: 'JavaScript Minifier',
            description: 'Minify JavaScript code.',
            icon: 'fab fa-js',
            link: 'tools/developer/js-minifier.html'
        },
        {
            id: 'sql-formatter',
            title: 'SQL Formatter',
            description: 'Format SQL queries.',
            icon: 'fas fa-database',
            link: 'tools/developer/sql-formatter.html'
        },
        {
            id: 'htaccess',
            title: 'HTACCESS Generator',
            description: 'Generate .htaccess redirect rules.',
            icon: 'fas fa-server',
            link: 'tools/developer/htaccess.html'
        },
        {
            id: 'markdown-to-html',
            title: 'Markdown to HTML',
            description: 'Convert Markdown to HTML.',
            icon: 'fab fa-html5',
            link: 'tools/developer/markdown-to-html.html'
        },
        {
            id: 'color-picker',
            title: 'Color Code Picker',
            description: 'Pick and convert color codes.',
            icon: 'fas fa-palette',
            link: 'tools/developer/color-picker.html'
        },
        {
            id: 'base64',
            title: 'Base64 Encoder/Decoder',
            description: 'Encode and decode Base64 strings.',
            icon: 'fas fa-exchange-alt',
            link: 'tools/developer/base64.html'
        },
        {
            id: 'ip-lookup',
            title: 'IP Address Lookup',
            description: 'Look up IP address information.',
            icon: 'fas fa-network-wired',
            link: 'tools/developer/ip-lookup.html'
        }
    ],
    calculator: [
        {
            id: 'percentage',
            title: 'Percentage Calculator',
            description: 'Calculate percentages easily.',
            icon: 'fas fa-percent',
            link: 'tools/calculator/percentage.html'
        },
        {
            id: 'age',
            title: 'Age Calculator',
            description: 'Calculate age from birth date.',
            icon: 'fas fa-birthday-cake',
            link: 'tools/math/age-calculator.html'
        },
        {
            id: 'bmi',
            title: 'BMI Calculator',
            description: 'Calculate Body Mass Index.',
            icon: 'fas fa-weight',
            link: 'tools/math/bmi-calculator.html'
        },
        {
            id: 'loan-emi',
            title: 'Loan EMI Calculator',
            description: 'Calculate loan EMI payments.',
            icon: 'fas fa-calculator',
            link: 'tools/math/loan-emi-calculator.html'
        },
        {
            id: 'scientific',
            title: 'Scientific Calculator',
            description: 'Advanced scientific calculations.',
            icon: 'fas fa-square-root-alt',
            link: 'tools/math/scientific-calculator.html'
        },
        {
            id: 'discount',
            title: 'Discount Calculator',
            description: 'Calculate discounts and savings.',
            icon: 'fas fa-tags',
            link: 'tools/math/discount-calculator.html'
        },
        {
            id: 'currency',
            title: 'Currency Converter',
            description: 'Convert between currencies.',
            icon: 'fas fa-money-bill-wave',
            link: 'tools/math/currency-converter.html'
        },
        {
            id: 'time-zone',
            title: 'Time Zone Converter',
            description: 'Convert between time zones.',
            icon: 'fas fa-clock',
            link: 'tools/math/time-zone-converter.html'
        },
        {
            id: 'binary-decimal',
            title: 'Binary to Decimal',
            description: 'Convert between binary and decimal.',
            icon: 'fas fa-hashtag',
            link: 'tools/math/binary-converter.html'
        },
        {
            id: 'tip',
            title: 'Tip Calculator',
            description: 'Calculate tips and split bills.',
            icon: 'fas fa-utensils',
            link: 'tools/math/tip-calculator.html'
        }
    ],
    converter: [
        {
            id: 'length',
            title: 'Length Converter',
            description: 'Convert between length units.',
            icon: 'fas fa-ruler',
            link: 'tools/converter/length.html'
        },
        {
            id: 'weight',
            title: 'Weight Converter',
            description: 'Convert between weight units.',
            icon: 'fas fa-weight',
            link: 'tools/converter/weight.html'
        },
        {
            id: 'speed',
            title: 'Speed Converter',
            description: 'Convert between speed units.',
            icon: 'fas fa-tachometer-alt',
            link: 'tools/converter/speed.html'
        },
        {
            id: 'temperature',
            title: 'Temperature Converter',
            description: 'Convert between temperature units.',
            icon: 'fas fa-thermometer-half',
            link: 'tools/converter/temperature.html'
        },
        {
            id: 'volume',
            title: 'Volume Converter',
            description: 'Convert between volume units.',
            icon: 'fas fa-flask',
            link: 'tools/converter/volume.html'
        },
        {
            id: 'data-storage',
            title: 'Data Storage Converter',
            description: 'Convert between data storage units.',
            icon: 'fas fa-hdd',
            link: 'tools/converter/data-storage.html'
        },
        {
            id: 'energy',
            title: 'Energy Converter',
            description: 'Convert between energy units.',
            icon: 'fas fa-bolt',
            link: 'tools/converter/energy.html'
        },
        {
            id: 'pressure',
            title: 'Pressure Converter',
            description: 'Convert between pressure units.',
            icon: 'fas fa-compress-arrows-alt',
            link: 'tools/converter/pressure.html'
        },
        {
            id: 'fuel-efficiency',
            title: 'Fuel Efficiency Converter',
            description: 'Convert between fuel efficiency units.',
            icon: 'fas fa-gas-pump',
            link: 'tools/converter/fuel-efficiency.html'
        },
        {
            id: 'angle',
            title: 'Angle Converter',
            description: 'Convert between angle units.',
            icon: 'fas fa-angle-double-right',
            link: 'tools/converter/angle.html'
        }
    ],
    security: [
        {
            id: 'md5',
            title: 'MD5 Hash Generator',
            description: 'Generate MD5 hashes.',
            icon: 'fas fa-fingerprint',
            link: 'tools/security/md5.html'
        },
        {
            id: 'sha256',
            title: 'SHA256 Hash Generator',
            description: 'Generate SHA256 hashes.',
            icon: 'fas fa-lock',
            link: 'tools/security/sha256.html'
        },
        {
            id: 'password',
            title: 'Password Generator',
            description: 'Generate secure passwords.',
            icon: 'fas fa-key',
            link: 'tools/security/password.html'
        },
        {
            id: 'random-string',
            title: 'Random String Generator',
            description: 'Generate random strings.',
            icon: 'fas fa-random',
            link: 'tools/security/random-string.html'
        },
        {
            id: 'url-shortener',
            title: 'URL Shortener',
            description: 'Shorten long URLs.',
            icon: 'fas fa-link',
            link: 'tools/security/url-shortener.html'
        },
        {
            id: 'ip-geolocation',
            title: 'IP Geolocation Finder',
            description: 'Find location from IP address.',
            icon: 'fas fa-map-marker-alt',
            link: 'tools/security/ip-geolocation.html'
        },
        {
            id: 'ip-tracker',
            title: 'IP Address Tracker',
            description: 'Track and display location information for any IP address',
            icon: 'fas fa-search-location',
            link: 'tools/security/ip-tracker.html'
        },
        {
            id: 'ssl-checker',
            title: 'SSL Certificate Checker',
            description: 'Check SSL certificate validity.',
            icon: 'fas fa-shield-alt',
            link: 'tools/security/ssl-checker.html'
        },
        {
            id: 'whois',
            title: 'Whois Lookup',
            description: 'Look up domain information.',
            icon: 'fas fa-search',
            link: 'tools/security/whois.html'
        },
        {
            id: 'http-headers',
            title: 'HTTP Headers Checker',
            description: 'Check HTTP headers.',
            icon: 'fas fa-heading',
            link: 'tools/security/http-headers.html'
        },
        {
            id: 'privacy-policy',
            title: 'Privacy Policy Generator',
            description: 'Generate privacy policies.',
            icon: 'fas fa-file-contract',
            link: 'tools/security/privacy-policy.html'
        }
    ],
    social: [
        {
            id: 'youtube-thumbnail',
            title: 'YouTube Thumbnail Downloader',
            description: 'Download YouTube video thumbnails in high quality.',
            icon: 'fab fa-youtube',
            link: 'tools/social/youtube-thumbnail-downloader.html'
        },
        {
            id: 'instagram-downloader',
            title: 'Instagram Photo Downloader',
            description: 'Download photos from public Instagram posts.',
            icon: 'fab fa-instagram',
            link: 'tools/social/instagram-photo-downloader.html'
        },
        {
            id: 'twitter-video',
            title: 'Twitter Video Downloader',
            description: 'Download Twitter videos.',
            icon: 'fab fa-twitter',
            link: 'tools/social/twitter-video-downloader.html'
        },
        {
            id: 'facebook-video',
            title: 'Facebook Video Downloader',
            description: 'Download Facebook videos.',
            icon: 'fab fa-facebook',
            link: 'tools/social/facebook-video-downloader.html'
        },
        {
            id: 'youtube-video',
            title: 'YouTube Video Downloader',
            description: 'Download YouTube videos in multiple formats and qualities.',
            icon: 'fab fa-youtube',
            link: 'tools/social/youtube-video-downloader.html'
        },
        {
            id: 'tiktok-video',
            title: 'TikTok Video Downloader',
            description: 'Download TikTok videos.',
            icon: 'fab fa-tiktok',
            link: 'tools/social/tiktok-video.html'
        },
        {
            id: 'youtube-tags',
            title: 'YouTube Tags Extractor',
            description: 'Extract tags from YouTube videos.',
            icon: 'fas fa-tags',
            link: 'tools/social/youtube-tags.html'
        },
        {
            id: 'hashtag-generator',
            title: 'Hashtag Generator',
            description: 'Generate hashtags for social media.',
            icon: 'fas fa-hashtag',
            link: 'tools/social/hashtag-generator.html'
        },
        {
            id: 'social-post',
            title: 'Social Media Post Generator',
            description: 'Generate social media posts.',
            icon: 'fas fa-share-alt',
            link: 'tools/social/social-post.html'
        },
        {
            id: 'emoji-keyboard',
            title: 'Emoji Keyboard',
            description: 'Copy and paste emojis.',
            icon: 'far fa-smile',
            link: 'tools/social/emoji-keyboard.html'
        },
        {
            id: 'twitter-counter',
            title: 'Twitter Character Counter',
            description: 'Count characters for Twitter posts.',
            icon: 'fas fa-text-width',
            link: 'tools/social/twitter-counter.html'
        }
    ],
    misc: [
        {
            id: 'barcode',
            title: 'Barcode Generator',
            description: 'Generate different types of barcodes for products, inventory and shipping',
            icon: 'fa-barcode',
            link: 'tools/misc/barcode.html'
        },
        {
            id: 'meme',
            title: 'Meme Generator',
            description: 'Create custom memes.',
            icon: 'fas fa-laugh',
            link: 'tools/misc/meme.html'
        },
        {
            id: 'resume',
            title: 'Resume Builder',
            description: 'Create professional resumes.',
            icon: 'fas fa-file-alt',
            link: 'tools/misc/resume-builder.html'
        },
        {
            id: 'invoice',
            title: 'Invoice Generator',
            description: 'Generate professional invoices.',
            icon: 'fas fa-file-invoice',
            link: 'tools/misc/invoice-generator.html'
        },
        {
            id: 'business-name',
            title: 'Business Name Generator',
            description: 'Generate business name ideas.',
            icon: 'fas fa-building',
            link: 'tools/misc/business-name.html'
        },
        {
            id: 'lottery',
            title: 'Lottery Number Generator',
            description: 'Generate lottery numbers.',
            icon: 'fas fa-ticket-alt',
            link: 'tools/misc/lottery.html'
        },
        {
            id: 'coin-flip',
            title: 'Flip a Coin',
            description: 'Flip a virtual coin.',
            icon: 'fas fa-coins',
            link: 'tools/misc/coin-flip.html'
        },
        {
            id: 'random-number',
            title: 'Random Number Generator',
            description: 'Generate random numbers.',
            icon: 'fas fa-dice',
            link: 'tools/misc/random-number.html'
        },
        {
            id: 'dice-roller',
            title: 'Dice Roller',
            description: 'Roll virtual dice.',
            icon: 'fas fa-dice-six',
            link: 'tools/misc/dice-roller.html'
        },
        {
            id: 'speed-test',
            title: 'Internet Speed Test',
            description: 'Test your internet speed.',
            icon: 'fas fa-tachometer-alt',
            link: 'tools/misc/speed-test.html'
        }
    ],
    pdf: [
        {
            id: 'word-to-pdf',
            title: 'Word to PDF',
            description: 'Convert Word documents to PDF format',
            icon: 'file-word',
            link: 'tools/pdf/word-to-pdf.html'
        },
        {
            id: 'pdf-to-word',
            title: 'PDF to Word',
            description: 'Convert PDF documents to Word format',
            icon: 'file-pdf',
            link: 'tools/pdf/pdf-to-word.html'
        },
        {
            id: 'pdf-to-image',
            title: 'PDF to Image',
            description: 'Convert PDF pages to images with multiple download options',
            icon: 'file-image',
            link: 'tools/image/pdf-to-image.html'
        },
        {
            id: 'pdf-compressor',
            title: 'PDF Compressor',
            description: 'Compress PDF files with adjustable compression levels',
            icon: 'compress-arrows-alt',
            link: 'tools/pdf/pdf-compressor.html'
        },
        {
            id: 'pdf-unlock',
            title: 'PDF Unlock',
            description: 'Remove password protection from PDF files',
            icon: 'fa-unlock-alt',
            link: 'tools/pdf/pdf-unlock.html'
        },
        {
            id: 'pdf-secure',
            title: 'PDF Secure',
            description: 'Add password protection to PDF files',
            icon: 'fa-lock',
            link: 'tools/pdf/pdf-secure.html'
        }
    ],
    document: [
        {
            id: 'pdf-merge',
            title: 'PDF Merge',
            description: 'Combine multiple PDF files into one document',
            icon: 'fa-object-group',
            link: 'tools/pdf/pdf-merge.html'
        },
        {
            id: 'pdf-split',
            title: 'PDF Split',
            description: 'Extract pages from PDF files',
            icon: 'fa-cut',
            link: 'tools/pdf/pdf-split.html'
        },
        {
            id: 'pdf-unlock',
            title: 'PDF Unlock',
            description: 'Remove password protection from PDF files',
            icon: 'fa-unlock-alt',
            link: 'tools/pdf/pdf-unlock.html'
        },
        {
            id: 'pdf-secure',
            title: 'PDF Secure',
            description: 'Add password protection to PDF files',
            icon: 'fa-lock',
            link: 'tools/pdf/pdf-secure.html'
        },
        {
            id: 'ebook-creator',
            title: 'E-book Creator',
            description: 'Create and download e-books in EPUB format',
            icon: 'fa-book',
            link: 'tools/document/ebook-creator.html'
        }
    ]
}; 

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toolsData };
} 