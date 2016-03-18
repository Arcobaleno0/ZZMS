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
        ms.disableOthers(true);
        ms.sendSimpleS("���, Ո������Ԅe��?\r\n#L0#����һ��#b����#k, �㿴������?!#l\r\n#L1#�ð�, �Ү�Ȼ��һ��#rŮ��#k��!#l", 1, 9010000);
    } else if (status === i++) {
        if (select === -1) {
            select = selection;
            ms.unequip(-6, true); // ѝ��
            if (select === 1) {
                ms.setGender(1);
                ms.setFace(21158); // ��ɫ��Ů��Ę��
                ms.setHair(34773); // �Sɫ����������
                ms.equip(1051355, -5, true); // �Sɫ�c�c����
            } else {
                ms.setGender(0);
                ms.setFace(20169); // ��ɫ�׹���Ę��
                ms.setHair(36033); // �Sɫ�׹�������
                ms.equip(1050288, -5, true); // �tɫ�����׷�
            }
            ms.equip(1072833, -7, true); // �Sɫð�UЬ
        }
        ms.sendNextS("��, ԭ����һ���ɐ۵�" + (select === 0 ? "����" : "Ů��") + "��, �õ�, ף���[�����!", 1);
    } else if (status === i++) {
        ms.getTopMsg("�ֲ��ص��s؛�̵�");
        ms.getDirectionEffect(1, "", [500]);
    } else if (status === i++) {
        ms.getTopMsg("��֮�ȕ� XXXX�� 3��4�ա� ");
        ms.getDirectionEffect(1, "", [1000]);
    } else if (status === i++) {
        ms.getDirectionEffect(2, "Effect/Direction7.img/effect/tuto/step0/0", [2000, 0, -100, 1, 0, -100]);
        ms.getDirectionFacialExpression(6, 10000);
        ms.getDirectionEffect(1, "", [2000]);
    } else if (status === i++) {
        ms.getDirectionEffect(2, "Effect/Direction7.img/effect/tuto/step0/1", [2000, 0, -100, 1, 0, -100]);
        ms.getDirectionEffect(1, "", [2000]);
    } else if (status === i++) {
        ms.getDirectionEffect(2, "Effect/Direction7.img/effect/tuto/step0/2", [3000, 0, -100, 1, 0, -100]);
        ms.getDirectionFacialExpression(4, 8000);
        ms.getDirectionEffect(1, "", [3000]);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [1]);
        ms.getDirectionEffect(3, "", [0]);
        ms.getDirectionEffect(2, "Effect/Direction7.img/effect/tuto/step0/3", [3000, 0, -100, 1, 0, -100]);
        ms.getDirectionFacialExpression(6, 2000);
        ms.getDirectionEffect(1, "", [2000]);
    } else if (status === i++) {
        ms.getDirectionEffect(1, "", [1000]);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [1]);
        ms.getDirectionEffect(3, "", [0]);
        ms.getNPCTalk(["�С���Ԓ�����f�᣿"], [4, 1106000, 0, 0, 3, 0, 0, 1, 0]);
    } else if (status === i++) {
        ms.getNPCTalk(["���ʲ�N���֣�"], [4, 1106000, 0, 0, 1, 0, 1, 1, 0]);
    } else if (status === i++) {
        ms.getNPCTalk(["�ҡ��]�����֡����� #b��Сë�^��#k���ֲ��ش���Ҳ�@�ӽС�����ʲ�N��Ʒ�أ�"], [4, 1106000, 0, 0, 3, 0, 1, 1, 0]);
    } else if (status === i++) {
        ms.getNPCTalk(["���ˡ��]�м��ˆ᣿"], [4, 1106000, 0, 0, 1, 0, 1, 1, 0]);
    } else if (status === i++) {
        ms.getNPCTalk(["�қ]�м��ˡ�#b\r\n���@������ʲ�N����ʲ�N�����@Щ�� ��#k\r\n����]����Ҫ����Ʒ���Ҿ��ȡ�"], [4, 1106000, 0, 0, 3, 0, 1, 1, 0]);
    } else if (status === i++) {
        ms.getNPCTalk(["��֪���}���Tʿ����֮�N�᣿"], [4, 1106000, 0, 0, 1, 0, 1, 1, 0]);
    } else if (status === i++) {
        ms.getNPCTalk(["����֮�N�᣿ �@����...�Ҳ�̫...#b\r\n������֮�N���l�� �@���˞�ʲ�N�����@Щ����"], [4, 1106000, 0, 0, 3, 0, 1, 1, 0]);
    } else if (status === i++) {
        ms.getNPCTalk(["#eСë�^��\r\n�����������һ�壬��߀�ڸ��l���죿"], [4, 1106000, 0, 0, 5, 0, 1, 1, 0, 1106002]);
    } else if (status === i++) {
        ms.getNPCTalk(["�ǡ��ǣ� �ֲ��ش��壡 ��Ҫ�����ˣ�\r\n�ǂ������N���ҡ��ȸ��o��"], [4, 1106000, 0, 0, 3, 0, 1, 1, 0]);
    } else if (status === i++) {
        ms.forceCompleteQuest(20030);
        ms.getDirectionEffect(2, "Effect/Direction7.img/effect/tuto/step0/4", [2000, 0, -100, 1, 0, -100]);
        ms.getDirectionFacialExpression(6, 2000);
        ms.getDirectionEffect(1, "", [2000]);
    } else if (status === i++) {
        ms.getNPCTalk(["ȥ�����e�أ� �@���ˣ�\r\n���ǵģ� ���ֲ��ش����Ӗ��֮ǰҪ���c��������Ǭ�Q��"], [4, 1106000, 0, 0, 3, 0, 0, 1, 0]);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [2]);
        ms.getDirectionEffect(1, "", [800]);
    } else if (status === i++) {
        ms.lockUI(0);
        ms.disableOthers(false);
        ms.dispose();
        ms.warp(913070001, 0);
    } else {
        ms.dispose();
    }
}
