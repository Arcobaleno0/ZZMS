/* global ms */

var status = -1;

function action(mode, type, selection) {
    status++;

    if (ms.isQuestFinished(24005)) {
        ms.dispose();
        return;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.lockUI(false);
        ms.lockKey(false);
        ms.disableOthers(false);
        ms.teachSkill(20021181, -1, 0);  //�رվ�����ʱ����
        ms.teachSkill(20021166, -1, 0);  //�رվ�����ʱ����
        ms.teachSkill(20020109, 1, 1);   //��������Ļظ���������������ħ̫�����ˡ��ǺǺ�
        ms.teachSkill(20021110, 1, 3);   //���������ף��������10%���飬�ǺǺ�
        ms.teachSkill(20020112, 1, 1);   //���������ʸ�����ֱ��30�����ǺǺ�
        ms.teachSkill();
        ms.forceStartQuest(24008, "1");    //�ƺ��Ǹ���������Դ���24005��������
        ms.dispose();
    } else {
        ms.dispose();
    }
}