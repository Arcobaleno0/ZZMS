//�����_�P �_����true �P�]��false
var open = true;
//�����_����
var name = ["FairyBossBattle"];
//�ȼ�����
var minLevel = 100;
var maxLevel = 255;
//�Δ�����
var maxenter = 10;
//ӛ䛴Δ����Q
var PQName = "�����΁�";

var status = -1;

var out = false;

function start() {
    if (cm.getPlayer().getMapId() == 300030310) {
        cm.sendYesNo("��F�ھ����ȥ�᣿");
        out = true;
        return;
    }
    if (cm.getParty() === null) {
        cm.sendOk("Ҫ�M1�˻����ϵ����,���������");
        cm.dispose();
        return;
    } else if (!cm.isLeader()) {
        cm.sendOk("ֻ����L�ſ�����Ո�����");
        cm.dispose();
        return;
    }
    cm.sendSimple("#e<Boss: �����΁�>#n\r\nǰ���ǰ����΁��Ĳ���أ��ʂ��ӭ��BOSS�ˆ᣿\r\n#b\r\n#L0# ��Ո<Boss: �����΁�> �����.#l");
}

function action(mode, type, selection) {
    if (out) {
        if (mode === 1) {
            cm.warp(300030300, 0);
        }
        cm.dispose();
        return;
    }
    if (mode === 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (status === 0) {
        cm.sendSimple("#e<Boss: �����΁�>#n\r\nՈ�x����Ҫ��ģʽ.\r\n\r\n#L0# ��ͨģʽ ( �ȼ� " + minLevel + " ���� )#l\r\n");
    } else if (status === 1) {
        if (selection !== 0) {
            cm.sendOk("���Fδ֪�e�`��");
            cm.dispose();
            return;
        }
        if (!cm.isAllPartyMembersAllowedLevel(minLevel, maxLevel)) {
            cm.sendNext("�M꠳ɆT�ȼ� " + minLevel + " ���� " + maxLevel + " ���²ſ��������");
        } else if (!cm.isAllPartyMembersAllowedPQ(PQName, maxenter)) {
            cm.sendNext("���꠆T\"" + cm.getNotAllowedPQMember(PQName, maxenter).getName() + "\"�Δ��ѽ��_�������ˡ�");
        } else {
            var em = cm.getEventManager(name[selection]);
            if (em === null || !open) {
                cm.sendOk("������δ�_�š�");
            } else {
                var prop = em.getProperty("state");
                if (prop === null || prop.equals("0")) {
                    em.startInstance(cm.getParty(), cm.getMap(), 255);
                    cm.gainMembersPQ(PQName, 1);
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