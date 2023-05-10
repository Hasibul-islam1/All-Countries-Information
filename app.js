const countryInfo = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showInfo(data))
}
const showInfo = info => {
    info.forEach(contry => {
        // console.log(contry);check 
        const container = document.getElementById("country-container")
        const div = document.createElement("div");
        div.classList.add("show")
        div.innerHTML = `
        <img src="${contry.flags.svg}" alt="" srcset="">
        <h4>Country:${contry.name.common}</h4>
        <h4>Capacity:${contry.capital}</h4>
        <h4>Area:${contry.area}</h4>
        <h4>Population:${contry.population}</h4>
        <h4>Independent:${contry.independent === true ? "Yes" : "No"}</h4>
        <p>Region:${contry.region}</p>
        <p>Start of week:${contry.startOfWeek}</p>
        <p>Timezones:${contry.timezones[0]}</p>
        `
        container.appendChild(div);
        // console.log(contry.maps.googleMaps)
    })
}
countryInfo()