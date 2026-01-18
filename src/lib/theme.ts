export type Theme = 'light' | 'dark';

export function getTheme() {
  const saved = localStorage.getItem('theme');

  // If user explicitly chose a theme, use it
  if (saved === 'light' || saved === 'dark') {
    return saved;
  }

  // Otherwise, follow OS preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  // Default fallback
  return 'light';
}

export function setTheme(theme: Theme) {
  if (theme !== 'light' && theme !== 'dark') return;

  // Apply to <html> for CSS selectors
  document.documentElement.dataset.theme = theme;

  // Persist choice
  localStorage.setItem('theme', theme);
}

export function applyTheme() {
  const theme = getTheme();
  document.documentElement.dataset.theme = theme;
}

export function toggleTheme() {
  const current = document.documentElement.dataset.theme || getTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
}

export function clearTheme() {
  localStorage.removeItem('theme');
  applyTheme();
}
