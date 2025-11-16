// true = hidden, false = exposed
const flags = {
    blckCtrlFlag: { hidden: true, parent: null, ref: null },
    opFlag: { hidden: true, parent: null, ref: null },
    floCtrlFlag: { hidden: true, parent: null, ref: null },
    IOFlag: { hidden: true, parent: null, ref: null },
    UCtrlFlag: { hidden: true, parent: null, ref: null }
};

const btnData = [
    {id: "block-control-btn", key: "blckCtrlFlag"},
    {id: "operations-btn", key: "opFlag"},
    {id: "flow-control-btn", key: "floCtrlFlag"},
    {id: "input-output-btn", key: "IOFlag"},
    {id: "unit-control-btn", key: "UCtrlFlag"}
];

// Helper func
function insertAfter(newIte, ite) {
    const parent = ite.parentElement;
    const nextIte = ite.nextElementSibling;
    parent.insertBefore(newIte, nextIte);
};

// Handles removing and adding the list back
function main(data, img) {
    if (!(data.hidden)) {
        data.ref.remove();
        data.hidden = true;
        img.classList.remove("rotate");
    } else {
        insertAfter(data.ref, data.parent);
        data.hidden = false;
        img.classList.add("rotate");
    };
};

document.addEventListener("DOMContentLoaded", () => {
    btnData.forEach(item => {
        const btn = document.getElementById(item.id);
        const img = btn.querySelector("img");
        const lst = btn.parentElement.parentElement.querySelector(".lst");

        // Take out the lists to begin with
        flags[item.key].ref = lst;
        flags[item.key].parent = lst.parentElement;
        lst.remove();

        // Set event listeners for each button
        btn.addEventListener("click", () => main(flags[item.key], img));
    });
});