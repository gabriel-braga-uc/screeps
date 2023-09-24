module.exports = {
    sex: function(creep){
        var dropoff = Game.getObjectById("5bbca9e59099fc012e6304e9");
        var sources = Game.rooms.W58N47.find(FIND_SOURCES_ACTIVE)
        var source = creep.pos.findClosestByPath(sources)
        if (creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.isfull = false
        }
        else if (creep.store[RESOURCE_ENERGY] == creep.carryCapacity){
            creep.memory.isfull = true
        }
        if (creep.memory.isfull){
            if(creep.transfer(dropoff, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(dropoff);
            }   
        }
        else if (!creep.memory.isfull){
            if(creep.harvest(source) !== OK) {
                if (creep.moveTo(source) == -7){
                    creep.moveTo(Game.flags.room3)
                }
            }
        }
    }
};