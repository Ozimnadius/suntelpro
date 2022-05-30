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