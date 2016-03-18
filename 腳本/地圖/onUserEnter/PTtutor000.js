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
        ms.getDirectionStatus(true);
        ms.lockUI(true);
        ms.disableOthers(true);
        ms.equip(1352104, -10);
        ms.teachSkill(20031211, 1, 0);
        ms.teachSkill(20031212, 1, 0);
        ms.playMovie("phantom_memory.avi");
    } else if (status === i++) {
        ms.showEffect(false, "phantom/mapname1");
        ms.getDirectionEffect(3, "", [1]);
        ms.wait(1000);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [0]);
        ms.wait(1000);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [2]);
        ms.wait(1000);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [0]);
        ms.wait(1000);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [1]);
        ms.wait(1000);
        ms.showWZEffectNew("Effect/OnUserEff.img/questEffect/phantom/tutorial");
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [0]);
        ms.wait(1000);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [2]);
        ms.wait(1000);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [0]);
        ms.wait(1000);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [1]);
        ms.wait(500);
    } else if (status === i++) {
        ms.getDirectionEffect(3, "", [0]);
        ms.wait(1000);
    } else if (status === i++) {
        ms.sendNextS("�K춵��˛Q��ĕr�g�ˆᡣ", 17, 0, 0);
    } else if (status === i++) {
        ms.sendNextPrevS("�]�뵽߀����˾o�����أ������̫�Û]�M�л�ӵ��P�S�᣿�mȻҲ���Ǜ]�����š�", 17, 0, 0);
    } else if (status === i++) {
        ms.sendNextPrevS("��ԓ�ѽ��ʂ���˰ɣ��������^�m�������������eʧ�r�C��Ԓ��һ�������ߵصģ��mȻ���c�s�����^���c�ЄӰɣ�", 17, 0, 0);
    } else if (status === i++) {
        ms.lockUI(false);
        ms.disableOthers(false);
        ms.dispose();
    } else {
        ms.dispose();
    }
}