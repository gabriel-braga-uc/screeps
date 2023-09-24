module.exports = {
    sex: function(creep) {
        var spawn = Game.getObjectById("64b9a097340fb8991afffd84");
        var storage = Game.getObjectById('64bd3763fcd63d47a9d2226c')
        var source_target = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE, {
            filter: (s) => s.pos.findInRange(FIND_MY_CREEPS, 1).length < 31
        })
        var estruturas = creep.room.find(FIND_STRUCTURES)
        var extensions = _.filter(creep.room.find(FIND_STRUCTURES), (extension => extension.structureType == STRUCTURE_EXTENSION && extension.store.getFreeCapacity(RESOURCE_ENERGY) > 0))
        var extension = creep.pos.findClosestByPath(extensions)
        var torres = _.filter(creep.room.find(FIND_STRUCTURES), (torres => torres.structureType == STRUCTURE_TOWER && torres.store.getFreeCapacity(RESOURCE_ENERGY) > 0))
        var torre = creep.pos.findClosestByPath(torres)
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
            if (creep.transfer(extension, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE && extension.store.getFreeCapacity(RESOURCE_ENERGY) > 0){
                creep.moveTo(extension);
            }
            else if (creep.transfer(spawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE && spawn.store.getFreeCapacity(RESOURCE_ENERGY) > 0 && (extension == null || extension == undefined)){
                creep.moveTo(spawn);
            }
            else if (creep. transfer(torre, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE && torre.store.getFreeCapacity(RESOURCE_ENERGY) > 0 && spawn.store[RESOURCE_ENERGY] == 300 && (extension == null || extension == undefined)){
                creep.moveTo(torre)
            }
        }
        else if (!creep.memory.isfull){
            if(creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(storage);
            }
        }
        //console.log('teste')
    }
}

