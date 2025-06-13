---
layout: default
title: UTMFW
---

<!-- Hero Section -->
<section id="home" class="hero-background text-white py-20 md:py-32 relative overflow-hidden">
    <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Unified Network Security: Empowering Your Defenses with FOSS
        </h1>
        <p class="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
            UTMFW (formerly ComixWall) goes beyond conventional protection, providing a comprehensive next-generation defense solution complete with SSL inspection, powered by its innovative SSLproxy.
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="https://github.com/sonertari/UTMFW#download" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Download UTMFW
            </a>
            <a href="https://github.com/sonertari/UTMFW" class="inline-block bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                View on GitHub
            </a>
        </div>
    </div>
    <!-- Abstract background pattern/image -->
    <div class="absolute inset-0 z-0 opacity-30" style="background-image: url('{{ "/assets/images/background.png" | relative_url }}'); background-size: cover; background-position: center;"></div>
</section>

<!-- What is UTMFW Section -->
<section id="what-is-utmfw" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What is UTMFW?</h2>
        <p class="text-lg max-w-2xl mx-auto text-gray-600 mb-12">
            UTMFW is the <em>only</em> FOSS next-generation firewall built specifically for OpenBSD. It provides comprehensive UTM services with SSL inspection, IDS/IPS, Web filtering, Virus and Spam scanner, E-mail filtering, and much more. UTMFW's comprehensive UTM services are managed through its intuitive web and Android interfaces for seamless control.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-8 bg-gray-50 rounded-lg shadow-md flex flex-col items-center text-center">
                <i class="fas fa-shield-alt text-blue-600 text-5xl mb-4"></i>
                <h3 class="text-xl font-semibold mb-3">Threat Prevention</h3>
                <p class="text-gray-700">Proactive defense against malware, intrusion attempts, and various cyber threats.</p>
            </div>
            <div class="p-8 bg-gray-50 rounded-lg shadow-md flex flex-col items-center text-center">
                <i class="fas fa-filter text-blue-600 text-5xl mb-4"></i>
                <h3 class="text-xl font-semibold mb-3">Content Filtering</h3>
                <p class="text-gray-700">Granular control over web access and application usage to enforce policy.</p>
            </div>
            <div class="p-8 bg-gray-50 rounded-lg shadow-md flex flex-col items-center text-center">
                <i class="fas fa-lock text-blue-600 text-5xl mb-4"></i>
                <h3 class="text-xl font-semibold mb-3">SSL Decryption</h3>
                <p class="text-gray-700">Visibility into encrypted traffic for enhanced security inspection.</p>
            </div>
        </div>
    </div>
</section>

