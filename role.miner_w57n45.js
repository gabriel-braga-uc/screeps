module.exports = {
    sex: function(creep) {
        var remote_source1 = Game.getObjectById('5bbca9f09099fc012e63067d')
        var remote_source2 = Game.getObjectById('5bbca9f09099fc012e630675')
        if (Memory.miner_w57n45_count == 0){
            if (creep.harvest(remote_source1) !== OK){
                creep.moveTo(remote_source1)
                console.log('bananandandan99999992')

            }
        }
        else if(Memory.miner_w57n45_count == 1){
            if (creep.harvest(remote_source2) !== OK){
                creep.moveTo(remote_source2)
                console.log('bananandandan12312312321')
            }
        }
    }
        
}

