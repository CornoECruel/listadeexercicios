function Celsius() {
    var vC, vF;
    vC = Number(window.prompt(`Informe a temperatura em celsius`));
    vF = (vC * 9/5) + 32;
    window.alert(`A temperatura de ${vC}°C equivale a ${vF.toFixed(2)}°F`);
}