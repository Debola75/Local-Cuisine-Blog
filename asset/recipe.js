(function(){
const search = document.getElementById('search');
const filterBtns = Array.from(document.querySelectorAll('.filters button'));
const cards = Array.from(document.querySelectorAll('.card'));
const categories = Array.from(document.querySelectorAll('section.category'));

let activeFilter = 'all';

function setActiveButton(filter){
    filterBtns.forEach(b=>{
        const is = b.dataset.filter === filter;
        b.classList.toggle('active', is);
        b.setAttribute('aria-pressed', is ? 'true' : 'false');
    });
}

function normalize(text){
    return (text||'').toLowerCase();
}

function applyFilter(){
    const q = normalize(search.value.trim());
    cards.forEach(card=>{
        const name = normalize(card.dataset.name);
        const desc = normalize(card.dataset.desc);
        const cat = card.dataset.cat;
        const matchesText = q === '' || name.includes(q) || desc.includes(q);
        const matchesCategory = activeFilter === 'all' || activeFilter === cat;
        card.classList.toggle('hidden', !(matchesText && matchesCategory));
    });

    // hide category sections that have no visible cards
    categories.forEach(section=>{
        const anyVisible = Array.from(section.querySelectorAll('.card')).some(c=>!c.classList.contains('hidden'));
        section.classList.toggle('hidden', !anyVisible);
    });
}

// events
search.addEventListener('input', applyFilter);

filterBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        activeFilter = btn.dataset.filter;
        setActiveButton(activeFilter);
        applyFilter();
    });
});

// initial apply (in case)
applyFilter();

// Optional: keyboard shortcut "/" focuses search
window.addEventListener('keydown', (e)=>{
    if(e.key === '/' && document.activeElement.tagName.toLowerCase() !== 'input'){
        e.preventDefault();
        search.focus();
    }
});
})();