var status = -1;

function start(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        qm.sendNextS("�mȻ���X��������һ�c�\�⵫�����Ļش�Ҳ�S�ǌ��ġ�", 2);
    } else if (status === i++) {
        qm.sendNextS("���ҁ��f������ͺ�ħ�����l���ğ����Y���ǌ��������ѽ��ǔ�����ǰ�������ښvʷ���п���������", 2);
    } else if (status === i++) {
        qm.sendNextS("�������o��֮��ʹ�õ�����Ҳ����ʧ�ˡ��� �Gˮ�` ���Y�����ⴭ�������ң��F��Ҳ�S�ȴ���߀��", 2);
    } else if (status === i++) {
        qm.sendNextS("�͏�ǰ����r��ͬ�ˡ����^ȥ�ɿ���ͬ����һ��ͬ���ǬF������߅�]��һ���ˡ��lҲ�]�С�", 2);
    } else if (status === i++) {
        qm.sendNextS("���ǡ����ǣ���ʹ�@����߀��Ҫվ����������������ҵİ��ն�����ħ�������{���P�M�����e�ľ��`֮����", 2);
    } else if (status === i++) {
        qm.sendNextS("�������f�����S�ŗ��ɂ��֡�", 2);
    } else if (status === i++) {
        qm.sendNextS("��Ҫ�ŗ����ġ����Ҫ�G�_��", 2);
    } else {
        qm.forceCompleteQuest(24051);
        qm.gainExp(2000);
        qm.dispose();
    }
}

function end(mode, type, selection) {
	qm.dispose();
}
