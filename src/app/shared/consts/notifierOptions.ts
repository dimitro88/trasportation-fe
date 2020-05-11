import { NotifierOptions } from 'angular-notifier';

export const notifierConfig = Object.freeze({
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  }
}) as NotifierOptions;
