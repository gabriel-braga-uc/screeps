module.exports = {
    sex: function(creep){
        var source_target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE, {
            filter: (s) => s.pos.findInRange(FIND_MY_CREEPS, 1).length < 31
        })
        var dropoff = Game.getObjectById("5bbca9f09099fc012e630678");
        var storage = Game.getObjectById('64bd3763fcd63d47a9d2226c')
        //console.log(String(creep) + ', energy: ' + String(creep.store[RESOURCE_ENERGY]))
        if (creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.isfull = false
        }
        else if (creep.store[RESOURCE_ENERGY] == creep.carryCapacity){
            creep.memory.isfull = true
            creep.memory.ismining = false
        }
        if ((creep.store[RESOURCE_ENERGY] > 0 || creep.store[RESOURCE_ENERGY] <50) && !creep.memory.isfull){
            creep.memory.ismining = true
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