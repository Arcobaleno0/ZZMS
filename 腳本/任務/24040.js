var status = -1;

function end(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        qm.sendNextS("�@���ǌ��ҵ��{��᣿�@������ģ��@һ���ǈ�������", 2);
        qm.forceCompleteQuest();
    } else {
        qm.forceCompleteQuest(29952);
        qm.gainItem(1142336,1);
        qm.dispose();
	}
}
