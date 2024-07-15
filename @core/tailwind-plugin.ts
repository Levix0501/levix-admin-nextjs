import plugin from 'tailwindcss/plugin';

const tailwindPlugin = plugin(() => {}, {
  theme: {
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: 'var(--lx-color-border)',
    }),
    borderRadius: {
      xs: 'var(--lx-border-radius-xs)',
      sm: 'var(--lx-border-radius-sm)',
      DEFAULT: 'var(--lx-border-radius)',
      lg: 'var(--lx-border-radius-lg)',
    },
    extend: {
      colors: {
        primary: 'var(--lx-color-primary)',
        text: 'var(--lx-color-text)',
      },
    },
  },
});

export default tailwindPlugin;
