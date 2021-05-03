function eatWhat() {
    let theList=['中餐','韩餐','炸鸡','汉堡王']
    let theINdex= ~~(Math.random()*4)
    console.log( theList[theINdex] );
}
eatWhat()