var status = -1;

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (cm.isQuestActive(24040)) {
        if (status <= i++) {
            cm.dispose();
        } else if (status === i++) {
            cm.lockUI(true);
            cm.disableOthers(true);
            cm.sendPlayerToNpc("�ȵȣ��Y����_�ˣ�");
        } else if (status === i++) {
            cm.sendPlayerToNpc("�������ѽ��^ȥ100�����ˡ�����׃����ʲ�N�������أ��ڳ�ȥ֮ǰ�șz��z��ɡ���");
        } else if (status === i++) {
            cm.wait(3000);
        } else if (status === i++) {
            cm.showWZEffect("Effect/Direction5.img/mersedesQuest/Scene2");
            cm.showWZEffectNew("Effect/OnUserEff.img/questEffect/mercedes/q24040");
            cm.wait(6000);
        } else if (status === i++) {
            cm.sendPlayerToNpc("�ҵĵȼ�����ֻ��10���ˣ�");
        } else {
            cm.lockUI(false);
            cm.disableOthers(false);
            cm.forceStartQuest(24093, "1");  //����24093�����Դ���24040��������
            cm.dispose();
        }
    } else {
        cm.dispose();
    }
}