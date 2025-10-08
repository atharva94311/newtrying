<!DOCTYPE html>
<html lang="en">
<head>
    <script src="scripts.js"></script>
    <link rel="stylesheet" href="styles.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unsplash Clone</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body class="overflow-x-hidden">

    <div class="flex relative min-h-screen">
        <!-- Sidebar -->
        <aside id="sidebar" class="bg-[#1C1C1C] text-gray-200 w-64 fixed inset-y-0 left-0 transform -translate-x-full lg:translate-x-0 z-40">
            <div class="p-4">
                <a href="#" class="flex items-center space-x-2 text-white">
                    <svg class="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Unsplash</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
                    <span class="text-xl font-bold">Unsplash Clone</span>
                </a>
            </div>
            <nav class="mt-8 px-4">
                <h3 class="px-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">Explore</h3>
                <div class="mt-4 space-y-2">
                    <a href="#" id="photos-btn" class="flex items-center px-4 py-2 text-white bg-gray-700 rounded-md">
                        <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <span>Photos</span>
                    </a>
                    <a href="#" id="illustrations-btn" class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
                         <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                        <span>Illustrations</span>
                    </a>
                </div>
            </nav>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 lg:pl-64">
            <!-- Mobile Header / Top Bar -->
            <header class="lg:hidden flex items-center justify-between p-4 bg-[#1C1C1C] sticky top-0 z-30">
                <button id="menu-btn" class="text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
                 <a href="#" class="flex items-center space-x-2 text-white">
                    <svg class="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Unsplash</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
                </a>
                <div class="w-6"></div> <!-- Spacer -->
            </header>
            
            <main class="p-4 sm:p-6 lg:p-8">
                <!-- Navbar / Search Bar -->
                <div class="flex-1 sticky top-0 lg:top-auto z-20 bg-[#111111] py-4">
                     <div class="relative">
                        <input type="text" placeholder="Search photos and illustrations" class="w-full bg-[#1C1C1C] border border-gray-600 text-white rounded-lg p-4 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-500">
                        <svg class="w-6 h-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <!-- Category Nav -->
                    <nav class="mt-4 overflow-x-auto no-scrollbar">
                        <ul class="flex items-center space-x-6 text-gray-300 whitespace-nowrap">
                            <li><a href="#" class="inline-block py-2 nav-link-active text-white">Featured</a></li>
                            <li><a href="#" class="inline-block py-2 hover:text-white">Wallpapers</a></li>
                            <li><a href="#" class="inline-block py-2 hover:text-white">Nature</a></li>
                            <li><a href="#" class="inline-block py-2 hover:text-white">3D Renders</a></li>
                            <li><a href="#" class="inline-block py-2 hover:text-white">Travel</a></li>
                            <li><a href="#" class="inline-block py-2 hover:text-white">Architecture & Interiors</a></li>
                            <li><a href="#" class="inline-block py-2 hover:text-white">Film</a></li>
                            <li><a href="#" class="inline-block py-2 hover:text-white">People</a></li>
                        </ul>
                    </nav>
                </div>
               

                <!-- Photos Section -->
                <div id="photos-content">
                    <div class="my-8">
                        <div class="relative rounded-lg overflow-hidden bg-cover bg-center h-96" style="background-image: url('https://placehold.co/1200x400/000000/FFFFFF?text=Featured+Photo');">
                            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-8">
                                <h1 class="text-4xl md:text-5xl font-bold text-white">Unsplash</h1>
                                <p class="mt-4 text-lg text-gray-200 max-w-lg">The internet’s source for visuals.<br>Powered by creators everywhere.</p>
                            </div>
                        </div>
                    </div>
                    <div class="masonry-grid">
                        <!-- Images will be populated here. I am adding placeholders -->
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x400/333/FFF?text=Photo+1" alt="Placeholder 1" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x800/333/FFF?text=Photo+2" alt="Placeholder 2" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x450/333/FFF?text=Photo+3" alt="Placeholder 3" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x600/333/FFF?text=Photo+4" alt="Placeholder 4" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x700/333/FFF?text=Photo+5" alt="Placeholder 5" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x500/333/FFF?text=Photo+6" alt="Placeholder 6" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x900/333/FFF?text=Photo+7" alt="Placeholder 7" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x400/333/FFF?text=Photo+8" alt="Placeholder 8" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x550/333/FFF?text=Photo+9" alt="Placeholder 9" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x750/333/FFF?text=Photo+10" alt="Placeholder 10" class="img-placeholder"></div>
                    </div>
                </div>

                <!-- Illustrations Section -->
                <div id="illustrations-content" class="hidden">
                     <div class="my-8">
                        <div class="relative rounded-lg overflow-hidden bg-cover bg-center h-96" style="background-image: url('https://placehold.co/1200x400/1a1a1a/FFFFFF?text=Featured+Illustration');">
                             <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-8">
                                <h1 class="text-4xl md:text-5xl font-bold text-white">Illustrations</h1>
                                <p class="mt-4 text-lg text-gray-200 max-w-lg">Visually stunning, royalty-free illustrations.<br>Curated for your creative projects.</p>
                            </div>
                        </div>
                    </div>
                    <div class="masonry-grid">
                        <!-- Illustration placeholders -->
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x600/444/FFF?text=Illustration+1" alt="Placeholder 1" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x800/444/FFF?text=Illustration+2" alt="Placeholder 2" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x400/444/FFF?text=Illustration+3" alt="Placeholder 3" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x500/444/FFF?text=Illustration+4" alt="Placeholder 4" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x900/444/FFF?text=Illustration+5" alt="Placeholder 5" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x450/444/FFF?text=Illustration+6" alt="Placeholder 6" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x700/444/FFF?text=Illustration+7" alt="Placeholder 7" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x650/444/FFF?text=Illustration+8" alt="Placeholder 8" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x550/444/FFF?text=Illustration+9" alt="Placeholder 9" class="img-placeholder"></div>
                        <div class="masonry-grid-item rounded-lg overflow-hidden"><img src="https://placehold.co/600x750/444/FFF?text=Illustration+10" alt="Placeholder 10" class="img-placeholder"></div>
                    </div>
                </div>
            </main>
            
            <!-- Footer -->
            <footer class="bg-[#1C1C1C] text-gray-400 text-sm mt-12">
                <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        <div>
                            <h4 class="font-semibold text-gray-200">Company</h4>
                            <ul class="mt-4 space-y-2">
                                <li><a href="#" class="hover:text-white">About</a></li>
                                <li><a href="#" class="hover:text-white">History</a></li>
                                <li><a href="#" class="hover:text-white">Careers</a></li>
                                <li><a href="#" class="hover:text-white">Press</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-200">Product</h4>
                            <ul class="mt-4 space-y-2">
                                <li><a href="#" class="hover:text-white">Community</a></li>
                                <li><a href="#" class="hover:text-white">License</a></li>
                                <li><a href="#" class="hover:text-white">API</a></li>
                                <li><a href="#" class="hover:text-white">Help</a></li>
                            </ul>
                        </div>
                         <div>
                            <h4 class="font-semibold text-gray-200">Community</h4>
                            <ul class="mt-4 space-y-2">
                                <li><a href="#" class="hover:text-white">Become a Contributor</a></li>
                                <li><a href="#" class="hover:text-white">Topics</a></li>
                                <li><a href="#" class="hover:text-white">Collections</a></li>
                                <li><a href="#" class="hover:text-white">Awards</a></li>
                            </ul>
                        </div>
                        <div class="col-span-2 lg:col-span-2">
                            <h4 class="font-semibold text-gray-200">Join our newsletter</h4>
                            <p class="mt-4">Get the latest photos and illustrations delivered to your inbox.</p>
                            <div class="mt-4 flex">
                                <input type="email" placeholder="Enter your email" class="bg-gray-800 border border-gray-600 text-white rounded-l-md p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-gray-500">
                                <button class="bg-gray-200 text-black font-semibold px-4 py-2 rounded-r-md hover:bg-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; 2025 Unsplash Clone. All rights reserved.</p>
                        <div class="flex space-x-4 mt-4 md:mt-0">
                           <a href="#">Terms</a>
                           <a href="#">Privacy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    
    <!-- Overlay for mobile menu -->
    <div id="overlay" class="fixed inset-0 bg-black bg-opacity-50 z-30 hidden lg:hidden"></div>

</body>
</html>
