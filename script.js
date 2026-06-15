function unlockVault() {
  const door = document.getElementById("door");
  const status = document.getElementById("status");

  status.innerText = "Decrypting vault...";

  // force reflow safety (fixes “no animation” bug on some browsers)
  void door.offsetWidth;

  setTimeout(() => {
    door.classList.add("open");

    status.innerText = "ACCESS GRANTED → Redirecting to Discord...";

    setTimeout(() => {
      window.location.href = "https://discord.gg/8ffj6BeHmC";
    }, 2000);

  }, 1200);
}
