/*

#剪影恢复会员
[rewrite_local]

^https\:\/\/buy.itunes.apple.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/ThorJsbox/QuanX/master/Rewrite_local/jianying.js

[mitm]
hostname = buy.itunes.apple.com,

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/verifyReceipt';

if (url.indexOf(vip) != -1) {
    obj.date.web_order_line_item_id : "888888800000000";
    obj.date.original_transaction_id : "88888800000000";
  
  
    body = JSON.stringify(obj);
}
$done({body});