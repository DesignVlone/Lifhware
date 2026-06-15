function enterVault() {
  const btn = document.querySelector(".enter-btn");
  btn.innerText = "UNLOCKING...";
  btn.disabled = true;

  setTimeout(() => {
    window.open("https://discord.gg/8ffj6BeHmC", "_blank");

    document.getElementById("entryScreen").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("entryScreen").style.display = "none";
      document.getElementById("mainSite").classList.remove("hidden");
    }, 500);

  }, 1200);
}
