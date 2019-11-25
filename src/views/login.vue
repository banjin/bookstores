<template>
<div>
    <table>
        <tbody>
            <tr>
                <td><i class="icon-user font14 ys-info-color"></i></td>
                <td>
                  <input type='text' v-model="username" placeholder="用户名" autocomplete="on" name="username" />
                </td>
            </tr>
            <tr>
                <td><i class="icon-lock font14 ys-info-color"></i></td>
                <td>
                  <input type="password" v-model="password" placeholder="密码" autocomplete="on" name="password" />
                </td>
            </tr>
        </tbody>
    </table>
    <p class="p-5 m-t-15">
      <input type="button"
             value="登录"
             @click="login"
             style="height:32px;line-height:32px;"/>
    </p>
</div>
</template>



<style scoped>
    
</style>


<script>
export default {
    
}
</script>