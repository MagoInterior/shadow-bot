const _0x329da1=_0x39a7;function _0x39a7(_0x16fa4b,_0x194625){const _0x1ec4a5=_0x1ec4();return _0x39a7=function(_0x39a706,_0x357eed){_0x39a706=_0x39a706-0x74;let _0x5af9df=_0x1ec4a5[_0x39a706];return _0x5af9df;},_0x39a7(_0x16fa4b,_0x194625);}(function(_0x27428b,_0x2ff1c0){const _0x213ffa=_0x39a7,_0x523dce=_0x27428b();while(!![]){try{const _0x5414a8=-parseInt(_0x213ffa(0x88))/0x1+-parseInt(_0x213ffa(0x77))/0x2+parseInt(_0x213ffa(0x89))/0x3*(-parseInt(_0x213ffa(0x7e))/0x4)+parseInt(_0x213ffa(0x81))/0x5+parseInt(_0x213ffa(0x7b))/0x6+-parseInt(_0x213ffa(0x87))/0x7*(parseInt(_0x213ffa(0x82))/0x8)+-parseInt(_0x213ffa(0x75))/0x9*(-parseInt(_0x213ffa(0x80))/0xa);if(_0x5414a8===_0x2ff1c0)break;else _0x523dce['push'](_0x523dce['shift']());}catch(_0x165eb9){_0x523dce['push'](_0x523dce['shift']());}}}(_0x1ec4,0x4be1a));const fs=require('fs'),toMs=require('ms'),addBanned=(_0x517aa8,_0x4eb990,_0x18b761)=>{const _0x50e474=_0x39a7;let _0x34fd2f=![];_0x4eb990===undefined?_0x4eb990='PERMANENT':_0x4eb990=_0x4eb990;let _0x2f1b91=_0x50e474(0x86);_0x4eb990===_0x50e474(0x86)?_0x2f1b91=_0x50e474(0x86):_0x2f1b91=Date[_0x50e474(0x83)]()+toMs(_0x4eb990);const _0x360027={'id':_0x517aa8,'expired':_0x2f1b91};_0x18b761[_0x50e474(0x85)](_0x360027),fs[_0x50e474(0x76)](_0x50e474(0x7c),JSON[_0x50e474(0x74)](_0x18b761));},unBanned=(_0x5a3964,_0x3177d4)=>{const _0x29e59d=_0x39a7;let _0x49d72b=null;return Object[_0x29e59d(0x84)](_0x3177d4)['forEach'](_0x55beb7=>{_0x3177d4[_0x55beb7]['id']===_0x5a3964&&(_0x49d72b=_0x55beb7);}),_0x49d72b!==null&&(_0x3177d4['splice'](_0x49d72b,0x1),fs[_0x29e59d(0x76)](_0x29e59d(0x7c),JSON[_0x29e59d(0x74)](_0x3177d4))),!![];},BannedExpired=_0x210575=>{setInterval(()=>{const _0x5a0b21=_0x39a7;let _0x2eaa00=null;Object[_0x5a0b21(0x84)](_0x210575)[_0x5a0b21(0x8a)](_0x574822=>{const _0x5005ea=_0x5a0b21;if(_0x210575[_0x574822]['expired']===_0x5005ea(0x86))_0x2eaa00=null;else Date[_0x5005ea(0x83)]()>=_0x210575[_0x574822][_0x5005ea(0x79)]&&(_0x2eaa00=_0x574822);}),_0x2eaa00!==null&&(console[_0x5a0b21(0x7a)](_0x5a0b21(0x7f)+_0x210575[_0x2eaa00]['id']),_0x210575[_0x5a0b21(0x78)](_0x2eaa00,0x1),fs[_0x5a0b21(0x76)](_0x5a0b21(0x7c),JSON['stringify'](_0x210575)));},0x3e8);},cekBannedUser=(_0x3dd5de,_0x145cea)=>{const _0x4a3d91=_0x39a7;let _0x32cc1e=![];return Object[_0x4a3d91(0x84)](_0x145cea)[_0x4a3d91(0x8a)](_0x2f5ace=>{_0x145cea[_0x2f5ace]['id']===_0x3dd5de&&(_0x32cc1e=!![]);}),_0x32cc1e;};function _0x1ec4(){const _0x5790e1=['keys','push','PERMANENT','14Smrosm','31627BzbTYz','974775ULcQiB','forEach','stringify','5819211gPGhEx','writeFileSync','574318LuppRW','splice','expired','log','2707356juLKhx','./database/usuarios/banned.json','exports','4shNzcC','Banned\x20expired:\x20','10HWJdaO','1330610tOKAgz','1637624EpmILR','now'];_0x1ec4=function(){return _0x5790e1;};return _0x1ec4();}module[_0x329da1(0x7d)]={'addBanned':addBanned,'unBanned':unBanned,'BannedExpired':BannedExpired,'cekBannedUser':cekBannedUser};