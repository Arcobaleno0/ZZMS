/*
 *	��˹�� - ��˹����ő�
 */

var status = -1;
var minLevel = 40;
var maxCount = 5;
var minPartySize = 1;
var maxPartySize = 4;

function start() {
    cm.sendSimple("#e<��˹����ő�>#n\r\nҪ��ʎ��Ȼ�ڰ�˹���؅^�ǻ���ϣ���Ě��h��?#b\r\n\r\n\r\n#L1# ��ʎϣ���Ě��h.#l\r\n#L0# ֱ�ӌ���ϣ��. (�ȼ� 120����)#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (selection == 0) {
            if (cm.getLevel() >= 120) {
                cm.sendNext("���㵽ϣ��֮����Ոһ��Ҫ����ϣ����");
            } else {
                cm.sendOk("����F�ڵČ���������ϣ����Щ�㏊������_��120�����ϲ����M������");
                cm.dispose();
            }
        } else if (selection == 1) {
            cm.sendOk("�����δ�_�ţ���Ո�ڴ���");
            cm.dispose();
        } else {
            cm.dispose();
        }
    } else if (status == 1) {
        cm.warp(262030000, 0); //ϣ��֮�� - ϣ��֮�����
        cm.dispose();
    } else {
        cm.dispose();
    }
}