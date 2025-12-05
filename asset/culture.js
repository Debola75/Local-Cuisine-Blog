// Simple menu toggle for small screens
function menuToggle(){
    const toggle = document.getElementById('menuToggle');
    const navWrap = document.getElementById('navWrap');
    const primary = document.getElementById('primaryNav');

    function setExpanded(state){
        toggle.setAttribute('aria-expanded', state);
        if(state === 'true') navWrap.classList.add('nav-open');
        else navWrap.classList.remove('nav-open');
    }

    toggle.addEventListener('click', function(){
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        setExpanded(!expanded ? 'true' : 'false');
    });

    // close when a link is clicked (mobile)
    primary.querySelectorAll('a').forEach(a=>{
        a.addEventListener('click', ()=> setExpanded('false'));
    });
    

    // close on escape
    document.addEventListener('keydown', (e)=> {
        if(e.key === 'Escape') setExpanded('false');
    });
}
menuToggle();