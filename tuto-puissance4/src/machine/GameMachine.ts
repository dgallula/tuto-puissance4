import { createMachine } from 'xstate';
import {createModel} from 'xstate/lib/model';
import { joinGameAction, leaveGameAction, chooseColorAction,switchPlayerAction } from './actions';
import {GridState, Player,PlayerColor} from '../types';
 import { canJoinGuard, canLeaveGuard, canStartGameGuard, canChooseColorGuard} from './guards';



export const GameModel = createModel({

    players: [] as Player[],
    currentPlayer: null as null | Player['id'],
    rowLength: 4,
    grid: [
        ["E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E"]
    ] as GridState
  
}, {
    events: {
        join: (playerId: Player["id"], name: Player["name"]) => ({playerId, name}),
    leave: (playerId: Player["id"]) => ({playerId}),
    chooseColor: (playerId: Player["id"], color: PlayerColor) => ({playerId, color}),
    start: (playerId: Player["id"]) => ({playerId}),
    dropToken: (playerId: Player["id"], x: number) => ({playerId, x}),
    restart: (playerId: Player["id"]) => ({playerId}),
    }


})



enum GameStates {

    LOBBY = 'LOBBY',
    PLAY= 'PLAY',
    VICTORY = 'VICTORY',
    DRAW = 'DRAW'

}


export const GameMachine = GameModel.createMachine({

    id: 'game',
    initial: GameStates.LOBBY,
    states: {
      [GameStates.LOBBY]: {
        on: {
          join: {
            cond: canJoinGuard,
            actions: [GameModel.assign(joinGameAction)],
            target: GameStates.LOBBY,
          },
          leave: {
            cond: canLeaveGuard,
            actions: [GameModel.assign(leaveGameAction)],
            target: GameStates.LOBBY,
          },
          chooseColor: {
             cond: canChooseColorGuard,
             actions: [GameModel.assign(chooseColorAction)],
             target: GameStates.LOBBY,
          },
          start: {
            cond: canStartGameGuard,
            actions: [GameModel.assign(switchPlayerAction)],
            target: GameStates.PLAY,
          },
        },
      },
      [GameStates.PLAY]: {
        on: {
          dropToken: {
            target: GameStates.PLAY,
          },
        },
      },
      [GameStates.VICTORY]: {
        on: {
          restart: {
            target: GameStates.LOBBY,
          },
        },
      },
      [GameStates.DRAW]: {
        on: {
          restart: {
            target: GameStates.LOBBY,
          },
        },
      },
    },
  });
  
  

