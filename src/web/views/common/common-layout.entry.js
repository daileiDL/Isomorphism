import './pages/layout.css';

quicklink({
    urls: ['/scripts/index-category.bundle.js']
});
$(document).pjax('a', '#app')