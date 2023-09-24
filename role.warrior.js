module.exports = {
    sex: function(creep) {
        const checkpoint1 = Game.flags.checkpoint1
        var enemy_creeps = _.filter(creep.room.find(FIND_HOSTILE_CREEPS), wawa => wawa.owner.username !== 'Source Keeper')
        var enemy_structures = _.filter(creep.room.find(FIND_HOSTILE_STRUCTURES), (enemy_structures => enemy_structures.structureType == STRUCTURE_SPAWN))
        var target_creep = creep.pos.findClosestByPath(enemy_creeps)
        var enemy_count = 0
        var structure_count = 0
        var target_structure = creep.pos.findClosestByPath(enemy_structures)
        var attack_flag = Game.getObjectById('5bbca9e59099fc012e6304e8')
        var force_target = Game.getObjectById('64bafc62098be6b4cad23a2c')
        //console.log (creep.room.name)
        //console.log (attack_flag)
        for (x in enemy_creeps){
            enemy_count += 1
        }
        for (x in enemy_structures){
            structure_count += 1
        }
        if (Memory.rataattack == false){
            if (enemy_count > 0 && creep.room.name == 'W57N46'){
                if(creep.attack(target_creep) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target_creep)
                    console.log(enemy_count)
                }
            }
            else{
                creep.moveTo(checkpoint1)
            }
        }
        else if (Memory.rataattack == true){
            if (String(creep.room.name) == 'W51N42'){
                if (structure_count > 0 && ((!force_target || force_target == null || force_target == undefined))){
                    if(creep.attack(target_structure) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target_structure)
                    }
                }
                else if (!force_target || force_target == null || force_target == undefined){
                    if(creep.attack(target_creep) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target_creep)
                    }
                }
                
            }
            else if (Memory.rataattack == true && (!force_target || force_target == null || force_target == undefined)) {
                creep.moveTo(Game.flags.attack3)
            }
            if (force_target){
                if(creep.attack(force_target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(force_target)
                }
            }
        }
    }
}