<!-- Screenshots Section (Image Carousel) -->
<section id="screenshots" class="py-16 md:py-24 bg-gray-100 relative overflow-hidden">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12">UTMFW in Action</h2>
        <p class="text-lg max-w-2xl mx-auto text-gray-600 mb-10">
            Get a glimpse of UTMFW's powerful and intuitive interfaces, designed for seamless network security management on both web and mobile. Click an image to zoom and pan!
        </p>

        <div id="image-carousel" class="relative w-full max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
            <!-- Slides Container -->
            <div class="carousel-slides flex transition-transform duration-500 ease-in-out" style="width: 100%; height: auto;">
                <!-- Slide 1 (Web Interface) -->
                <div class="carousel-slide flex-shrink-0 w-full p-6 bg-white flex flex-col items-center">
                    <img src="/assets/images/utmfw-dashboard.png" alt="UTMFW Web Interface" class="zoomable-image-link w-full h-96 object-cover rounded-md mb-4 border border-gray-200" data-img-src="/assets/images/utmfw-dashboard.png">
                    <h3 class="text-xl font-semibold text-blue-700 mb-2">Web Interface Dashboard</h3>
                    <p class="text-gray-700">A powerful, comprehensive dashboard for managing all your UTMFW services from any web browser.</p>
                </div>
                <!-- Slide 2 (Pie Chart Graph) -->
                <div class="carousel-slide flex-shrink-0 w-full p-6 bg-white flex flex-col items-center">
                    <img src="/assets/images/utmfw-pie-chart.png" alt="UTMFW Analytics Graph" class="zoomable-image-link w-full h-96 object-cover rounded-md mb-4 border border-gray-200" data-img-src="/assets/images/utmfw-pie-chart.png">
                    <h3 class="text-xl font-semibold text-blue-700 mb-2">Detailed Analytics & Reports</h3>
                    <p class="text-gray-700">Visualize network activity and security posture with comprehensive graphs and customizable reports.</p>
                </div>
                <!-- Slide 3 (Web Filter Denied Page) -->
                <div class="carousel-slide flex-shrink-0 w-full p-6 bg-white flex flex-col items-center">
                    <img src="/assets/images/utmfw-denied-page.png" alt="Web Filter Denied Page" class="zoomable-image-link w-full h-96 object-cover rounded-md mb-4 border border-gray-200" data-img-src="/assets/images/utmfw-denied-page.png">
                    <h3 class="text-xl font-semibold text-blue-700 mb-2">Customizable Denied Page</h3>
                    <p class="text-gray-700">See how UTMFW handles blocked content with a customizable web filter denied page for users.</p>
                </div>
                <!-- Slide 4 (PFRE - PF Rule Editor) -->
                <div class="carousel-slide flex-shrink-0 w-full p-6 bg-white flex flex-col items-center">
                    <img src="/assets/images/utmfw-pfre.png" alt="PF Rule Editor" class="zoomable-image-link w-full h-96 object-cover rounded-md mb-4 border border-gray-200" data-img-src="/assets/images/utmfw-pfre.png">
                    <h3 class="text-xl font-semibold text-blue-700 mb-2">PF Rule Editor (PFRE)</h3>
                    <p class="text-gray-700">Manage and fine-tune your firewall rules with an intuitive interface for OpenBSD's PF.</p>
                </div>
                <!-- Slide 5 (Command Line Console) -->
                <div class="carousel-slide flex-shrink-0 w-full p-6 bg-white flex flex-col items-center">
                    <img src="/assets/images/utmfw-cli.png" alt="Command Line Interface" class="zoomable-image-link w-full h-96 object-cover rounded-md mb-4 border border-gray-200" data-img-src="/assets/images/utmfw-cli.png">
                    <h3 class="text-xl font-semibold text-blue-700 mb-2">Command Line Console</h3>
                    <p class="text-gray-700">For advanced users, direct control via the robust UTMFW command line interface.</p>
                </div>
                <!-- Slide 6 (Web Filter Statistics Bar Charts) -->
                <div class="carousel-slide flex-shrink-0 w-full p-6 bg-white flex flex-col items-center">
                    <img src="/assets/images/utmfw-bar-charts.png" alt="Web Filter Statistics Bar Charts" class="zoomable-image-link w-full h-96 object-cover rounded-md mb-4 border border-gray-200" data-img-src="/assets/images/utmfw-bar-charts.png">
                    <h3 class="text-xl font-semibold text-blue-700 mb-2">Web Filter Statistics</h3>
                    <p class="text-gray-700">View real-time web filtering statistics with clear and insightful bar charts.</p>
                </div>
                <!-- Slide 7 (RRD Graphs) -->
                <div class="carousel-slide flex-shrink-0 w-full p-6 bg-white flex flex-col items-center">
                    <img src="/assets/images/utmfw-rrd-graphs.png" alt="RRD Graphs" class="zoomable-image-link w-full h-96 object-cover rounded-md mb-4 border border-gray-200" data-img-src="/assets/images/utmfw-rrd-graphs.png">
                    <h3 class="text-xl font-semibold text-blue-700 mb-2">RRD Performance Graphs</h3>
                    <p class="text-gray-700">Monitor system performance and network usage over time with detailed RRD graphs.</p>
                </div>
            </div>

            <!-- Navigation Arrows -->
            <button class="carousel-prev absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-300 z-20 focus:outline-none">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="carousel-next absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-300 z-20 focus:outline-none">
                <i class="fas fa-chevron-right"></i>
            </button>

            <!-- Dots/Indicators -->
            <div class="carousel-dots absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                <!-- Dots will be generated by JavaScript -->
            </div>
        </div>
    </div>
