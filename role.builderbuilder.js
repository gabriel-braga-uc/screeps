module.exports = {
    sex: function(creep){
        //var source_target = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
        var sites = new Array()
        if (creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.isfull = false
        }
        else if (creep.store[RESOURCE_ENERGY] == creep.carryCapacity){
            creep.memory.isfull = true
        }
        for (x in Game.rooms){
            if(String(creep.room.name) == x && !creep.memory.isfull){
                var room_sources = creep.room.find(FIND_SOURCES_ACTIVE)
                var source_target = creep.pos.findClosestByRange(room_sources)
            }
            if (String(x) == 'W58N47'){
                for (y in (Game.rooms.W58N47.find(FIND_CONSTRUCTION_SITES))){
                    var sites_temp = Game.rooms.W58N47.find(FIND_CONSTRUCTION_SITES)
                    sites.push(sites_temp[y])
                } 
            }
            if (String(x) == 'W57N47'){
                for (y in (Game.rooms.W57N47.find(FIND_CONSTRUCTION_SITES))){
                    var sites_temp = Game.rooms.W57N47.find(FIND_CONSTRUCTION_SITES)
                    sites.push(sites_temp[y])
                } 
            }
            if (String(x) == 'W57N46'){
                for (y in (Game.rooms.W57N46.find(FIND_CONSTRUCTION_SITES))){
                    var sites_temp = Game.rooms.W57N46.find(FIND_CONSTRUCTION_SITES)
                    sites.push(sites_temp[y])
                } 
            }
            if (String(x) == 'W57N45'){
                for (y in (Game.rooms.W57N45.find(FIND_CONSTRUCTION_SITES))){
                    var sites_temp = Game.rooms.W57N45.find(FIND_CONSTRUCTION_SITES)
                    sites.push(sites_temp[y])
                } 
            }
        }
        site = sites[0]
        if (creep.memory.isfull){
            if(creep.build(site) != OK && ((site != null || site != undefined))) {
                //console.log('bahia')
                creep.moveTo(site);
            } else if (site == null || site == undefined){
                //console.log('bahia2')
                creep.moveTo(source_target)
            }
        }
        else if (!creep.memory.isfull){
            if(creep.harvest(source_target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source_target)
            }
        }
    }
};