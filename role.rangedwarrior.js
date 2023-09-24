module.exports = {
    sex: function(creep) {
        const checkpoint1 = Game.flags.checkpoint1
        var enemy_creeps = creep.room.find(FIND_HOSTILE_CREEPS)
        var targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3)
        var closest_target = creep.pos.findClosestByPath(enemy_creeps)
        var enemy_count = 0
        for (x in enemy_creeps){
            enemy_count += 1
        }
            if (enemy_count > 0){
                if(targets.length > 2){
                    creep.rangedMassAttack();
                }
                else if(creep.rangedAttack(closest_target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closest_target);
                    //console.log('mamamia')
                }
            }
            else{
                creep.moveTo(checkpoint1)
            }
        }
            
    }

