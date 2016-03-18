/*
 Author: Pungin
 */
        var status = -1;
var jobSelect = -1;
function start() {
    if (ms.getJob() != 3001) {
        ms.dispose();
    } else {
        action(1, 0, 0);
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.lockUI(true);
        ms.disableOthers(true);
        ms.getDirectionStatus(true);
        ms.getDirectionEffect(3, "", [2]);
    } else if (status == 1) {
        ms.getDirectionEffect(3, "", [0]);
        ms.sendNextS("#b�X��һ�F��y...", 3);
    } else if (status == 2) {
        ms.sendNextPrevS("#b�����ҵ�������������ʧ�ǟo����׃������", 3);
    } else if (status == 3) {
        ms.sendNextPrevS("#b���������ҵ������fʲ�N?�@���������ں�ħ������������", 3);
    } else if (status == 4) {
        ms.sendNextPrevS("#b�@�ܵ��{���������ʧ���f�������ڸ��V��ԓ������·�ߡ�", 3);
    } else if (status == 5) {
        ms.sendNextPrevS("#b�Ҿ�Ȼ���f�@�N���ŵ�Ԓ���Ҍ��Լ������ĺ���", 3);
    } else if (status == 6) {
        ms.sendNextPrevS("#b�š��Q��һ��ԓ������ ��#h0#��Ҫʹ�Ì���ħ������ʹ���^��������߀�ǳ���ħ����ʹ�Ñ�ŭ��������", 3);
    } else if (status == 7) {
        ms.getDemonSelection();
    } else if (status == 8) {
        if (jobSelect == -1) {
            jobSelect = selection;
            while (ms.getLevel() < 10) {
                ms.levelUp();
            }
            ms.unequip(1322123, true); //1322123 - ���ҵďͳ�
            if (jobSelect == 0) {
                ms.changeJob(3101);
                var gender = ms.getPlayerStat("GENDER");
                ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/avenger/" + gender, [2820, -283, -120, 1, 1, 0, 0, 0]);
                if (gender == 0) {
                    ms.unequip(1050191, true); //1050191 - �ڰ���ħ���b
                    ms.unequip(1072518, true); //1072518 - �ڰ���ħЬ��
                    ms.equip(1050249, -5); //1050249 - ��ħ�������b
                    ms.equip(1070029, -7); //1070029 - ��ħ����Ь
                } else {
                    ms.unequip(1051236, true); //1051236 - �ڰ���ħ���b
                    ms.unequip(1072518, true); //1072518 - �ڰ���ħЬ��
                    ms.equip(1051305, -5); //1050249 - ��ħ����Y��
                    ms.equip(1071046, -7); //1070029 - ��ħ�����Lѥ
                }
                ms.equip(1102505, -9); //1102505 - ��ħ��������
                //STR 4
                //DEX 4
                ms.gainAp(23); //AVAILABLEAP 23
                ms.addHP(1550); //MAXHP 1744
                //MAXMP 10
                ms.gainSp(2); //AVAILABLESP [2] 
                ms.equip(1232001, -11); //1232001 - �{ɫ�ͳ���
                ms.gainItem(1142553, 1); //1142553 - ��ŭ�����
                if (gender == 0) {
                    ms.setHair(36460); //36460 - ��ɫ�ͳ�ħ����
                    ms.setFace(20284); //20284 - �tɫ�ª���Ę��
                } else {
                    ms.setHair(37450); //37450 - ��ɫ�ͳ�ħ����
                    ms.setFace(21280); //20284 - �tɫ�n���Ę��
                }
            } else {
                ms.equip(1322122, -11); //1322122 - ���ҵďͳ�
                ms.changeJob(3100);
                ms.getDirectionEffect(2, "Effect/BasicEff.img/JobChangedDemon", [0, 0, 0, 0, 0]);
            }
            ms.environmentChange("tutoCommon/JobChanged", 5);
        }
        if (jobSelect == 0) {
            ms.sendNextS("#b����ħ������ŭ�ĺ͑�ŭ�������ҡ��ҵ����w�@�Ӹ��V��!!", 3);
        } else {
            ms.sendNextS("#b���ˌ���ħ�����ͳ��Ԓ��Ҫ�ٴ�ʹ��܊�F�L�r����ʹ���^������!!", 3);
        }
    } else if (status == 9) {
        ms.sendNextPrevS("#b�x�_֮ǰ�����_���ߙڣ��_�J���ęڵ���Ʒ�������ߙ� #r'I'#b�ɴ��_��", 3);
    } else {
        ms.lockUI(false);
        ms.dispose();
    }
}