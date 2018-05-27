import { configure } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Funbox Design System',
  url: 'https://github.com/Fundbox',
  addonPanelInRight: true,
});

configure(() => require('../src/components/main.stories'), module);
