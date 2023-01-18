const velibData = () => {
    fetch(`https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&rows=100&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes`)
    .then(response => response.json())
    .then(data => {
        const velibstations = data.records;
        const stationElement = document.getElementById('velibstations');
        stationElement.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const station = velibstations[i];
            showVelibStation(stationElement, station.fields.name, station.fields.mechanical, station.fields.ebike, station.fields.numdocksavailable, station.fields.capacity);
        }
    })
};

setInterval(velibData, 1000);


const showVelibStation = (element, name, mechanicals, ebikes, numdocksavailable, capacity) => {
    element.innerHTML += `
        <div>
            <h2>Station : ${name}</h2>
            <p>${mechanicals} classical Velibs</p>
            <p>${ebikes} electric Velibs</p>
            <p>docks availables : ${numdocksavailable}</p>
            <p>capacity : ${capacity}</p>
            
        </div>
    `;
}
