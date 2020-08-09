import bridge from '@vkontakte/vk-bridge';
vkinit = function(){
	bridge.send('VKWebAppInit', {});
	bridge.sendPromise("VKWebAppCallAPIMethod", {
	"method": "users.get",
    "request_id": "324nnefj",
    "params": {
    	"user_ids": "1,2,3",
    	"access_token":"87e0446e818ebe7948e21fbfa0efdcadbb911f16637ebf64a522cd260bdee533fb6c7f1d4c463bc8a47b8"
    }
}).then(data => console.log(data.result))
	.catch(error => console.log(error));
}
