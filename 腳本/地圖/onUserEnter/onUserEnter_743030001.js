/* global ms */
var status = -1;

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
        ms.getDirectionEffect(1, "", [500]);
        ms.getDirectionStatus(true);
    } else if (status === i++) {
        ms.getNPCTalk(["ԇ������"], [3, 0, 9330203, 0, 1, 0, 0, 1, 0]);
    } else if (status === i++) {
        if (ms.getOneInfo(52410, "equip") !== "1") {
            ms.gainItem(2000004, 5);
            ms.gainItem(2000003, 10);
            if (ms.getPlayerStat("GENDER") === 0) {
                ms.equip(1050236, -5); // ����F�Y��
            } else {
                ms.equip(1051286, -5); // ����F�Y��
            }
            ms.equip(1072665, -7); // ����Fѥ��
            ms.equip(1102422, -9); // ����F���L
            ms.updateOneInfo(52410, "equip", "1");
        }
        ms.getDirectionFacialExpression(2, 10000);
        ms.getDirectionEffect(1, "", [500]);
    } else if (status === i++) {
        ms.getNPCTalk(["����?�����ˆ�?"], [3, 0, 9330203, 0, 1, 0, 0, 1, 0]);
    } else if (status === i++) {
        ms.getDirectionEffect(1, "", [300]);
    } else if (status === i++) {
        ms.getNPCTalk(["̫��̫�_���ˣ����ԣ��oԒ���f��"], [3, 0, 9330203, 0, 3, 0, 0, 1, 0]);
    } else if (status === i++) {
        ms.getDirectionEffect(1, "", [300]);
    } else if (status === i++) {
        ms.getDirectionEffect(1, "", [300]);
    } else if (status === i++) {
        ms.getNPCTalk(["��!�ҏĬF���_ʼҲ�Ǻ���F��һ����!"], [3, 0, 9330203, 0, 3, 0, 0, 1, 0]);
    } else if (status === i++) {
        ms.getNPCTalk(["��������Hһ�ӳɞ郞��Ăb��,��Ҫ���J����ޟ���!"], [3, 0, 9330203, 0, 3, 0, 1, 1, 0]);
    } else if (status === i++) {
        ms.getNPCTalk(["�٠����_�ģ��B�ҵ�����Ҳ׃�á�������Ҫȥ�͈F�L��Ҫ���ˡ�����]���ң���Ҳ��������ޟ���"], [3, 0, 9330203, 0, 1, 0, 1, 1, 0]);
    } else if (status === i++) {
        ms.getNPCTalk(["����֪����!Ү�!�x�x!!"], [3, 0, 9330203, 0, 3, 0, 1, 1, 0]);
    } else if (status === i++) {
        ms.lockUI(0);
        ms.dispose();
        ms.warp(743000000, 0);
    } else {
        ms.dispose();
    }
}
