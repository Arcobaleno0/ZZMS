var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        qm.forceStartQuest(24041, "1");
        qm.sendPlayerToNpc("�������o���F�ںú����뵽�װl����ʲ�N��");
    } else if (status == 1) {
        qm.sendPlayerToNpc("�����ľ��`߀�ڱ�����Ժ�ħ�������{����Ȼ߀�������ã�");
    } else if (status == 2) {
        qm.sendPlayerToNpc("����Ψһһ���с�ģ��Ҳ�֪����ʲ�N�����Ҹ��X��ħ�������{���ڜp����");
    } else if (status == 3) {
        qm.sendPlayerToNpc("�ҬF�ڱ�횳�ȥ����Ҫ������ȥ���������ʲ�N���ˡ������ҬF��ֻ��10�ȼ����治�����š����{������������ж��");
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
	qm.completeQuest(24041);
	qm.dispose();
}
