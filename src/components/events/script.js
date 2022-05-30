window.addEventListener('load', function () {
    new Events();
});

class Events {
    constructor() {
        this.openMmenuItems = document.querySelectorAll('[data-event="openMmenu"]');
        this.mmenu = new Mmenu('.mmenu');

        this.openCallItems = document.querySelectorAll('[data-event="openCall"]');
        this.call = new Call('.call');
        this.init();
    }

    init() {
        this.openMmenuItems.forEach(i => i.addEventListener('click', this.mmenu.open));
        this.openCallItems.forEach(i => i.addEventListener('click', this.call.open));

    }

}