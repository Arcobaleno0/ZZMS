//�����_�P �_����true �P�]��false
var open = true;
//�����_����
var name = ["ChowBossBattle"];
//�ȼ�����
var minLevel = [70];
var maxLevel = [255];
//�Δ�����
var maxenter = 100;
//ӛ䛴Δ����Q
var PQName = "ChowBoss";

var status = -1;

function start() {
    cm.sendOk("Ո�ȴ�����T�ޏ͡�");
    cm.dispose();
    return;
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        cm.sendSimple("#e<Boss: ϣ��>#n\r\nՈ�x����Ҫ��ģʽ.\r\n\r\n#L0# ��ͨģʽ ( �ȼ� " + minLevel[0] + " ���� )#l\r\n#L1# ���yģʽ ( �ȼ� " + minLevel[1] + " ���� )#l\r\n");
    } else if (status == 1) {
        if (selection != 0 && selection != 1) {
            cm.sendOk("���Fδ֪�e�`��");
            cm.dispose();
            return;
        }
        if (!cm.isAllPartyMembersAllowedLevel(minLevel[selection], maxLevel[selection])) {
            cm.sendNext("�M꠳ɆT�ȼ� " + minLevel[selection] + " ���� " + maxLevel[selection] + " ���²ſ��������");
        } else if (!cm.isAllPartyMembersAllowedPQ(PQName, maxenter)) {
            cm.sendNext("���꠆T\"" + cm.getNotAllowedPQMember(PQName, maxenter).getName() + "\"�Δ��ѽ��_�������ˡ�");
        } else {
            var em = cm.getEventManager(name[selection]);
            if (em == null || !open) {
                cm.sendOk("Ҫ�����ϣ������߀δ�_�š�");
            } else {
                var prop = em.getProperty("state");
                if (prop == null || prop.equals("0")) {
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