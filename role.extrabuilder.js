module.exports = {
    sex: function(creep){
        var source_target = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
        var site = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
        var storage = _.filter(creep.room.find(FIND_STRUCTURES), (storage => storage.structureType == STRUCTURE_STORAGE && storage.store.getFreeCapacity(RESOURCE_ENERGY) > 0))
        var storage_target = creep.pos.findClosestByPath(storage)
        //console.log(String(creep) + ', : ' + String(creep.store[RESOURCE_ENERGY]))
        if (creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.isfull = false
        }
        else if (creep.store[RESOURCE_ENERGY] == creep.carryCapacity){
            creep.memory.isfull = true
        }
        //if (creep.memory.isfull){
        //    if(creep.build(site) != OK) {
        //        creep.moveTo(site);
        //    }
        //}
        if (!creep.memory.isfull){
            if(creep.harvest(source_target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source_target)
            }
        }
        if (creep.memory.isfull){
                if (storage_target != null || storage_target != undefined){
                    if (creep.transfer(storage_target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                        creep.moveTo(storage_target);
                        //console.log('1')
                    }
                else {
                    creep.moveTo(Game.flags.idlepoint1)
                    //console.log('2')
                }
            }
        }
    }
};