/* global qm */
var status = -1;

function start(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.getNPCTalk(["你說你的名字叫做 ‘人類’嗎? 呵呵, 真是個有趣的名字. 嗯? 你說不是名字? 那你的名字是什麼?"], [4, 3002005, 0, 0, 0, 0, 0, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(["我的名字是…我的名字是...... (給沒有名字到處漂流的我取的第一個名字為佛列德. 現在這個時候佛列德……)"], [4, 3002005, 0, 0, 2, 0, 1, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(["呵喔, 只是說了一個名字而已為什麼要這麼悶悶不樂? 難道是有什麼事情嗎? 沒錯, 看你的表情應該就是有. 這樣的話我幫你取一個很不錯的名字吧! 看看, 你的毛色是黑色的話，黑人怎麼樣? 不然體型大的話，糕大也不錯."], [4, 3002005, 0, 0, 0, 0, 1, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(["不是, 我也有名字……"], [4, 3002005, 0, 0, 2, 0, 1, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(["耶咿, 那是什麼啊! 跟人類一點都不配. 人類是我撿來的，名字應該也要我來取. 嗯… 嗯… 人類是從只有一個月亮的地方來的對吧? 所以… 藏有一個月亮的地方. 隱… 月… 嗯, 隱月! 隱月很棒. 是藏起來的月亮的意思. 怎麼樣?"], [4, 3002005, 0, 0, 4, 0, 1, 1, 0, 3002000]);
    } else if (status === i++) {
        qm.getNPCTalk(["噎咿, 那個不會很俗嗎. 比起那個黑人或糕大還比較……"], [4, 3002005, 0, 0, 0, 0, 1, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(["就決定叫隱月了."], [4, 3002005, 0, 0, 2, 0, 1, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(["嗯? 你是真心的嗎? 呵, 喜好真是特別. 反正, 只要你喜歡的話那也只能就這樣了…… 好, 那麼從現在起你的名字就叫做隱月了. 剛開始會有點尷尬但久了就會習慣的."], [4, 3002005, 0, 0, 0, 0, 1, 1, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(["那麼隱月, 你要不要去看看你之後要住的地方然後再來啊? 可能是因為主人長期不在所以累積了很多灰塵. 如果有不方便的方不要感到負擔盡管開口."], [4, 3002005, 0, 15, 0, 0]);
    } else if (status === i++) {
        qm.getNPCTalk(["沿著這條路左邊一直走的話會有一個放有醬缸台子的房屋. 那裏就是你要生活的地方，請好好看看. 因為房子主人不在家所以也沒有什麼家庭用品. 如果需要的話我會找來給你."], [4, 3002005, 0, 0, 0, 0, 0, 1, 0]);
    } else if (status === i++) {
        qm.forceStartQuest();
        qm.gainItem(3010766, 1);
        qm.dispose();
        qm.warp(410000001, 1);
    } else {
        qm.dispose();
    }
}
