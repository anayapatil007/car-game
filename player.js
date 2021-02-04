class Player {
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getcount(){
        var reference = database.ref("playercount");
        reference.on("value",function(data) {
       playerCount = data.val();    
        })
    }
    updatecount(count){
        database.ref("/").update({
            playercount : count,
        })
    }
    update(){
        var index = "players/player" + this.index;
        database.ref(index).set({
            name : this.name,
            distance : this.distance
        })
    }
    static getplayerinfo(){
        var reference = database.ref("players");
        reference.on("value",(data) => {
            allplayers = data.val();
        })
    }

}