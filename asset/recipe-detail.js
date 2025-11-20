function showRecipe(recipeName) {
    // Hide all recipe articles
    const articles = document.querySelectorAll('.recipe-article');
    articles.forEach(article => article.style.display = 'none');

    // Show selected recipe
    const selectedRecipe = document.getElementById(recipeName);
    if (selectedRecipe) {
        selectedRecipe.style.display = 'block';
        window.scrollTo(0, 0);
    }

    // Update active button
    const buttons = document.querySelectorAll('.recipe-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
}

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