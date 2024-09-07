document.addEventListener('DOMContentLoaded', () => {
    const appForm = document.getElementById('appForm');
    const appGrid = document.getElementById('appGrid');

    // Função para exibir os aplicativos na página inicial
    function displayApps(apps) {
        appGrid.innerHTML = '';
        apps.forEach(app => {
            const appCard = document.createElement('div');
            appCard.className = 'app-card';
            appCard.innerHTML = `
                <img src="${app.image1}" alt="${app.name}">
                <h3>${app.name}</h3>
                <p>${app.description}</p>
                <p><strong>Gênero:</strong> ${app.genre}</p>
                <button>Ver mais</button>
            `;
            appGrid.appendChild(appCard);
        });
    }

    // Armazenar os aplicativos (para simplicidade, usando localStorage)
    const storedApps = JSON.parse(localStorage.getItem('apps')) || [];

    if (appGrid) {
        displayApps(storedApps);
    }

    // Publicar novo aplicativo
    if (appForm) {
        appForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const appName = document.getElementById('appName').value;
            const appGenre = document.getElementById('appGenre').value;
            const appDescription = document.getElementById('appDescription').value;
            const appComments = document.getElementById('appComments').value;

            const appImage1 = URL.createObjectURL(document.getElementById('appImage1').files[0]);
            const appImage2 = URL.createObjectURL(document.getElementById('appImage2').files[0]);

            const newApp = {
                name: appName,
                genre: appGenre,
                description: appDescription,
                comments: appComments,
                image1: appImage1,
                image2: appImage2,
            };

            storedApps.push(newApp);
            localStorage.setItem('apps', JSON.stringify(storedApps));

            alert('Aplicativo publicado com sucesso!');
            appForm.reset();
            alert('por favor o app ou jogo sera revisado mas relaxa ele vai esta publicado mesmo sendo revisado')
        });
    }
});