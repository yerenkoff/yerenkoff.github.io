// WIP

const colors = ["#FFB7B7", "#FFC7B7", "#FFE097", "#BAEBFF", "#D6D0FF"];

const text = "Yerenkoff & Biloxi Chess Club";

heading.innerHTML = [...text]
  .map((char) => {
    if (char === " ") return " ";
    const color = colors[Math.floor(Math.random() * colors.length)];
    return `<span style="color:${color}">${char}</span>`;
  })
  .join("");

heading.querySelectorAll("span").forEach((span) => {
  function changeColor() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    span.style.color = color;

    const nextTime = Math.random() * 9000 + 1000;
    setTimeout(changeColor, nextTime);
  }
  changeColor();
});

window.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash) {
    openModal(window.location.hash.substring(1));
  }
});

function closeModal() {
  window.location.hash = "";
  modal.classList.remove("modalShow");
  modalVideo.pause();
}

function openModal(hashtag) {
  modal.classList.add("modalShow");
  modalVideo.poster = hashtag + ".png";
  modalVideo.src = films[hashtag].fileName;
  modalTitle.innerHTML = films[hashtag].name;
}

const films = {
  zoomuseum: { fileName: "zoomuseum.mov", name: "Зоологический музей" },
  viipuri: { fileName: "viipuri.mov", name: "Viipuri" },
  hermitage: { fileName: "hermitage.mov", name: "Эрмитаж" },
  alexandria: { fileName: "alexandria.mov", name: "Парк Александрия" },
  narvskaya: { fileName: "narvskaya.mov", name: "Санкт-Петербург" },
  pushkin: { fileName: "pushkin.mov", name: "Пушкин" },
  sobor: { fileName: "sobor.mov", name: "Казанский и Исаакиевский" },
  oranienbaum: { fileName: "oranienbaum.mov", name: "Ораниенбаум" },
  kresty: { fileName: "kresty.mov", name: "Санкт-Петербург" },
  mosk: { fileName: "mosk.mov", name: "Московский район" },
  vas: { fileName: "vas.mp4", name: "Васильевский остров" },
  peterhof: { fileName: "peterhof.mov", name: "Петергоф" },
  park: { fileName: "park.mov", name: "Парк Победы" },
  parcpobedy: { fileName: "https://drive.google.com/file/d/1LbdWt_IN8l2xCKEcDskvOCpRwa2Z6JyD/view", name: "Парк Победы" },
  lavra: { fileName: "lavra.mov", name: "Александро-Невская Лавра" },
  hockey: { fileName: "hockey.mp4", name: "Матч СКА - Динамо М." },
};

for (let film in films) {
  const poster = document.createElement("img");
  poster.src = film + ".png";
  poster.id = film;

  poster.onclick = () => {
    window.location.hash = poster.id;
    openModal(poster.id);
  };

  pics.appendChild(poster);
}

modal.onclick = () => {
  closeModal();
};

modalForm.onclick = (e) => {
  e.stopPropagation();
};

modalCloseButton.onclick = () => {
  closeModal();
};
