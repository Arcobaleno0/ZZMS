var status, ObjName, ObjIDArray;

function start() {
    status = 0;
    cm.sendSimple("Hello���ڗ�֮�������������?\r\n\r\n#b#L0# �Y����Ԓ��#l\r\n#b#L1#�Qȡ�b�䡣#l");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }

    if (status == 0) {

        switch (selection) {
            case 0:
                cm.dispose();
                return;
            case 1:
		cm.sendGetText("����@��ʲ�N��Ʒ��ݔ����Ʒ���Q����ID��");
		status = 1;
        }
    } else if (status == 1) {
	ObjName = cm.getText();
	var ObjID = cm.findMapleObjectByName(ObjName);
	ObjIDArray = cm.MapleObjectIDMapToIntArray(ObjID);
	cm.sendSimple(cm.MapleObjectIDMapToString(ObjID));
	status = 2;
    } else if (status == 2) {
	cm.getPlayer().gainItem(ObjIDArray[selection], 1);
	cm.dispose();
	return;
    }

}