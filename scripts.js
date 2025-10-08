
        document.addEventListener('DOMContentLoaded', function() {
            const menuBtn = document.getElementById('menu-btn');
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('overlay');
            
            const photosBtn = document.getElementById('photos-btn');
            const illustrationsBtn = document.getElementById('illustrations-btn');
            const photosContent = document.getElementById('photos-content');
            const illustrationsContent = document.getElementById('illustrations-content');

            // --- Mobile Menu Toggle ---
            function toggleMenu() {
                sidebar.classList.toggle('-translate-x-full');
                overlay.classList.toggle('hidden');
            }

            menuBtn.addEventListener('click', toggleMenu);
            overlay.addEventListener('click', toggleMenu);

            // --- Page Content Switching ---
            function showPhotos() {
                photosContent.classList.remove('hidden');
                illustrationsContent.classList.add('hidden');
                
                photosBtn.classList.add('bg-gray-700', 'text-white');
                photosBtn.classList.remove('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
                
                illustrationsBtn.classList.remove('bg-gray-700', 'text-white');
                illustrationsBtn.classList.add('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
            }
            
            function showIllustrations() {
                photosContent.classList.add('hidden');
                illustrationsContent.classList.remove('hidden');

                illustrationsBtn.classList.add('bg-gray-700', 'text-white');
                illustrationsBtn.classList.remove('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
                
                photosBtn.classList.remove('bg-gray-700', 'text-white');
                photosBtn.classList.add('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
            }

            photosBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showPhotos();
                if (window.innerWidth < 1024) { // Close sidebar on mobile after selection
                    toggleMenu();
                }
            });

            illustrationsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showIllustrations();
                 if (window.innerWidth < 1024) { // Close sidebar on mobile after selection
                    toggleMenu();
                }
            });
            
            // Set initial state
            showPhotos();
        });
