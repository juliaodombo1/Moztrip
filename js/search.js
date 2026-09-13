const tabs = document.querySelectorAll('.search-tabs .tab');
const destinoInput = document.getElementById('destino');

const placeholders = {
    hoteis: 'Para onde quer viajar?',
    experiencias: 'Que experiência procura?',
    pacotes: 'Escolha o seu destino',
    transportes: 'De onde para onde?'
};

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const tipo = tab.dataset.tab;
        if (destinoInput && placeholders[tipo]) {
            destinoInput.placeholder = placeholders[tipo];
        }
    });
});

const searchForm = document.querySelector('.search-form');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const destino = destinoInput ? destinoInput.value.trim() : '';
        alert(destino ? `A pesquisar: ${destino}` : 'Escreva um destino para pesquisar.');
    });
}