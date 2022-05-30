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