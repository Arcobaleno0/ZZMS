/*
 Ѫ�Ȼʺ�
 */


/* global cm */

//�����_�P �_����true �P�]��false
var open = true;
//�����_����
var name = ["BloodyBoss", "BloodyJBoss"];
var status = 0;
//�ȼ�����
var minLevel = [125, 180];
var maxLevel = [255, 255];

//�Δ�����
var maxenter = 20;
//ӛ䛴Δ����Q
var PQName = ["Ѫ�Ȼʺ�", "��YѪ�Ȼʺ�"];
//�Δ�����
var maxenter = [1, 1];

var status = -1;

function start() {
    if (cm.getParty() === null) {
        cm.sendOk("Ҫ�M1�����ϵ����,�������.");
        cm.dispose();
        return;
    } else if (!cm.isLeader()) {
        cm.sendOk("ֻ����L�ſ�����Ո���.");
        cm.dispose();
        return;
    }
    cm.sendSimple("#e<Boss: Ѫ�Ȼʺ�>#n\r\n�ʂ�Ó���Ѫ�Ȼʺ��? ���h��꠆T�������^��,Ո��Ҽ���һ���..\r\n#b\r\n#L0# ��Ո<Boss:Ѫ�Ȼʺ�> �����.#l");
}

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (status === 0) {
        cm.sendSimple("#e<Boss: Ѫ�Ȼʺ�>#n\r\nՈ�x����Ҫ��ģʽ.\r\n\r\n#L0# ��ͨģʽ ( �ȼ� " + minLevel[0] + " ���� )#l\r\n#L1# ���yģʽ ( �ȼ� " + minLevel[1] + " ���� )#l\r\n");
    } else if (status === 1) {
        if (selection !== 0 && selection !== 1) {
            cm.sendOk("���Fδ֪�e�`��");
            cm.dispose();
            return;
        }
        if (!cm.isAllPartyMembersAllowedLevel(minLevel[selection], maxLevel[selection])) {
            cm.sendNext("�M꠳ɆT�ȼ� " + minLevel[selection] + " ���� " + maxLevel[selection] + " ���²ſ��������");
        } else if (!cm.isAllPartyMembersAllowedPQ(PQName[selection], maxenter[selection])) {
            cm.sendNext("���꠆T\"" + cm.getNotAllowedPQMember(PQName[selection], maxenter[selection]).getName() + "\"�Δ��ѽ��_�������ˡ�");
        } else {
            var em = cm.getEventManager(name[selection]);
            if (em === null || !open) {
                cm.sendOk("Ҫ�����" + PQName[selection] + "����߀δ�_�š�");
            } else {
                var prop = em.getProperty("state");
                if (prop === null || prop.equals("0")) {
                    em.startInstance(cm.getParty(), cm.getMap(), 255);
                    cm.gainMembersPQ(PQName[selection], 1);
                } else {
                    cm.sendSimple("�ѽ���������M����,Ո�Q�����l���Lԇ��");
                }
            }
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}