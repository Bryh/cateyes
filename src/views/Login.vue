<template>
    <div class="login">
        <div class="login-title">
            手机验证码登录
        </div>
        <form @submit.prevent = "login">
            <section class="login-content">
            
                <div class="phone-number">
                    <input type="text"  v-model= "phone" name="phone-number" id="" placeholder="请输入手机号"> 
                    <button type="button" class="set-code" @click= "sendCode"> 发送验证码</button>
                </div>
                <div class="code">
                    <input type="text" v-model= "code" placeholder="请输入验证码">
                </div>
            </section>
            <div class="btn-wrapper">
                <button class=" login-btn" type="submit">
                    登录
                </button>
            </div>
            
            
     
        </form>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            phone: "17694956282",
            code: ""
        }
    },
    methods: {
        async sendCode () {
            let result = await this.$http({
                url: "/mz/v4/api/code?__t="+Date.now(),
                method: "POST",
                data: {
                    mobile: this.phone,
                    type: "2"
                }
            })
            console.log(result);
            
        },
    async  login () {
            let result = await this.$http({
                url: "/mz/v4/api/login?__t="+Date.now(),
                method: "POST",
                data: {
                    loginType: 1,
                    password: this.code,
                    username: this.phone
                }
            })
            console.log(result);
            if(result.data.status == 0){
                localStorage.setItem("userinfo",JSON.stringify( result.data.data.data))
                this.$router.replace({name: 'user'})
            }
            
        }
    }
}
</script>



<style lang="scss">
.login{
    background: #f8f8f8;
    height: 17.786667rem;
    width: 100%;
    overflow: hidden;
    .login-title{
        background: #fff;
        margin-top: 1.346667rem;
        width: 100%;
        box-sizing: border-box;
        padding: 0 .2rem;
        height: 1.12rem;
        border-bottom: 3px solid #df2d2d;
        color:  #df2d2d;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        line-height: 1.12rem;
        font-size: .48rem;
    }
    .login-content{
        background-color: #fff;
        border-bottom: 1px solid #d6d6d6;
        .phone-number{
            margin: 0;
            border-bottom: 1px solid #d6d6d6;
            overflow: hidden;
            font-size: inherit;
            font-weight: 400;
            position: relative;
            padding: .28rem .2rem;
            height: 1.173333rem;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between; 
            input{
                font-size: inherit;
                font-weight: 400;
                margin-right: .2rem;
                height: 0.8rem;
                margin-top: -5px;
                width: 6.533333rem;
                line-height: 1;
                border-radius: .06rem;
                border: 1px solid  #dcdcdc;
                outline:none;
                background: #dcdcdc;
            }
            button{
                background-color: #fff;
                color: #df2d2d;
                border: 0;
                margin-top: -.15rem;
                margin-bottom: -.15rem;
                padding: 0 .3rem;
                font-size: .28rem;
                vertical-align: middle;
                line-height: .6rem;
                box-sizing: border-box;
                cursor: pointer;
                width: 2.666667rem;
                height: 0.8rem;
                border: .02rem solid #df2d2d;
            }
        }
        .code{
            margin: 0;
            border-bottom: 1px solid #d6d6d6;
            overflow: hidden;
            font-size: inherit;
            font-weight: 400;
            position: relative;
            padding: .28rem .2rem;
            height: 1.173333rem;
            box-sizing: border-box;
             input{
                font-size: inherit;
                font-weight: 400;
                margin-right: .2rem;
                height: 0.8rem;
                margin-top: -5px;
                width: 100%;
                line-height: 1;
                border-radius: .06rem;
                border: 1px solid  #dcdcdc;
                outline:none;
                background: #dcdcdc
            }
        }

    }
    .btn-wrapper{
            margin: .28rem .2rem;
            width: 100%;
            margin-right: .2rem;
        button{
            display: inline-block;
            margin: 0;
            text-align: center;
            height: .6rem;
            padding: 0 .32rem;
            border-radius: .06rem;
            color: #fff;
            background-color: #df2d2d;
            line-height: .6rem;
            box-sizing: border-box;
            width: 9.466667rem;
            cursor: pointer;
            height: .94rem;
            line-height: .94rem;
            font-size: .5rem;
            height: 1.253333rem;
            outline: none;
            border: transparent;
        }
    }
    
    
}

</style>
