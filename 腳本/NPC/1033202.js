/* global cm */

var status = -1;

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    if (cm.isQuestFinished(24002)) {
        cm.sendOk("��������˾��ȫ�����K�����������N�fҲ ���Mȥ����");
        cm.dispose();
        return;
    }

    if (cm.isQuestActive(24007) || cm.isQuestFinished(24007)) {
        cm.sendNext("Ո�Ⱦ��҂�");
        cm.dispose();
        return;
    }
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendNextS("�L�ϣ���Ҷ��]�£����ǡ� �����҂��Ĵ��f����", 2);
    } else if (status === i++) {
        cm.sendNextPrev("���������ɭ�Ě�Ϣ�\�������fȫ�w�����`�[�b����������Ҳ���ҵĸ��ܵ��@�ɚ�Ϣ��");
    } else if (status === i++) {
        cm.sendNextPrevS("���`�[�b���ϵĚ�Ϣ��ң�ԓ������ �Ǻ�ħ��������������", 4, 1033203);
    } else if (status === i++) {
        cm.sendNextPrevS("��С���ѽ������ڱ�ѩ֮�С����^�m��ȥ�B����Ҳ������׃��Խ��Խ�������@�ɚ�ϢӰ�ֻ���t��Ć��}�T�ˡ�����҂�߀�ړΣ����ǿ�Ҫ��", 4, 1033204);
    } else if (status === i++) {
        cm.sendNextPrevS("ȫ���������ҵ��e�� �mȻ�ɹ��ķ�ӡ�˺�ħ������Ȼ��������� #r�{��#k�� �B�҂��Ĵ��f��", 2);
    } else if (status === i++) {
        cm.sendNextPrevS("�{��᣿", 4, 1033203);
    } else if (status === i++) {
        cm.sendNextPrevS("׌���f�Y�����@��������", 4, 1033204);
    } else if (status === i++) {
        cm.sendNextPrev("����ħ�������������{�䣬���Ӱ������еľ��`��");
    } else if (status === i++) {
        cm.sendNextPrevS("�����𡭶����ҵ��e��Ҫ�����ұ���ħ�������С�", 2);
    } else if (status === i++) {
        cm.sendNextPrev("ԇ�D׌��֮�Ȝ����ĺ�ħ������ ��Ȼ�ǂ����µĂ��mȻ�ѽ���ӡ�ɹ���Ȼ���@�N�̶ȡ� ��ӡ��׃���@�˵��¼���");
    } else if (status === i++) {
        cm.sendNextPrevS("�B���`�[�b�@�N�����˶��o���֓����{�䣬���N�l��������ˡ�", 4, 1033204);
    } else if (status === i++) {
        cm.sendNextPrevS("�]�e���@���Ǿ��`�[�b���^�e����ӡҲ�ɹ��ˣ��@��Ҫ���ǂ��ɐ��ĺ�ħ������", 4, 1033203);
    } else if (status === i++) {
        cm.sendNextPrevS("���ǡ��������N�Ӷ�Ҫ���k�����^�����S��һ�_ʼ�Ͳ�ԓ�ͺ�ħ�������Q�����Ѿ��`��Ū���@�����ԡ� �mȻ���Ǉ����������қ]���@�N�Y��", 2);
    } else if (status === i++) {
        cm.sendNextPrevS("��Ҫ�f�@�N�ʚ�Ԓ�����`�[�b�������ܶ���^�ͺ�ħ�����Č��Q���Ͳ����������҂��ć������`�[�b�͵��U���đ�����ȥ�ˡ�", 4, 1033204);
    } else if (status === i++) {
        cm.sendNextPrev("�@Щ�����҂����e��׌���χ����Ų��ã���o�p�p������ �������Џ��������������͵���ħ������߅���@�����҂����e��");
    } else if (status === i++) {
        cm.sendNextPrevS("���Y�L��̫���˟o���ͺ�ħ�����Q�Y���ҡ�����ĺ܌������`�[�b��", 4, 1033203);
    } else if (status === i++) {
        cm.sendNextPrevS("�����@�Ų����L�ς����e�����fҪȥ�Һ�ħ�����������ҡ��Ҳ����ǰȥ�Q�Y��ֻ������Լ���ֹ���ˡ�", 2);
    } else if (status === i++) {
        cm.sendNextPrev("���N��ԓ���҂����Ҫ��ڡ�");
    } else if (status === i++) {
        cm.sendNextPrevS("Ո��Ҫ����һ���˿���؟�Ρ��ͺ�ħ�������Q���҂����`ȫ�w�ěQ�����ܵ��@���{��Ҳ���҂����`ȫ�w��횓dؓ�İ�����", 4, 1033204);
    } else if (status === i++) {
        cm.sendNextPrevS("�Y������Ҳȫ�����ľ��`�[�b���]�������κ�Թ�ԣ�", 4, 1033203);
    } else if (status === i++) {
        cm.sendNextPrevS("��ҡ�", 2);
    } else if (status === i++) {
        cm.sendNextPrev("�������µĲ����{�䡣����µ����҂����`�˴�֮�g������Թ���������������˱˴����۵��ġ����ܺ�ħ�������˶��Nа�����{�䣬ֻҪ�҂��������͕����k���ҵ���Q�ķ�����");
    } else if (status === i++) {
        cm.sendNextPrev("����ƽ���o�£���˾��`��߀��һ��ϣ����");
    } else if (status === i++) {
        cm.sendNextPrevS("����С��k���᣿", 2);
    } else if (status === i++) {
        cm.sendNextPrev("��Ȼ�]�k��������ֹ�{�䡣�����҂��Ǿ��`�����Ի�ܾúܾá��r�g����վ���҂��@һ߅ ��");
    } else if (status === i++) {
        cm.sendNextPrev("�ں�ħ�������{��׌�҂�ȫ����˯ǰ�����ѻ�̎��ӡ�ɣ����`�[�b��������ܱ��_�{�䣬���{����ʧǰ�����f��ȫ��ӡ #b�����о��`һ���˯�ɣ�#k");
    } else if (status === i++) {
        cm.sendNextPrevS("���{����_֮ǰ߀��Ҫ���ٕr�g���B��Ҳ��֪�������Ǜ]�б�Ҫ���r�g���o�ĵȴ��ɣ����`�[�b��", 4, 1033204);
    } else if (status === i++) {
        cm.sendNextPrevS("һ���˯�ٮd�ѣ����S�B��ħ�������{��Ҳ�ܽ��_��", 4, 1033203);
    } else if (status === i++) {
        cm.sendNextPrev("��ħ�������{��һ�����ܑ��ٕr�g�������� ���N�����Ą����߾����҂��ˡ�");
    } else if (status === i++) {
        cm.sendNextPrevS("���� һ�����A��", 2);
    } else if (status === i++) {
        cm.sendNextPrev("��Ȼ�ˡ�������Ҳ��u�o������{��Ě�Ϣ�ˡ����N���c��ӡ���f�ɣ����ǣ����`�[�b�����L�r�g��˯�ȴ��{���������g����Ҫ׌����а����˳��F��");
    } else if (status === i++) {
        cm.sendNextPrevS("��ӡ֮ǰ߀��Ҫ����헜ʂ䡣 ����� #b��˹����#k��Ԓ��", 1);
    } else if (status === i++) {
        cm.forceStartQuest(24007, "1");
        cm.dispose();
    } else {
        cm.dispose();
    }
}