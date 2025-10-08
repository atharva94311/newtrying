
        document.addEventListener('DOMContentLoaded', function() {
            const photosBtn = document.getElementById('photos-btn');
            const illustrationsBtn = document.getElementById('illustrations-btn');
            const mobilePhotosBtn = document.getElementById('mobile-photos-btn');
            const mobileIllustrationsBtn = document.getElementById('mobile-illustrations-btn');
            const photosContent = document.getElementById('photos-content');
            const illustrationsContent = document.getElementById('illustrations-content');

            // --- Page Content Switching ---
            function showPhotos() {
                photosContent.classList.remove('hidden');
                illustrationsContent.classList.add('hidden');
                
                // Desktop sidebar buttons
                if (photosBtn) {
                    photosBtn.classList.add('bg-gray-700', 'text-white');
                    photosBtn.classList.remove('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
                }
                
                if (illustrationsBtn) {
                    illustrationsBtn.classList.remove('bg-gray-700', 'text-white');
                    illustrationsBtn.classList.add('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
                }

                // Mobile navigation buttons
                if (mobilePhotosBtn) {
                    mobilePhotosBtn.classList.add('bg-gray-700', 'text-white');
                    mobilePhotosBtn.classList.remove('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
                }
                
                if (mobileIllustrationsBtn) {
                    mobileIllustrationsBtn.classList.remove('bg-gray-700', 'text-white');
                    mobileIllustrationsBtn.classList.add('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
                }
            }
            
            function showIllustrations() {
                photosContent.classList.add('hidden');
                illustrationsContent.classList.remove('hidden');

                // Desktop sidebar buttons
                if (illustrationsBtn) {
                    illustrationsBtn.classList.add('bg-gray-700', 'text-white');
                    illustrationsBtn.classList.remove('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
                }
                
                if (photosBtn) {
                    photosBtn.classList.remove('bg-gray-700', 'text-white');
                    photosBtn.classList.add('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
                }

                // Mobile navigation buttons
                if (mobileIllustrationsBtn) {
                    mobileIllustrationsBtn.classList.add('bg-gray-700', 'text-white');
                    mobileIllustrationsBtn.classList.remove('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
                }
                
                if (mobilePhotosBtn) {
                    mobilePhotosBtn.classList.remove('bg-gray-700', 'text-white');
                    mobilePhotosBtn.classList.add('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
                }
            }

            // Desktop sidebar button events
            if (photosBtn) {
                photosBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showPhotos();
                });
            }

            if (illustrationsBtn) {
                illustrationsBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showIllustrations();
                });
            }

            // Mobile navigation button events
            if (mobilePhotosBtn) {
                mobilePhotosBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showPhotos();
                });
            }

            if (mobileIllustrationsBtn) {
                mobileIllustrationsBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showIllustrations();
                });
            }
            
            // Set initial state
            showPhotos();
        });
