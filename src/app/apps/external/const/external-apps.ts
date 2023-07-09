import { ExternalAppName } from '../enum/external-app-title';

export const EXTERNAL_APPS = [
  <ExternalApp>{
    url: 'https://98.js.org/programs/pinball/space-cadet.html',
    name: ExternalAppName.pinball,
    icon: '',
  },
  <ExternalApp>{
    url: 'https://98.js.org/programs/jspaint/index.html',
    name: ExternalAppName.paint,
    icon: '',
  },
  <ExternalApp>{
    url: 'https://98.js.org/programs/minesweeper/index.html',
    name: ExternalAppName.minesweeper,
    icon: '',
  },
  <ExternalApp>{
    url: 'https://98.js.org/programs/notepad/index.html',
    name: ExternalAppName.notepad,
    icon: '',
  },
  <ExternalApp>{
    url: 'https://98.js.org/programs/js-solitaire/index.html',
    name: ExternalAppName.solitier,
    icon: '',
  },
];

export interface ExternalApp {
  url: string;
  name: ExternalAppName;
  icon: string;
}
