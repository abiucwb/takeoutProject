module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/meituan',    //数据库地址
    notifyUrl: 'http://192.168.3.133:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'meituan-cwb',   //七牛云bucket
    AccessKey: 'dHFTBg8d3QnoTe45g5xvLdSQSS8uUX7kUhIryK-P',   //七牛云accessKey
    SecretKey: '-2ELARTrN98TtAxHsbWg9izbRZXGW5N4SUXDQOT1',    //七牛云secretKey
    tencentkey: 'Y4SBZ-BRGLX-2754B-ZHXUI-LYBJK-6GBHX',        //腾讯位置secretKey
    tencentkey2: 'Y4SBZ-BRGLX-2754B-ZHXUI-LYBJK-6GBHX',        //腾讯位置服务secretKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥
};


