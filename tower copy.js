module.exports = {
    sex: function(creep){
        var source_target = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
        var site = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
        //console.log(String(creep) + ', energy: ' + String(creep.store[RESOURCE_ENERGY]))
        if (creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.isfull = false
        }
        else if (creep.store[RESOURCE_ENERGY] == creep.carryCapacity){
            creep.memory.isfull = true
        }
        if (creep.memory.isfull){
            if(creep.build(site) == ERR_NOT_IN_RANGE) {
                creep.moveTo(site);
            }
        }
        else if (!creep.memory.isfull){
            if(creep.harvest(source_target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source_target)
            }
        }
        if (creep.memory.isfull && (site == null || site == undefined)){
                creep.moveTo(Game.flags.idlepoint1)
            }
    }
};