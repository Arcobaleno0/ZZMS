var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        cm.sendSimple("�ȵ�!! Ҫ�Ƅӵ��Ă���ħ�ļ�����?#b\r\n#b#L0# ������ħ#l\r\n#L1# һ����ħ#l\r\n#L2# ������ħ#l");
    } else if (status == 1) {
        var level = cm.getPlayer().getLevel();
        if (selection == 0) {
            if (level < 50) {
                cm.sendNext("����������񲻉�, ����ȼ�50�ف�ɡ�");
            } else if (!cm.haveItem(4001796)) {
                cm.playerMessage("��]����Ҫ�I�o������ħ�ļ�Ʒ����˟o���M���Ƅӡ�");
            } else {
                cm.playPortalSE();
                cm.warp(211042402, "west00");
            }
        } else if (selection == 1) {
            if (level < 90) {
                cm.sendNext("����������񲻉�, ����ȼ�90�ف�ɡ�");
            } else if (!cm.haveItem(4001017)) {
                cm.playerMessage("��]����Ҫ�I�oһ����ħ�ļ�Ʒ����˟o���M���Ƅӡ�");
            } else {
                cm.playPortalSE();
                cm.warp(211042400, "west00");
            }
        } else if (selection == 2) {
            if (level < 90) {
                cm.sendNext("����������񲻉�, ���㵽��90���ف�ɡ�");
            } else if (!cm.haveItem(4001017)) {
                cm.playerMessage("��]����Ҫ�I�o������ħ�ļ�Ʒ����˟o���M���Ƅӡ�");
            } else {
                cm.playPortalSE();
                cm.warp(211042401, "west00");
            }
        }
        cm.dispose();
    }
}