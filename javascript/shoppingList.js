const container = document.querySelector(".container");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const del = document.createElement("button");

    container.appendChild(ul);
    li.textContent = input.value;
    del.textContent = 'Delete';
    ul.appendChild(li);
    li.appendChild(del);

    del.addEventListener("click", () => {
        ul.removeChild(li);
    });
    input.value = '';
    input.focus();
});