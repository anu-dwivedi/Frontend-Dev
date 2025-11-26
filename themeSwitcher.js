const themes = ['light', 'dark', 'blue'];
themes.forEach(theme => {
  document.getElementById(`${theme}ThemeBtn`).addEventListener('click', () => {
    document.body.setAttribute('class', theme);
    document.body.setAttribute('data-theme', theme);
  });
});
