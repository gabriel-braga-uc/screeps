const roleExtraMiner = require('role.extraminer');
const roleExtraBuilder = require('role.extrabuilder');
const roleExtraSpawnFiller = require('role.extraspawnfiller');
const roleWarrior = require('role.warrior')
const roleRangedWarrior = require('role.rangedwarrior')
const roleMiner_w57n46 = require('role.miner_w57n46')
const roleClaimer = require('role.claimer')
const roleBuilderBuilder = require ('role.builderbuilder')
const roleControler_w57n45 = require('role.controler_w57n45')
const roleControler_w58n47 = require('role.controler_w58n47')
const roleMiner_w57n45 = require('role.miner_w57n45')
const roleRemoteKarrier_w57n46 = require('role.remotekarrier_w57n46')

module.exports.loop = function () {

    console.log('———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————')
    console.log("Tick: " + Game.time)
    
    // <General variables and constants delcarations>
    var rem_c = 0   
    var reb_c = 0
    var resf_c = 0
    var rw_c = 0
    var rrw_c = 0
    var rc_c = 0
    var rm_c = 0
    var rbb_c = 0
    var rcw57n46_c = 0
    var rcw58n47_c = 0
    var rmw57n45_c = 0
    var rrkw57n46_c = 0
    const rem_t = 1
    const reb_t = 7
    const rbb_t = 1
    const resf_t = 2
    const rw_t = 2
    const rrw_t = 0
    const rc_t = 1
    const rm_t = 0
    const rcw57n46_t = 4
    const rcw58n47_t = 4
    const rmw57n45_t = 1
    const rrkw57n46_t = 0
    idtrem = Memory.extraMinerId
    idtreb = Memory.extraBuilderId
    idtresf = Memory.extraSpawnFillerId
    idtrw = Memory.warriorId
    idtrrw = Memory.rangedWarriorId
    idtrm = Memory.minerId
    idtrc = Memory.claimerId
    idtrbb = Memory.builderBuilderId
    idtrcw57n46 = Memory.controler_w57n45Id
    idtrcw58n47 = Memory.controler_w58n47Id
    idtrmw57n45 = Memory.miner_w57n45Id
    idtrrkw57n46 = Memory.remoteKarrier_w57n46Id
    for (room in Game.rooms){
    tempname_rem = 'rataExtraMiner_' + String(idtrem)
    tempname_reb = 'rataExtraBuilder_' + String(idtreb)
    tempname_resf = 'rataExtraSpawnFiller_' + String(idtresf)
    tempname_rw = 'rataWarrior_' + String(idtrw)
    tempname_rrw = 'rataRangedWarrior_' + String(idtrrw)
    tempname_rm = 'rataMiner_' + String(idtrm)
    tempname_rc = 'rataClaimer_' + String(idtrc)
    tempname_rbb = 'rataBuilderBuilder_' + String(idtrbb)
    tempname_rcw57n46 ='rcw57n45_' + String(idtrcw57n46)
    tempname_rcw58n47 = 'rcw58n47_' + String(idtrcw58n47)
    tempname_rmw57n45 = 'rmw57n45_' + String(idtrmw57n45)
    tempname_rrkw57n46 = 'rrkw57n46_' + String(idtrrkw57n46)
    }
    var torres_W57N46 = _.filter(Game.rooms.W57N46.find(FIND_STRUCTURES), wawa => wawa.structureType == STRUCTURE_TOWER)
    var hostiles_W57N46 = Game.rooms.W57N46.find(FIND_HOSTILE_CREEPS)
    var hostiles_W57N46_c = 0
    var damaged_creeps_W57N46 = _.filter(Game.rooms.W57N46.find(FIND_MY_CREEPS), wawa => wawa.hits < wawa.hitsMax)
    for (x in hostiles_W57N46){
        hostiles_W57N46_c += 1
    }
    var structures_repair_W57N46 = Game.rooms.W57N46.find(FIND_STRUCTURES, {filter: (s) => s.hits < (s.hitsMax - 800) && s.hits < 10000})
    // <Tower code>
    for (let torre of torres_W57N46){
        if (hostiles_W57N46_c == 0){
        var repair_target = torre.pos.findClosestByRange(structures_repair_W57N46)
        var target_heal = torre.pos.findClosestByRange(damaged_creeps_W57N46)
        torre.heal(target_heal)
        torre.repair(repair_target)
        var repair_target = null
        var target_heal = null
        
        }
        else if (hostiles_W57N46_c > 0) {
            var attack_target = torre.pos.findClosestByRange(hostiles_W57N46)
            torre.attack(attack_target)
            var attack_target = null
        }
    }
    // <Creep role functions assignment and creep count>
    Memory.miner_w57n45_count = 0
    Memory.rmw57n45_count = 0
    for (var xrata in Game.creeps){
        var therata = Game.creeps[xrata];
        if (therata.memory.role == 'extraminer'){
            roleExtraMiner.sex(therata);
            rem_c += 1
        } 
        else if (therata.memory.role == 'extrabuilder'){
            roleExtraBuilder.sex(therata);
            reb_c += 1
        }
        else if (therata.memory.role == 'extraspawnfiller'){
            roleExtraSpawnFiller.sex(therata);
            resf_c += 1
        }
        else if (therata.memory.role == 'warrior'){
            roleWarrior.sex(therata);
            rw_c += 1
        }
        else if (therata.memory.role == 'rangedwarrior'){
            roleRangedWarrior.sex(therata)
            rrw_c += 1
        }
        else if (therata.memory.role == 'miner'){
            roleMiner_w57n46.sex(therata)
            rm_c += 1
        }
        else if (therata.memory.role == 'claimer'){
            roleClaimer.sex(therata)
            rc_c += 1
        }
        else if (therata.memory.role == 'builderbuilder'){
            roleBuilderBuilder.sex(therata)
            rbb_c += 1
        }
        else if (therata.memory.role == 'controller_w57n45'){
            roleControler_w57n45.sex(therata)
            rcw57n46_c += 1
        }
        else if (therata.memory.role == 'controller_w58n47'){
            roleControler_w58n47.sex(therata)
            rcw58n47_c += 1
        }
        else if (therata.memory.role == 'miner_w57n45'){
            roleMiner_w57n45.sex(therata)
            rmw57n45_c += 1
            Memory.rmw57n45_count += 1
        }
        else if (therata.memory.role == 'remotekarrier_w57n46'){
            roleRemoteKarrier_w57n46.sex(therata)
            rrkw57n46_c += 1
            Memory.miner_w57n45_count += 1
        }
    }
    Memory.rem_a = rem_c
    Memory.reb_a = reb_c
    Memory.resf_a = resf_c
    Memory.rw_a = rw_c
    Memory.rrw_a = rrw_c
    Memory.rc_a = rc_c
    Memory.rm_a = rm_c
    Memory.rbb_a = rbb_c
    Memory.rcw58n47_a = rcw58n47_c
    Memory.rcw57n46_a = rcw57n46_c
    Memory.rmw57n45_a = rmw57n45_c
    Memory.rrkw57n46_a = rrkw57n46_c
    //console.log('Quantidade de ratas: ')
    //console.log('ExtraMiner: ' + String(Memory.rem_a) + '/' + String(rem_t))
    //console.log('ExtraBuilder: ' + String(Memory.reb_a) + '/' + String(reb_t))
    //console.log('ExtraSpawnFiller: ' + String(Memory.resf_a) + '/' + String(resf_t))
    //console.log('Warrior: ' + String(Memory.rw_a) + '/' + String(rw_t))
    //console.log('RangedWarrior: ' + String(Memory.rrw_a) + '/' + String(rrw_t))
    //console.log('Miner: ' + String(Memory.rm_a) + '/' + String(rm_t))
    //console.log('Claimer: ' + String(Memory.rc_a) + '/' + String(rc_t))
    //console.log('BuilderBuilder: ' + String(Memory.rbb_a) + '/' + String(rbb_t))
    //console.log('Controller_W57N45: ' + String(Memory.rcw57n46_a) + '/' + String(rcw57n46_t))
    //console.log('Controller_W58N47: ' + String(Memory.rcw58n47_a) + '/' + String(rcw58n47_t))
    //console.log('Miner_W57N45: ' + String(Memory.rmw57n45_a) + '/' + String(rmw57n45_t))
    //console.log('RemoteKarrier_W57N56: ' + String(Memory.rrkw57n46_a) + "/" + String(rrkw57n46_t))


    //if (rm_c < rm_t){
    //    spawnstatus_rm = Game.spawns.spawn1.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], tempname_rm, {role: "miner"}) 
//
    //    if (spawnstatus_rm != tempname_rm){
    //        console.log(spawnstatus_rm)
    //    }
    //    else{
    //        newid_rm = idtrm + 1
    //        Memory.minerId = newid_rm
    //    }
    //}
//
    //W57N46 SPAWNS
    if (resf_c < resf_t){ //Cost: 600
        spawnstatus_resf = Game.spawns.spawn1.createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], tempname_resf, {role: "extraspawnfiller"}) 
        if (spawnstatus_resf != tempname_resf){
            if (parseInt(spawnstatus_resf) == -6 && resf_c == 0){
                spawnstatus_resf = Game.spawns.spawn1.createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], tempname_resf, {role: "extraspawnfiller"})
                if (spawnstatus_resf != tempname_resf){
                    console.log('1 fuck')
                }
                else{
                    newid_resf = idtresf + 1
                    Memory.extraSpawnFillerId = newid_resf
                }
            }
        }
        else{
            newid_resf = idtresf + 1
            Memory.extraSpawnFillerId = newid_resf
        }
    } else  if (rw_c < rw_t && resf_c == resf_t){ //Cost: 1280
        spawnstatus_rw = Game.spawns.spawn1.createCreep([TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE], tempname_rw, {role: "warrior"}) 

        if (spawnstatus_rw != tempname_rw){
            console.log('2 fuck')
        }
        else{
            newid_rw = idtrw + 1
            Memory.warriorId = newid_rw
        }
    } else if (reb_c < reb_t && rw_c == rw_t){ //Cost: ?
        spawnstatus_reb = Game.spawns.spawn1.createCreep([WORK,WORK,WORK,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], tempname_reb, {role: "extrabuilder"})
        if (spawnstatus_reb != tempname_reb){
            console.log('3 fuck')
        }
        else{
            newid_reb = idtreb + 1
            Memory.extraBuilderId = newid_reb
        }
    } else if (rrw_c < rrw_t && reb_c == reb_t){ //Cost: ~1000
        spawnstatus_rrw = Game.spawns.spawn1.createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK], tempname_rrw, {role: "rangedwarrior"}) 
        if (spawnstatus_rrw != tempname_rrw){
            console.log('4 fuck')
        }
        else{
            newid_rrw = idtrrw + 1
            Memory.rangedWarriorId = newid_rrw
        }
    } else  if (rem_c < rem_t && rrw_c == rrw_t){
        spawnstatus_rem = Game.spawns.spawn1.createCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], tempname_rem, {role: "extraminer"}) 

        if (spawnstatus_rem != tempname_rem){
            console.log('5 fuck')
        }
        else{
            newid_rem = idtrem + 1
            Memory.extraMinerId = newid_rem
        }
    } else  if (rc_c < rc_t && rem_c == rem_t){
        spawnstatus_rc = Game.spawns.spawn1.createCreep([CLAIM,MOVE], tempname_rc, {role: "claimer"}) 
        if (spawnstatus_rc != tempname_rc){
            console.log('6 fuck')
        }
        else{
            newid_rc = idtrc + 1
            Memory.claimerId = newid_rc
        }
    } else  if (rbb_c < rbb_t && rc_c == rc_t){
        spawnstatus_rbb = Game.spawns.spawn1.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], tempname_rbb, {role: "builderbuilder"}) 
        if (spawnstatus_rbb != spawnstatus_rbb){
            console.log('7 fuck')
        }
        else{
            newid_rbb = idtrbb + 1
            Memory.builderBuilderId = newid_rbb
        }
    } else if (rmw57n45_c < rmw57n45_t && rbb_c == rbb_t){
        spawnstatus_rmw57n45 = Game.spawns.spawn1.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], tempname_rmw57n45, {role: "miner_w57n45"}) 
        if (spawnstatus_rmw57n45 != spawnstatus_rmw57n45){ 
            console.log('8 fuck')
        }
        else{
            newid_rmw57n45 = idtrmw57n45 + 1
            Memory.miner_w57n45Id = newid_rmw57n45
        }
    }
    else if (rrkw57n46_c < rrkw57n46_t && rmw57n45_c == rmw57n45_t){
        spawnstatus_rrkw57n46 = Game.spawns.spawn1.createCreep([CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE], tempname_rrkw57n46, {role: "remotekarrier_w57n46"}) 
        if (spawnstatus_rrkw57n46 != spawnstatus_rrkw57n46){
            console.log('9 fuck') 
        }
        else{
            newid_rrkw57n46 = idtrrkw57n46 + 1
            Memory.remoteKarrier_w57n46Id = newid_rrkw57n46
        }
    }

    //W57N45 SPAWNS
    if (rcw57n46_c < rcw57n46_t){
        spawnstatus_rcw57n46 =Game.spawns.spawn1_w57n45.createCreep([WORK,CARRY,MOVE], tempname_rcw57n46, {role: 'controller_w57n45'})
        if (spawnstatus_rcw57n46 != spawnstatus_rcw57n46){ 
        }
        else{
            newid_rcw57n46 = idtrcw57n46 + 1
            Memory.controler_w57n45Id = newid_rcw57n46
        }
    }
    if (rcw58n47_c < rcw58n47_t){
        spawnstatus_rcw58n47 = Game.spawns.spawn.createCreep([WORK,CARRY,MOVE], tempname_rcw58n47, {role: 'controller_w58n47'})
        if (spawnstatus_rcw58n47 != spawnstatus_rcw58n47){ 
        }
        else{
            newid_rcw58n47 = idtrcw58n47 + 1
            Memory.controler_w58n47Id = newid_rcw58n47
        }
    }


    // <Dead creeps memory managing> 
    for(var i in Memory.creeps) {
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }
    


    // <CPU bucket managing> 
    var cpuBucket = Game.cpu.bucket
    //console.log ("CPU acumulada no balde: " + Game.cpu.bucket);
    //console.log ("CPU restante para o proximo pixel: " + (10000 - cpuBucket));
    //console.log ('Pixeis gerados até o momento: ' + String(Memory.totalpixels))
    if (Game.cpu.bucket == 10000){
        Game.cpu.generatePixel()
        //console.log("+1 Pixel!!");
        pxatuais = Memory.totalpixels
        Memory.totalpixels = pxatuais + 1
    }
    

}