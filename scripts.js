// Chave da API do OpenWeatherMap
const chave = "cebcd482eda57fa9a6714c1c2ba91885";

// Função para atualizar os dados da previsão do tempo na tela
function colocarNaTela(dados) {
    const cidadeElement = document.querySelector(".cidade");
    const tempElement = document.querySelector(".temp");
    const descricaoElement = document.querySelector(".descricao");
    const iconeElement = document.querySelector(".icone");

    cidadeElement.textContent = `Tempo em ${dados.name}`;
    tempElement.textContent = `${Math.floor(dados.main.temp)}°C`;
    descricaoElement.textContent = dados.weather[0].description;
    iconeElement.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

// Função para buscar a previsão do tempo com base na cidade fornecida pelo usuário
async function buscarPrevisao() {
    const cidadeInput = document.querySelector(".input-cidade");
    const cidade = cidadeInput.value.trim();

    if (cidade === "") {
        alert("Por favor, digite o nome da cidade.");
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`);
        const dados = await response.json();

        colocarNaTela(dados);
    } catch (error) {
        alert("Não foi possível obter a previsão do tempo. Por favor, tente novamente mais tarde.");
    }
}

// Event listener para o botão de busca
document.querySelector("button").addEventListener("click", buscarPrevisao);
