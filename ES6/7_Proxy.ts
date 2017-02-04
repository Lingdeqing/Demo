
	let user = new Proxy({}, {
		get:function (obj, prop) {
			switch(prop){
				case 'full_name':
				return `${obj.fname} ${obj.lname}`
				break;
				default:
				break;
			}
		},
		set:function (obj, prop, val) {
			switch(prop){
				case 'fname':
				obj.fname = 'f:'+val;
				break;
				case 'lname':
				obj.lname = 'l:'+val;
				break;
				default:
				break;
			}
		}
	});

	user.fname = 'Yao';
	user.lname = 'Lin';
	console.log(user.full_name);
