class Player {
    constructor(player, token){
        this.id = player;
        this.token = `assets/${token}-icon.png`;
        this.wins = 0;
    }
    increaseWins() {
        this.wins++;
    }
}