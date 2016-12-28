var app = new Vue({
	el : '#app',
	data: {
		data: {
			"case_entity" : {
				"doctor_entity" :{

				}
			}
		},
		data2: '12',
		bg: '',
		pics: [{
			id : '1'
		},{
			id: '2'
		}],
		message: '海森堡',
		another: 'Mr white',
		isActive: true,
		styleObject: {
			color: 'red'
		},
		ok: true
	},
	computed: {
		//	计算属性可以使用this.data
		handlePic: function(){
			var a = 'background:url(' + (this.data).case_entity.doctor_entity.head_img_path + ');background-size:cover;';
			return 'background:url(' + (this.data).case_entity.doctor_entity.head_img_path + ');background-size:cover;';
		},
		handlePics: function(){
			return this.data.case_entity.case_pic_list;
		},
		style: function(){
			return this.isActive ? this.styleObject : '';
		},
		items: function(){
			return this.data2.case_list;
		}
	},
	mounted: function(){
		this.getData();
	},
	methods: {
		toggle: function(){
			this.isActive = !this.isActive;
			this.ok = !this.ok;
		},
		getData: function(){
			this.$http.get('../api/DoctorCaseDetail.json')
				.then(function(response){
					this.$set(this.data = response.data);	
				});
			this.$http.get('../api/case_discuss.json')
				.then(function(response){
					this.$set(this.data2 = response.data);
					console.log(this.data2);
				});
		}
	}
})

/*var app2 = new Vue({
	el: '#app2',
	data: {
		isActive: true,
		styleObject: {
			color: 'red'
		}
	},
	computed: {
		style: function(){
			return this.isActive ? this.styleObject : '';
		}
	},
	methods: {
		toggle: function(){
			this.isActive = !this.isActive;
		}
	}
})*/