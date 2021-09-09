<template>
  <div class="avatar">
    <div class="avatar-item">
      <i class="el-icon-user-solid"></i>
    </div>
    <div class="login">
      <div class="user">
        <el-input v-model="input2" placeholder="请输入账号"></el-input>
      </div>
      <div class="passworld">
        <el-input
          placeholder="请输入密码"
          v-model="input"
          show-password
        ></el-input>
      </div>
      <div class="Signinbutton">
        <el-button
          type="success"
          icon="el-icon-check"
          circle
          @click="open"
        ></el-button>
      </div>
    </div>
    <toast :message="avamessage" :show="avashow"></toast>
  </div>
</template>

<script>
import Toast from '../../../components/content/Toast.vue';
export default {
  components: { Toast },
  name: "avatar",
  data() {
    return {
      input: "",
      input2: "",
      avamessage:"",
      avashow:false
    };
  },
  methods: {
    //注册成功并且显示账号密码然后返回主页
    open() {
      // return this.input.length != 0  && this.input2.length != 0?alert("登录成功"):alert("登录失败")
      return new Promise((resolve, reject) => {
        this.input.length != 0 && this.input2.length != 0
          ? resolve()
          : reject();
      })
        .then(() => {
          this.avamessage= "登录成功",
          this.avashow = true
          setTimeout(() => {
            this.$router.push("/home");
          }, 2000);
        })
        .catch(() => {   
          this.avashow = true
          this.avamessage = "登录失败，请核对账号与密码"     
          setTimeout(()=>{
            this.avashow = false
          },1000)
          
        });
    },
  },
};
</script>

<style scoped>
.avatar {
  margin: 45px 0;
  /* background: wheat; */
  height: 100px;
  width: 100%;
  display: flex;
  /* border-bottom: 1px solid black ; */
  justify-content: center;
  position: relative;
  align-items: center;
}

.avatar-item {
  width: 80px;
  /* background: #000; */
  height: 80px;
  font-size: 70px;
  line-height: 80px;
  border: 1px solid black;
  border-radius: 40px;
  text-align: center;
}
.login {
  position: absolute;
  top: 110px;
}
.user {
  margin: 30px 0;
}
.Signinbutton {
  margin-top: 35px;
  text-align: center;
}
</style>

