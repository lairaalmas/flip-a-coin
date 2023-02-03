const botao = document.querySelector("#botao");
const moeda = document.querySelector("#moeda");

const generateValue = () => Math.round(Math.random());

const flip = () => {
  moeda.innerHTML = "";
  moeda.classList.add("flip");
  moeda.classList.remove("-bgDefault");
  moeda.classList.add("-bgFlip");
};

botao.addEventListener("click", function () {
  flip();
  const result = generateValue() === 0 ? "heads" : "tails";
  setTimeout(function () {
    moeda.classList.remove("flip");
    moeda.innerHTML = `<span>${result}</span>`;
    moeda.classList.add("-bgDefault");
    moeda.classList.remove("-bgFlip");
    callback();
  }, 800);
});
