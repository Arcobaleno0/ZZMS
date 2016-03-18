/*
 Author: Pungin
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.getDirectionStatus(true);
        ms.lockUI(true);
        ms.disableOthers(true);
        // UPDATE_STATS HP 250
        // UPDATE_STATS MP 120
        ms.teachSkill(30011109, 1, 1);
        ms.teachSkill(30010110, 1, 1);
        ms.teachSkill(30010185, 1, 1);
        ms.getDirectionEffect(3, "", [0]);
        ms.spawnNPCRequestController(2159307, 1430, 50);
        ms.showEffect(false, "demonSlayer/back");
        ms.showEffect(false, "demonSlayer/text0");
        ms.getDirectionEffect(1, "", [500]);
    } else if (status == 0) {
        ms.showEffect(false, "demonSlayer/text1");
        ms.getDirectionEffect(1, "", [1000]);
    } else if (status == 1) {
        ms.getDirectionEffect(3, "", [2]);
        ms.getDirectionEffect(1, "", [3000]);
    } else if (status == 2) {
        ms.showEffect(false, "demonSlayer/text2");
        ms.getDirectionEffect(1, "", [500]);
    } else if (status == 3) {
        ms.showEffect(false, "demonSlayer/text3");
        ms.getDirectionEffect(1, "", [4000]);
    } else if (status == 4) {
        ms.showEffect(false, "demonSlayer/text4");
        ms.getDirectionEffect(1, "", [500]);
    } else if (status == 5) {
        ms.showEffect(false, "demonSlayer/text5");
        ms.getDirectionEffect(1, "", [4000]);
    } else if (status == 6) {
        ms.showEffect(false, "demonSlayer/text6");
        ms.getDirectionEffect(1, "", [500]);
    } else if (status == 7) {
        ms.getDirectionEffect(3, "", [0]);
        ms.showEffect(false, "demonSlayer/text7");
        ms.getDirectionEffect(1, "", [100]);
    } else if (status == 8) {
        ms.sendNextS("܊�F�L�� �@�����g����ȥ���ˣ���Ε���Ӎȫ�o�أ� ����κ��˶���� #p2159309#�����Ҳ꣬һֱ̎�ķe�]���ڵȴ��C����", 5, 2159307);
    } else if (status == 9) {
        ms.sendNextPrevS("���������ĺܲ������� ��������܊�F�L��׽���r�g����Ů�����Բŕ��������˼ɶʵġ� �ߣ� #p2159309#������ֻ����΢�ڱ�Ů����p�۶��ѡ� ����߀�ǿ����ñ���ĵ�λ���M�еģ�", 5, 2159307);
    } else if (status == 10) {
        ms.getDirectionEffect(3, "", [2]);
        ms.getDirectionStatus(true);
    } else if (status == 11) {
        ms.sendNextS("�š� �����ƽ����Ԓ�������؟�R���f��׼�f�@�N���o���x��Ԓ�ˡ� ��ԓ�����ǰl��ʲ�N���˰ɣ� �м����������Ęɫ�ǳ��y���� �����e������᣿ ߀����ǰ�ڑ��Y���܂����أ�", 5, 2159307);
    } else if (status == 12) {
        ms.sendNextPrevS("��#p2151009#�� ���ǡ� ��ħ�������ǃɂ��ˮ����l�Ĳ����أ�", 3);
    } else if (status == 13) {
        ms.sendNextPrevS("�ţ� ���ͻȻ�@�ӆ��أ�", 5, 2159307);
    } else if (status == 14) {
        ms.sendNextPrevS("Ո���c�ش�", 3);
    } else if (status == 15) {
        ms.sendNextPrevS("�@�� �Ү�Ȼ��Ч��춂�����ǂ��ˡ� ���ǣ��ԏ��������֮�ᣬ�ұ��¶��Q��Ҫ���@�l������I�o���ˣ� �㲻��֪���᣿ ���Ǟ�΅s����", 5, 2159307);
    } else if (status == 16) {
        ms.sendNextPrevS("�������Ӛ��һ�����顣", 3);
    } else if (status == 17) {
        ms.sendNextPrevS("���@���š� ���o��Щ���Q�� #rӢ��#k���˂���", 3);
    } else if (status == 18) {
        ms.sendNextPrevS("�ţ� ���Ҫ���o�����ء� �����x�_��λ����һ�����Ё��f���f�Z�ˡ� ���Ǻ��������|�������ع��Ԓ��һ�����������`����ħ�����������ģ� һ�������@�ӵģ� �㵽������Щʲ�N�أ�܊�F�L��", 5, 2159307);
    } else if (status == 19) {
        ms.sendNextPrevS("�����ѽ�����܊�F�L�ˡ�", 3);
    } else if (status == 20) {
        ms.sendNextPrevS("�y���� ��Ҫ���Ѻ�ħ�����᣿ �㲻��һ���������\�Ć᣿ ���I�r�g���Ҳ߀ֻ�ǲ���ǰ��������ѣ� �F��ֻҪ�����Iȡ���ͺ��ˡ� ��ʲ�N�s�� �@�Ǟ�ʲ�N�أ�", 5, 2159307);
    } else if (status == 21) {
        ms.sendNextPrevS("���ѽ��]�r�g�ˡ� �����@��������f̫���y�����Ҿ��ջذɡ� ���Ҳ���Ҫ���㽻�֡�", 3);
    } else if (status == 22) {
        ms.sendNextPrevS("���}������������y�� ��ֻ�Ǔ�������ѡ���", 5, 2159307);
    } else if (status == 23) {
        ms.sendNextPrevS("......", 3);
    } else if (status == 24) {
        ms.sendNextPrevS("��ļ���ԓ���N�k�أ� �@���f������Σ������ļ��˵ġ���", 5, 2159307);
    } else if (status == 25) {
        ms.sendNextPrevS("�e���f�ˣ� ���˞�ֹ�ɣ�", 3);
    } else if (status == 26) {
        ms.sendNextPrevS("����ʲ�N�أ� �y���ǡ� �y�������l��ʲ�N�����ˣ�", 5, 2159307);
    } else if (status == 27) {
        ms.sendNextPrevS("......", 3);
    } else if (status == 28) {
        ms.sendNextPrevS("���Բŕ��֡� �e���f�ˡ� �ðɡ� �㱾�����@�N��Ԓ���˰ɣ�", 5, 2159307);
    } else if (status == 29) {
        ms.sendNextPrevS("�ܺá� ����ـ����������Ҳ�����@���Ž��o�����ġ�", 5, 2159307);
    } else if (status == 30) {
        ms.sendNextPrevS("���Ǳ�Ǹ�� #p2151009#��", 3);
    } else if (status == 31) {
        ms.sendNextPrevS("Ո��Ҫ��Ǹ�� �ҵ������Ǟ�������ڵģ� ���܉򽻽o���@�N�΄գ��ҷ����е��ܸ��d��", 5, 2159307);
    } else if (status == 32) {
        ms.sendNextPrevS("���Ҿ����������·�ˡ� ϣ�����܉�ɹ���", 5, 2159307);
    } else if (status == 33) {
        ms.setNPCSpecialAction(2159307, "teleportation");
        ms.getDirectionEffect(1, "", [720]);
    } else if (status == 34) {
        ms.removeNPCRequestController(2159307);
        ms.sendNextS("(�@�����g�x�x���ˡ� #p2151009#.)", 3);
    } else if (status == 35) {
        ms.getDirectionEffect(3, "", [2]);
        ms.getDirectionStatus(true);
    } else {
        ms.getDirectionStatus(true);
        ms.dispose();
        ms.warp(927000080, 0);
    }
}


