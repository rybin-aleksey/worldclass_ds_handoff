import type { Preview } from '@storybook/react-vite';
// Токены и базовые стили — те же, что в приложении (src/main.tsx)
import '../src/tokens/fonts.css';
import '../src/tokens/primitives.css';
import '../src/tokens/semantics.css';
import '../src/tokens/typography.css';
import '../src/tokens/motion.css';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      sort: 'requiredFirst',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Foundation', ['Primitive', 'Semantic', 'Typography', 'Spacing & Radius', 'Motion'], 'Components', 'Sandboxes'],
      },
    },
    backgrounds: {
      options: {
        white: { name: 'bg/mainWhite', value: 'var(--bg-mainWhite)' },
        gray: { name: 'bg/baseGray', value: 'var(--bg-baseGray)' },
        photo: { name: 'bg/pictureBg', value: 'var(--bg-pictureBg)' },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'white' },
  },
};

export default preview;
