import { GameContext, GameEvent, GameGuard,PlayerColor } from "../types";


export const canJoinGuard: GameGuard<"join"> = (context, event) => {
    return context.players.length < 2 && (context.players.find(p => p.id === event.playerId) === undefined)
  }

  export const canLeaveGuard: GameGuard<"leave"> = (context, event) => {
    return !!context.players.find(p => p.id === event.playerId)
  }

  export const canChooseColorGuard: GameGuard<"chooseColor"> = (context, event) => {
    return [PlayerColor.RED, PlayerColor.YELLOW].includes(event.color) &&
      context.players.find(p => p.id === event.playerId) !== undefined &&
      context.players.find(p => p.color === event.color) === undefined
  }



   export const canStartGameGuard: GameGuard<"start"> = (context:GameContext,event:GameEvent) => {
    return context.players.filter(p => p.color).length === 2
  }
  

