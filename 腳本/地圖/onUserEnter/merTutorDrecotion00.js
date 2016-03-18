/* global ms */

var status = -1;

function action(mode, type, selection) {
    if (mode === 0 && status !== 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.teachSkill(20021166, 1, 0);   // Skill strikeDual
        ms.teachSkill(20021181, 1, 0);   // Skill spiritJump 20021181�Լ�20021166�Ǹ������µ���ʱ����
        ms.teachSkill(20020111, 1, 1);   //�����ƶ��������������ǺǺ�
        ms.lockUI(true);
        ms.playMovie("Mercedes.avi");
    } else if (status === i++) {
        ms.disableOthers(true);
        ms.getDirectionEffect(3, "", [4]);   //��LockUI��r��ʹ����ſ��
        ms.wait(2000);
    } else if (status === i++) {
        ms.getDirectionEffect(2, "Effect/Direction5.img/effect/mercedesInIce/merBalloon/0", [2000, 0, -100, 1, 0, 0]);
        ms.wait(3000);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [2]);
    } else if (status === i++) {
        ms.getDirectionEffect(2, "Effect/Direction5.img/effect/mercedesInIce/merBalloon/1", [2000, 0, -100, 1, 0, 0]);
        ms.wait(2000);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [2]);
        ms.getDirectionStatus(true);
    } else if (status === i++) {
        ms.getDirectionEffect(2, "Effect/Direction5.img/effect/mercedesInIce/merBalloon/2", [2000, 0, -100, 1, 0, 0]);
        ms.wait(2000);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [2]);
        ms.getDirectionStatus(true);
    } else if (status === i++) {
        ms.getDirectionEffect(2, "Effect/Direction5.img/effect/mercedesInIce/merBalloon/3", [2000, 0, -100, 1, 0, 0]);
        ms.wait(2000);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [2]);
        ms.getDirectionStatus(true);
    } else if (status === i++) {
        ms.getDirectionEffect(2, "Effect/Direction5.img/effect/mercedesInIce/merBalloon/4", [2000, 0, -100, 1, 0, 0]);
        ms.wait(2000);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [2]);
        ms.getDirectionStatus(true);
    } else if (status === i++) {
        ms.getDirectionEffect(2, "Effect/Direction5.img/effect/mercedesInIce/merBalloon/5", [2000, 0, -100, 1, 0, 0]);
        ms.wait(2000);
    } else if (status === i++) {
        ms.lockUI(false);
        ms.disableOthers(false);
        ms.dispose();
    } else {
        ms.dispose();
    }
}