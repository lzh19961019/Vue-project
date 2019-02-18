<template>
	<div class="my_l">
		<header class="top_bar">
		    <a onclick="window.history.go(-1)" class="icon_back"></a>
		    <h3 class="cartname">京东登录</h3>
		</header>
		<main class="user_login_box">
		    <div class="login_dialog">
		        <div class="_username">
		            <input type="text" name="username" placeholder="请输入用户名" class="user_input" v-model="username"/>
		        </div>
		        <div class="_username u_passwd">
		            <input type="password" name="password" placeholder="请输入密码" class="user_input" v-model="password"/>
		        </div>

		        <div class="login_box">
		            <a @click="goLogin()" class="btn_login">登录</a>
		        </div>
		        <div class="go_reg_box">
		            <router-link tag="span" to="/register">快速注册</router-link>
		        </div>
		    </div>
		</main>
	</div>
</template>

<script>
export default {
	data(){
		return {
			username:'',
			password:''
		}
	},
	methods: {
		goLogin(){
			let _this = this;

			if(_this.username == ''){
				alert("请输入用户名")
			}else if(_this.password == ''){
				alert("请输入密码")
			}else {
				_this.$http.post('/login',{
					loginName:_this.username,
					loginPawd:_this.password,
				}).then(
					(res)=>{
						if(res.status == 200){
						_this.userInfo = res.data;
						if(_this.userInfo.status == 1){
							//LOGIN success
							window.sessionStorage.userInfo = JSON.stringify(_this.userInfo);
							console.log(_this.$store);
                        let redirect = decodeURIComponent(_this.$route.query.redirect || '/');
                        _this.$router.push({
                            path: redirect
                        });
							
						}else if(_this.userInfo.status == -1){
							alert("该用户不存在")
						}else if(_this.userInfo.status == -2){
							alert("密码错误")
						}
					}	
					}
				)
			}
		}
	}

}
</script>


<style>
@import '../assets/css/login.css';
</style>