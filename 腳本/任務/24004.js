/* global qm */

var status = -1;

function start(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status === i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendYesNo("#b(��Ҋ�˄���Y���ħ�����Z�ԡ�������Z������əѻ�̎�ĽY���ˡ�������100���κ��˶��o�������@�����f�ď���Y�硭 ���ǽY��᣿)");
    } else if (status === i++) {
        qm.sendOk("#b(����Y���ˡ��F�ڴ��f��ȫ�ˡ�)");
        qm.forceCompleteQuest();
        qm.getDirectionStatus(true);
        qm.dispose();
    } else {
        qm.dispose();
    }
}
