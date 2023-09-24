module.exports = {
    sex: function(creep){
        target_controller = Game.getObjectById('5bbca9f09099fc012e630676')
        if(creep.reserveController(target_controller) != 0) {
            //console.log(creep.claimController(target_controller))
            if(creep.moveTo(target_controller) != 0){
                //console.log(creep.moveTo(target_controller))
                //console.log('banana')
                creep.moveTo(Game.flags.claim1)
            }        
        }
    }
}