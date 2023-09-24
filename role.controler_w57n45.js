module.exports = {
    sex: function(creep){
        var dropoff = Game.getObjectById("5bbca9f09099fc012e63067c");
        var source =  creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
            filter: (r) => r.resourceType == RESOURCE_ENERGY && r.amount >= creep.carryCapacity
       });
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
            if(creep.pickup(source) !== OK) {
                creep.moveTo(source);
            }
        }
    }
};