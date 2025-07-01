function startGame() {
  alert("Career mode launching soon...");
  // Later, you’ll navigate to the game screen here
}
button.addEventListener("click", () => {
  localStorage.setItem("selectedTeam", team);
  localStorage.setItem("selectedLeague", selectedLeague);
  window.location.href = "dashboard.html";
});
