/* global ms */
var status = -1;
var select = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.getDirectionStatus(true);
        ms.lockUI(1, 1);
        ms.spawnNPCRequestController(1032203, 0, 0, 0, 5455262);
        ms.getDirectionEffect(1, "", [1500]);
        ms.getDirectionStatus(true);
    } else if (status === i++) {
        ms.getNPCTalk(["���ң�����ʲ�N����أ�"], [3, 0, 0, 0, 17, 0, 0, 1, 0]);
        ms.playVoiceEffect("Voice.img/Luminous_M/0");
    } else if (status === i++) {
        ms.getDirectionEffect(5, "", [0, 300, 0, 27]);
    } else if (status === i++) {
        ms.getDirectionEffect(1, "", [1671]);
    } else if (status === i++) {
        ms.getNPCTalk(["���၆Ҳ..."], [3, 0, 0, 0, 17, 0, 0, 1, 0]);
    } else if (status === i++) {
        ms.getDirectionEffect(5, "", [0, 300, 500, 27]);
    } else if (status === i++) {
        ms.getDirectionEffect(1, "", [1667]);
    } else if (status === i++) {
        ms.getNPCTalk(["��Ҳ..."], [3, 0, 0, 0, 17, 0, 0, 1, 0]);
    } else if (status === i++) {
        ms.getDirectionEffect(5, "", [1, 0]);
    } else if (status === i++) {
        ms.getDirectionEffect(1, "", [0]);
    } else if (status === i++) {
        ms.getNPCTalk(["����ɭ��Ҳ��ȫ��������ɵġ�"], [3, 0, 0, 0, 17, 0, 0, 1, 0]);
    } else if (status === i++) {
        ms.getNPCTalk(["�@�����Ǻ�ħ�����������w�ȵ���˼���Ǖr�ڰ�������һֱ��˯�����w�ȡ�"], [3, 0, 0, 0, 17, 0, 1, 1, 0]);
    } else if (status === i++) {
        ms.getNPCTalk(["��ʲ�N�ǬF��?�y����ħ�������_��ӡ�ˆ�?�����@�ӵ�Ԓ���ڰ�����������ͻȻ���ߡ�"], [3, 0, 0, 0, 17, 0, 1, 1, 0]);
    } else if (status === i++) {
        ms.getNPCTalk(["ԓ���N�k?ʧȥ����������F�ڵ��ң���..."], [3, 0, 0, 0, 17, 0, 1, 1, 0]);
    } else if (status === i++) {
        ms.getNPCTalk([], [3, 0, 0, 23, 1, 0]);
    } else if (status === i++) {
        if (select === -1) {
            select = selection;
        }
        ms.getNPCTalk(["�����ܱ������@�����������၆���ٴ�����ڰ������������Ɖ��@���硣��ʹ���h�����ڷ�ӡ�e��"], [3, 0, 0, 0, 17, 0, 0, 1, 0]);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [2]);
        ms.playVoiceEffect("Voice.img/Luminous_M/2");
    } else if (status === i++) {
        ms.getDirectionEffect(1, "", [1000]);
    } else if (status === i++) {
        ms.teachSkill(20040216, 1, 1);//���g
        ms.teachSkill(20040217, 1, 1);//���g
        ms.teachSkill(20040221, 1, 1);//��������
        ms.teachSkill(20041222, 1, 1);//�ǹ����
        ms.unequip(1212000, true); //����
        ms.unequip(1052495, true); //�W�����L��
        ms.unequip(1072700, true); //�W����Ь
        ms.unequip(1102442, true); //�W��������
        if (select === 0) {
            ms.teachSkill(27001100, 1, 20);//�����W��
            ms.teachSkill(27000106, 1, 5);//��ħ������
            ms.gainItem(1142478, 1); //�һع���
            ms.equip(1052496, -5); //�W�����L��
            ms.equip(1072701, -7); //�W����Ь
            ms.equip(1102443, -9); //�W��������
        } else {
            ms.teachSkill(27001201, 1, 20);//�ڰ����w
            ms.teachSkill(27000207, 1, 5);//�ڰ�ħ������
            ms.gainItem(1142479, 1); //����ڰ���
            ms.equip(1052497, -5); //���ښW�����L��
            ms.equip(1072702, -7); //���ښW����Ь
            ms.equip(1102444, -9); //���ښW��������
        }
        ms.equip(1212001, -11); //����
        ms.equip(1352400, -10); //�ǹ⏗
        var level = 10 - ms.getLevel();
        for (var i = 0 ; i < level ; i++) {
            ms.levelUp();
        }
        ms.lockUI(0);
        ms.removeNPCRequestController(5455262);
        ms.dispose();
        ms.warp(101000100, 0);
    } else {
        ms.dispose();
    }
}
