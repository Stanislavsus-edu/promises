import GameSavingLoader from './GameSavingLoader';
import GameSaving from "./GameSaving"

GameSavingLoader.load().then(
  (data) => new GameSaving(data),
  (err) => err
);