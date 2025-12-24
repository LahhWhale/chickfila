const btn = document.getElementById("copyCA");
const contract = document.getElementById("contract").innerText;
const toast = document.getElementById("toast");

btn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(contract);
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1200);
  } catch {}
});