</section>

<!-- Features Section -->
<section id="features" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Key Features of UTMFW</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <!-- Feature 1: SSL/TLS Inspection -->
            <div class="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
                <i class="fas fa-lock text-blue-600 text-4xl mb-4"></i>
                <h3 class="text-2xl font-semibold mb-3">SSL/TLS Inspection</h3>
                <p class="text-gray-700">Gain deep visibility into encrypted traffic for comprehensive security analysis and threat detection.</p>
            </div>
            <!-- Feature 2: Intrusion Detection & Prevention (IDS/IPS) -->
            <div class="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
                <i class="fas fa-shield-alt text-blue-600 text-4xl mb-4"></i>
                <h3 class="text-2xl font-semibold mb-3">IDS/IPS Capabilities</h3>
                <p class="text-gray-700">Detect and prevent various network intrusions and malicious activities in real-time.</p>
            </div>
            <!-- Feature 3: Content & Web Filtering -->
            <div class="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
                <i class="fas fa-filter text-blue-600 text-4xl mb-4"></i>
                <h3 class="text-2xl font-semibold mb-3">Content & Web Filtering</h3>
                <p class="text-gray-700">Control and filter web access, ensuring safe browsing and adherence to organizational policies.</p>
            </div>
            <!-- Feature 4: Virus & Spam Protection -->
            <div class="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
                <i class="fas fa-virus text-blue-600 text-4xl mb-4"></i>
                <h3 class="text-2xl font-semibold mb-3">Virus & Spam Protection</h3>
                <p class="text-gray-700">Comprehensive scanning for viruses and spam across network traffic and email.</p>
            </div>
            <!-- Feature 5: Email Filtering -->
            <div class="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
                <i class="fas fa-envelope-open-text text-blue-600 text-4xl mb-4"></i>
                <h3 class="text-2xl font-semibold mb-3">Advanced Email Filtering</h3>
                <p class="text-gray-700">Protect against phishing, malware, and other email-borne threats with robust filtering.</p>
            </div>
            <!-- Feature 6: Intuitive Management Interfaces -->
            <div class="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
                <i class="fas fa-mobile-alt text-blue-600 text-4xl mb-4"></i>
                <h3 class="text-2xl font-semibold mb-3">Web & Android Interfaces</h3>
                <p class="text-gray-700">Effortlessly manage and monitor your firewall from anywhere via dedicated web and Android UIs.</p>
            </div>
        </div>
    </div>
</section>

<!-- SSLproxy Section: Deep Dive -->
<section id="sslproxy" class="py-16 md:py-24 bg-blue-50">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">SSLproxy: Deep Dive into Encrypted Traffic</h2>
        <p class="text-lg max-w-3xl mx-auto text-gray-700 mb-8">
            At the heart of UTMFW's advanced security capabilities lies <strong>SSLproxy</strong>, a unique and powerful SSL/TLS inspection engine. Unlike traditional firewalls, SSLproxy provides unparalleled visibility into encrypted network traffic.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="flex justify-center">
                <img src="/assets/images/sslproxy-diagram.png" alt="SSLproxy Architectural Diagram (Placeholder)" class="zoomable-image-link w-full max-w-2xl h-auto rounded-lg shadow-xl border border-gray-200" data-img-src="/assets/images/sslproxy-diagram.png">
            </div>
            <div class="text-left p-6 bg-white rounded-lg shadow-md">
                <h3 class="text-2xl font-semibold text-blue-700 mb-3">Why SSLproxy is Unique</h3>
                <ul class="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                        <strong>Unrivaled Decryption:</strong> SSLproxy is the <em>only</em> SSL proxy specifically designed to decrypt and seamlessly divert encrypted packets to other programs for in-depth analysis. This unique feature enables a level of inspection unmatched by other FOSS solutions.
                    </li>
                    <li>
                        <strong>Comprehensive Threat Analysis:</strong> By making encrypted traffic visible, UTMFW can apply its full suite of security services – including IDS/IPS, web filtering, and antivirus scanning – to threats hidden within SSL/TLS sessions.
                    </li>
                    <li>
                        <strong>Privacy-Aware:</strong> While offering deep inspection, SSLproxy is designed with privacy considerations. It provides granular control over what traffic is inspected and how, allowing organizations to balance security needs with privacy policies.
                    </li>
                </ul>
            </div>
        </div>
        <p class="text-md max-w-3xl mx-auto text-gray-600 mt-8">
            SSLproxy’s integration ensures that UTMFW offers true next-generation firewall capabilities, protecting your network from sophisticated threats that leverage encryption to bypass security controls.
        </p>
    </div>
