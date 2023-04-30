import {beforeEach, describe, expect, it} from 'vitest';
 import{interpret, InterpreterFrom} from 'xstate'
import {GameMachine, GameModel} from '../../src/machine/GameMachine';

describe('machine/GameMachine', () => {

    describe('canJoinGame', () => {

        let machine : InterpreterFrom<typeof GameMachine>

        
        beforeEach(()=> {

            machine= interpret(GameMachine).start()

            
        })

        it('should let a player join ', ()=> {
            expect(machine.send(GameModel.events.join("1","1")).changed).toBe(true)
             expect(machine.send(GameModel.events.join("2", "2")).changed).toBe(true)
 
        })

        it('should not let join a game twice ', ()=> {
            expect(machine.send(GameModel.events.join("1","1")).changed).toBe(true)
            expect(machine.send(GameModel.events.join("1","1")).changed).toBe(false)

        })
    });
});