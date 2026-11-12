import type { StorybookConfig } from '@storybook/react-vite';

// Windows: если Storybook запущен из папки с буквой диска в нижнем регистре («d:\…» — так бывает
// в терминале VS Code и Git Bash), builder-vite строит ключи stories абсолютными путями
// и каталог падает с «importers[path] is not a function». Приводим букву диска к верхнему регистру.
if (process.platform === 'win32' && /^[a-z]:/.test(process.cwd())) {
  process.chdir(process.cwd()[0].toUpperCase() + process.cwd().slice(1));
}

const config: StorybookConfig = {
  // Каталог — только CSF-stories: Foundation, Components, Sandboxes. MDX-страниц нет.
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-vite"
};
export default config;