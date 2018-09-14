function makeFullWidthMR() {
    $('.container-fluid').css('max-width', '100%');
    $('.limit-container-width').removeClass('limit-container-width');

    let sidebarToggleButton = $('.toggle-sidebar-button');
    if (sidebarToggleButton.width() > 50) {
        // Not working for now
        sidebarToggleButton.click();

        $('.layout-page.page-with-contextual-sidebar').addClass('page-with-icon-sidebar');
        $('.layout-page.page-with-contextual-sidebar .nav-sidebar').addClass('sidebar-collapsed-desktop');
    }
}

$(document).ready(() => {
    makeFullWidthMR();
});

//layout-page page-gutter page-with-contextual-sidebar right-sidebar-collapsed
//layout-page page-gutter page-with-contextual-sidebar right-sidebar-collapsed page-with-icon-sidebar