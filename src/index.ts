import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';

import {
  INotebookTracker
} from '@jupyterlab/notebook';

import {
  ICommandPalette
} from '@jupyterlab/apputils';

/**
 * Initialization data for the stylecheck extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'stylecheck',
  autoStart: true,
  requires: [INotebookTracker, ICommandPalette],
  activate: (app: JupyterLab,
             nbtracker: INotebookTracker,
             cmdpalette: ICommandPalette) => {

    app.commands.addCommand('stylecheck:pepcheck', {
      label: 'Style check',
      execute: () => {
        const panel = nbtracker.currentWidget;
        if (!panel) {
          return;
        }
        let cell = panel.content.model.cells.get(0);
        console.log(cell.value.text);
      }
    });

    cmdpalette.addItem({
      command: 'stylecheck:pepcheck',
      category: 'stylishness'
    });

    console.log('JupyterLab extension stylecheck is activated!');
  }
};

export default extension;
