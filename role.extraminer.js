module.exports = {
    sex: function(creep){
        var source_target = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE, {
            filter: (s) => s.pos.findInRange(FIND_MY_CREEPS, 1).length < 31
        })
        var dropoff = Game.getObjectById("5bbca9f09099fc012e630678");
        var storage = Game.getObjectById('64bd3763fcd63d47a9d2226c')
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
            if(creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(storage);
            }
        }
    }
};