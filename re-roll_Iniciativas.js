await game.combats.active.resetAll();
await game.combats.active.rollAll();
while (game.combats.active.turn > 0) {
    console.log(game.combats.active.turn);
    await game.combats.active.previousTurn();
}

/* Macro para Re-Rolar Iniciativa de todos combatentes, ao terminar coloca o turno na posição zero. */