/* Dawnveil
 PvP(enis)
 Maximus
 Made by Daenerys
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendOk("��y�Y�������ʽ��׃���ˡ�͸�^��Ԫ֮�T�Ă��c�Ϳ��Ƅӵ����Y�V�����������ȥ�����µĴ�y�Y  #b���Y#k");
    } else if (status == 1) {
        cm.dispose();
    }
}	