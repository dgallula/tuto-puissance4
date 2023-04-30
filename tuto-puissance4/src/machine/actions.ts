import { GameAction, PlayerColor, GameContext } from "../types";


export const joinGameAction: GameAction<"join"> = (context, event) => ({
    players: [...context.players, {id: event.playerId, name: event.name}]
  })

  export const leaveGameAction: GameAction<"leave"> = (context, event) => ({
    players: context.players.filter(p => p.id !== event.playerId)
  })
  
  export const chooseColorAction: GameAction<"chooseColor"> = (context, event) => ({
    players: context.players.map(p => {
      if (p.id === event.playerId) {
        return {...p, color: event.color}
      }
      return p
    })
  })


  
  export const switchPlayerAction = (context: GameContext) => ({
    currentPlayer: context.players.find(p => p.id !== context.currentPlayer)?.id
  })

  export const setCurrentPlayerAction = (context: GameContext) => ({
    currentPlayer: context.players.find(p => p.color === PlayerColor.YELLOW)?.id
  })



 
  




