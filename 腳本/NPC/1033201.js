/* global cm */

var status = -1;

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendNextS("���������� ��߀�Æ᣿ �����أ��� ������ֻ��ʧȥ���R�T�ˡ�", 2);
    } else if (status === i++) {
        cm.sendNextPrev("���`�[�b�� ��߀������");
    } else if (status === i++) {
        cm.sendNextPrevS("��Ȼ�����B��ӡ���ɹ��ˣ�����Ǭ�����@�e�����ǡ��㿴����̫��Ү����߀�Æ᣿��Ҷ��ܵ���ȥ�ˣ�", 2);
    } else if (status === i++) {
        cm.sendNextPrev("#b��ħ�����ķ�ӡ�mȻ�ɹ�#k�ˣ�����������ʩչ��ħ�����l�ı�ը��׌���ɢ���ڸ��ء��҂�������ͬ�ĵط���ֱ��żȻ��");
    } else if (status === i++) {
        cm.sendNextPrevS("�����@�Ӱ�������w�ú��h��������ƽ���o������̫���ˡ�", 2);
    } else if (status === i++) {
        cm.sendNextPrevS("����鲻��Ҫ�o���ˆ᣿��ȫ��o����������ֻ�Ǜ]���⡭ ���X�ú���ร�", 2);
    } else if (status === i++) {
        cm.sendNextPrevS("�@�ӿ����@�e��������ѩ�ĵ؅^�᣿���@��ȼ����Ȼ����ѩ����ĺ���֡�", 2);
    } else if (status === i++) {
        cm.sendNextPrev("���]���X���᣿ ���`�[�b�� �@�� #r������{��#k�� �ǌ������أ�߀�������������µĺ�ħ�������{�䡣");
    } else if (status === i++) {
        cm.sendNextPrevS("�{���䣿", 2);
    } else if (status === i++) {
        cm.sendNextPrev("����Ě�Ϣ�������㡣�w����ʢ�r���ԵÕ����ӡ� ���ǬF�������Y�ľ���׃�ú�˥�����ǳ�Σ�U ����ħ���������p�׵Č��҂����־��ܡ�");
    } else if (status === i++) {
        cm.sendNextPrevS("�����˶��ܺá���Ҷ��܏��ѡ������Һܓ��������ء� �@�������w���ஔ����", 2);
    } else if (status === i++) {
        cm.sendNextPrev("���������ҁ�������Ó��ġ� ��߀�о��`�[�b�������Ҫ�����ġ����� #b���`֮��#k�������µ��{�䡭 #r�͵�춌����`ȫ�w���{��#k���ǆ᣿");
    } else if (status === i++) {
        cm.sendNextPrevS("...!", 2);
    } else if (status === i++) {
        cm.sendNextPrev("���cǰ��#b�ѻ�̎#k�ɣ�����#b��ħ�������{����Č����`ȫ�w���Ӱ�#k�����������㣬��ԓȥ������");
    } else if (status === i++) {
        cm.sendNextPrevS("��֪���ˣ� ���������� ��߀����Ҋ����᣿", 2);
    } else if (status === i++) {
        if (mode !== 1) {
            cm.dispose();
            return;
        }
        cm.sendNextPrev("����Ҳϣ����ˡ�");
    } else if (status === i++) {
        cm.sendYesNoS("#b(�mȻ�ܓ���ͬ�邃�� Ȼ���F��ֻ������������ �ûؚw����ǰ�����f��)", 2);
    } else if (status === i++) {
        cm.dispose();
        cm.warp(910150001, 0);
    } else {
        cm.dispose();
    }
}