/* global qm */

var status = -1;


function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status === i++) {
        qm.dispose();
    } else if (status === i++) {
        if (mode !== 1) {
            qm.dispose();
            return;
        }
        qm.sendNext("���S�@�����\�� �@���҂����r�x�_���ħ����׃�ě�����֮��һ�ӡ��҂��ٶȻ؁�r�@Ƭ���ز��ԵÕ�׃����Ρ�");
    } else if (status === i++) {
        qm.sendYesNo("�ȴ��@������׃�ø�������ͬ�r�����ȳ�˯�ˣ� ���`�[�b��");
    } else if (status === i++) {
        qm.sendOk("ף�Ђ��������ɡ�");
    } else if (status === i++) {
        qm.forceCompleteQuest();
        qm.getDirectionStatus(true);
        qm.dispose();
    } else {
        qm.dispose();
    }
}
