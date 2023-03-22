import random

mode_list = ['Turf War','Splat Zones','Tower Control','Rainmaker','Clam Blitz']
primary_gear_abiities_only = ['on','off']
stage_list = ['Scorch Gorge','Eeltail Alley','Hagglefish Market','Undertow Spillway'
              ,'Mincemeat Metalworks',"Hammerhead Bridge","Museum d'Alfonsino"
              ,"Mahi-Mahi Resort",'Inkblot Art Academy','Sturgeon Shipyard','MakoMart'
              ,'Wahoo World','Brinewater Springs','Flounder Heights'
              ,"Um'ami Ruins","Manta Maria"
              ]
recent_mode_list = []
recent_stage_list = []

def randomizer(mode_list,stage_list,primary_gear_abiities_only=None
               ,recent_mode_list=None
               ,recent_stage_list=None):
    #copy lists to modify
    _mode_list = mode_list.copy()
    _stage_list = stage_list.copy()

    #modify lists
    for r in recent_mode_list:
        _mode_list.remove(r)
    for r in recent_stage_list:
        _stage_list.remove(r)

    print(recent_mode_list)
    print(recent_stage_list)

    #select randoms
    if primary_gear_abiities_only:
        _choice_primary_gear_abiities_only = random.choice(primary_gear_abiities_only)
    else:
        _choice_primary_gear_abiities_only = 'off'
    _choice_mode = random.choice(_mode_list)
    _choice_stage = random.choice(_stage_list)
    return_string = '''MODE: {_choice_mode} \n STAGE: {_choice_stage} \n PRIMARY GEAR ABILITIES ONLY: {_choice_primary_gear_abiities_only}
                        '''.format(_choice_primary_gear_abiities_only=_choice_primary_gear_abiities_only
                           ,_choice_mode=_choice_mode
                           ,_choice_stage=_choice_stage
                           )
    #modify recents
    recent_mode_list.insert(0,_choice_mode)
    recent_mode_list = recent_mode_list[:2] #last two modes
    recent_stage_list.insert(0, _choice_stage)
    recent_stage_list = recent_stage_list[:3] #last 3 stages

    print(recent_mode_list)
    print(recent_stage_list)

    return {'return_string':return_string
            ,'recent_mode_list':recent_mode_list
            ,'recent_stage_list':recent_stage_list
            }


#ls.insert(0, "new")
randomz = randomizer(mode_list,stage_list,primary_gear_abiities_only,recent_mode_list,recent_stage_list)
recent_mode_list = randomz['recent_mode_list']
recent_stage_list = randomz['recent_stage_list']
print(randomz['return_string'])