</section>

<!-- Sponsor Call to Action Section -->
<section id="sponsor" class="py-16 md:py-24 bg-blue-700 text-white text-center">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Become a Sponsor of UTMFW and SSLproxy!</h2>
        <p class="text-lg max-w-3xl mx-auto mb-10 opacity-90">
            Your support helps drive continuous development, maintenance, and innovation for this critical open-source security project.
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="https://github.com/sponsors/sonertari" class="inline-block bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                <i class="fab fa-github-sponsors mr-2"></i> GitHub Sponsors
            </a>
            <a href="https://buymeacoffee.com/sonertari" class="inline-block bg-yellow-400 text-gray-800 hover:bg-yellow-500 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                <i class="fas fa-mug-hot mr-2"></i> Buy me a coffee
            </a>
            <a href="https://thanks.dev/u/gh/sonertari" class="inline-block bg-green-500 text-white hover:bg-green-600 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                <i class="fas fa-heart mr-2"></i> Thanks.dev
            </a>
        </div>
    </div>
</section>

<!-- Download Section -->
<section id="download" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get UTMFW Today</h2>
        <p class="text-lg max-w-2xl mx-auto text-gray-600 mb-10">
            Ready to enhance your network security with UTMFW? Download the latest stable version or explore our installation guides to get started.
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="https://github.com/sonertari/UTMFW#download" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                <i class="fas fa-download mr-2"></i> Download Latest Version
            </a>
            <a href="https://github.com/sonertari/UTMFW#how-to-install" class="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Installation Guides
            </a>
        </div>
    </div>
</section>

<!-- Roadmap & Releases Section -->
<section id="roadmap-releases" class="py-16 md:py-24 bg-gray-100">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Roadmap & Latest Releases</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Project Roadmap Block -->
            <div class="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <h3 class="text-xl font-semibold text-blue-700 mb-2">UTMFW Project Roadmap</h3>
                <p class="text-sm text-gray-500 mb-3"><i class="fas fa-map-marked-alt mr-1"></i> Future Development</p>
                <p class="text-gray-700 mb-4">Explore the future of UTMFW! Our public roadmap outlines upcoming features, enhancements, and strategic directions, driven by community needs and security innovations.</p>
                <a href="https://github.com/sonertari?tab=projects" target="_blank" class="text-blue-600 hover:underline">View Full Roadmap <i class="fas fa-arrow-right ml-1 text-sm"></i></a>
            </div>
            <!-- Latest Release Block -->
            <div class="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <h3 class="text-xl font-semibold text-blue-700 mb-2">Latest Release: UTMFW v7.7</h3>
                <p class="text-sm text-gray-500 mb-3"><i class="fas fa-rocket mr-1"></i> Released: May 8, 2025</p>
                <p class="text-gray-700 mb-4">Discover the impactful updates in UTMFW v7.7, bringing significant performance boosts, enhanced security modules, and new capabilities to strengthen your defenses.</p>
                <a href="https://github.com/sonertari/UTMFW/releases" target="_blank" class="text-blue-600 hover:underline">Download v7.7 Now <i class="fas fa-arrow-right ml-1 text-sm"></i></a>
            </div>
        </div>
    </div>
</section>
