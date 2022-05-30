//USER



// common.js
const jsTools = {
    getNumber: function (str) {
        return parseInt(str.replace(/[^\d]/g, ''));
    },
    getWindowWidth: function () {
        return document.documentElement.clientWidth;
    },
    getNumberFormat: function (number, decimals, dec_point, thousands_sep) {
        var i, j, kw, kd, km;
        if (isNaN(decimals = Math.abs(decimals))) {
            decimals = 2;
        }
        if (dec_point == undefined) {
            dec_point = ",";
        }
        if (thousands_sep == undefined) {
            thousands_sep = ".";
        }
        i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
        if ((j = i.length) > 3) {
            j = j % 3;
        } else {
            j = 0;
        }
        km = (j ? i.substr(0, j) + thousands_sep : "");
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
        kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
        return km + kw + kd;
    }
};

const media = {
    mobile: window.matchMedia("(max-width: 767.98px)"),

}

window.addEventListener("load", function () {
    $('input[type="tel"]').inputmask("+7 (999) 999-99-99");
});

class Mmenu{
    constructor(selector) {
        this.mmenu = document.querySelector(selector);
        this.links= this.mmenu.querySelectorAll('.mmenu__item');

        this.init();
    }

    init(){
        this.links.forEach(i=>{
           i.addEventListener('click', (e)=>{
               e.preventDefault();
              let link = e.currentTarget;
              document.querySelector(link.hash).scrollIntoView();
              this.close(e);
           });
        });

        this.mmenu.addEventListener('click', (e)=>{
            if (!e.target.closest('.mmenu__wrap') || e.target.closest('.mmenu__close')){
                this.close(e);
            }
        });
    }

    open=(e)=>{
        e.preventDefault();
        this.mmenu.classList.add('active');
        document.body.classList.add('ovh');
    }

    close=(e)=>{
        e.preventDefault();
        this.mmenu.classList.remove('active');
        document.body.classList.remove('ovh');
    }
}
class Call{
    constructor(selector) {
        this.call = document.querySelector(selector);

        this.init();
    }

    init(){
        this.call.addEventListener('click',(e)=>{
            if (!e.target.closest('.call__form') || e.target.closest('.call__close')){
                this.close(e);
            }
        });
    }

    open=(e)=>{
        e.preventDefault();
        this.call.classList.add('active');
        document.body.classList.add('ovh');
    }

    close=(e)=>{
        e.preventDefault();
        this.call.classList.remove('active');
        document.body.classList.remove('ovh');
    }
}
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
//# sourceMappingURL=script.js.map