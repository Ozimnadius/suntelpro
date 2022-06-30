class Call{
    constructor(selector) {
        this.call = document.querySelector(selector);
        this.form = this.call.querySelector('.call__form');

        this.init();
    }

    init(){
        this.call.addEventListener('click',(e)=>{
            if (!e.target.closest('.call__form') || e.target.closest('.call__close')){
                this.close(e);
            }
        });

        this.form.addEventListener('submit', (e)=>{
            e.preventDefault();

            let data = $(this.form).serialize();

            $.ajax({
                dataType: "json",
                type: "POST",
                url: '/php/ajax.php',
                data: data,
                success: (result)=> {
                    if (result.status) {
                        this.form.classList.add('ok');
                    } else {
                        alert('Что-то пошло не так, попробуйте еще раз!!!');
                    }
                },
                error: function (result) {
                    alert('Что-то пошло не так, попробуйте еще раз!!!');
                }
            });
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