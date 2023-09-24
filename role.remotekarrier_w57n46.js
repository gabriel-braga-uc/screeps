module.exports = {
    sex: function(creep){
    var dropped_sources = new Array()
    var storage = Game.getObjectById('64bd3763fcd63d47a9d2226c')
    var dropped_source1 = Game.getObjectById('64bfd268e4e8e9b17bad4a9c')
    var dropped_source2 = Game.getObjectById('64c0743b24427a591920754a')
        for (x in Game.rooms){
            if (String(x) == 'W58N47'){
                for (y in (Game.rooms.W58N47.find(FIND_DROPPED_RESOURCES))){
                    var dropped_sources_temp = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {filter: (r) => r.resourceType == RESOURCE_ENERGY && r.amount > 1000});
                   if (dropped_sources_temp != null && dropped_sources_temp != undefined){
                    dropped_sources.push(dropped_sources_temp)
                    }
                } 
            }
            if (String(x) == 'W57N47'){
                for (y in (Game.rooms.W57N47.find(FIND_CONSTRUCTION_SITES))){
                    var dropped_sources_temp = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {filter: (r) => r.resourceType == RESOURCE_ENERGY && r.amount > 1000});
                   if (dropped_sources_temp != null && dropped_sources_temp != undefined){
                    dropped_sources.push(dropped_sources_temp)
                    }
                } 
            }
            if (String(x) == 'W57N46'){
                for (y in (Game.rooms.W57N46.find(FIND_DROPPED_RESOURCES))){
                    var dropped_sources_temp = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {filter: (r) => r.resourceType == RESOURCE_ENERGY && r.amount > 1000});
                   if (dropped_sources_temp != null && dropped_sources_temp != undefined){
                    dropped_sources.push(dropped_sources_temp)
                   }
                
                }                 
            }
            if (String(x) == 'W57N45'){
                for (y in (Game.rooms.W57N45.find(FIND_DROPPED_RESOURCES))){
                    var dropped_sources_temp = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {filter: (r) => r.resourceType == RESOURCE_ENERGY && r.amount > 1000});
                    if (dropped_sources_temp != null && dropped_sources_temp != undefined){
                        dropped_sources.push(dropped_sources_temp)
                    }
                } 
            }
        }
        if (creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.isfull = false
        }
        else if (creep.store[RESOURCE_ENERGY] == creep.carryCapacity){
            creep.memory.isfull = true
        }
        console.log(dropped_sources)
        dropped_target = dropped_sources[Memory.rmw57n45_count]
        console.log(Memory.rmw57n45_count)
        console.log(dropped_target)
        if(creep.memory.isfull){
            if (creep.transfer(storage, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                creep.moveTo(storage);
            }
        }
        if(!creep.memory.isfull){
            if (Memory.rmw57n45_count = 0){
                if(creep.pickup(dropped_source1) !== OK) {
                    if(creep.moveTo(dropped_target) !== OK){
                        creep.moveTo(Game.flags.handicap1)
                    };
                }
            }
            else if (Memory.rmw57n45_count = 1){
                if(creep.pickup(dropped_source2) !== OK) {
                    if(creep.moveTo(dropped_target) !== OK){
                        creep.moveTo(Game.flags.handicap2)
                    };
                }
            }
        }
    }
}