var status = -1;
var complete = false;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendNext("���ˌ�����u׃���ĺڰ�����,��֮�ȵ�������ʿ���һ��׃��.");
    } else if (status == 1) {
        qm.sendNextPrev("��ʿ��...�o��ע�����ҵ������ė����K");
    } else if (status == 2) {
        qm.sendNextPrev("�@�����K�ǹŴ������g���u����,�mȻ����ʹ�ôΔ���Ҫ�ė��ŕ���u����,���@�����K�ǲ����d���ǰ֧���֮�ȵĸ��N���K��.");
    } else if (status == 3) {
        qm.sendNextPrev("�F��Ҫ����ע���ҵ�����,Ո����..");
    } else if (status == 4) {
        if (!complete) {
            qm.gainItemPeriod(3994895, 1, 12, true, "");
            qm.forceCompleteQuest();
            complete = true;
        }
        qm.sendNextPrevS("�����˲�g�Ƅ�����˟o��ע��̫������,��Ո��Ҫ����.", 1);
    } else if (status == 5) {
        qm.sendNextPrevS("���H�ԁ���f����,�ҕ��u�����и��������ķ��K�o��.", 1);
    } else if (status == 6) {
        qm.dispose();
    }
}