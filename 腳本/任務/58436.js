/*
 Made by Pungin
 */

        var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 4) {
            qm.sendOkSNew("���ǿ�ϧ�����顣", 0x20, 1);
            qm.dispose();
            return;
        }
        status--;
    }

    if (status == 0) {
        qm.sendNextSNew("���ã��ҵ����ֽС�K����#b#h0##k������  �ҵ�Ԓ�᣿ ", 0x20, 1);
    } else if (status == 1) {
        qm.sendNextPrevSNew("�����Ҳ��J�R����. �����N��֪���ҵ������أ�", 0x38, 1);
    } else if (status == 2) {
        qm.sendNextPrevSNew("��. �ǂ����J�鲻�����c. �������ӣ��F���Ҹ�����ՄԒ���������^��Ҫ��? ���ܱ��C�ҽ^������ʲ�N��ֵ���. �����������Щ��Ȥ�������ม�", 0x20, 1);
    } else if (status == 3) {
        qm.sendNextPrevSNew("�F���mȻ�o���˽⊅�f�����顭�á������f�f���ɡ�", 0x38, 1);
    } else if (status == 4) {
        qm.sendYesNoSNew("���x��. ���ȕ��r�Ƅӵ��e�ĵط�����. ����һ���߰ɡ�", 0x20, 1);
    } else if (status == 5) {
        qm.forceCompleteQuest();
        qm.gainExp(1000);
        qm.saveReturnLocation("MULUNG_TC");
        if (qm.getMapId() != 814000000) {
            qm.warp(814000000);
        }
        qm.dispose();
    } else {
        qm.dispose();
    }
}
