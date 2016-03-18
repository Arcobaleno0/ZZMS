/* global qm */

var status = -1;

function start(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendYesNo("(����������׌�����p�a������)");
    } else if (status === i++) {
        qm.forceCompleteQuest();
        qm.sendOk("(�ںͼ��ӵ�����ǳ������{��ƽ�o������ο�¡�ϣ�����ӂ�������������)");
        qm.playSoundEffect("Game/QueenOfElf");
        qm.getDirectionStatus(true);
        qm.dispose();
    } else {
        qm.dispose();
    }
}
