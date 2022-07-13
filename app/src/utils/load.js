//Работа прелоудера при загрузке

function load(){
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if ( !preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 1000);
}

export default load()