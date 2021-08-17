<template>
   <div class="param-info" v-if="Object.keys(paramsInfo).length !== 0">
    <div v-for="(tables,index) in paramsInfo.rule.tables" :key="index">
    <table
      v-for="(table, index1) in tables"
      class="info-size"
      :key="index1"
    >
      <tr v-for="(tr, index2) in table" :key="index2">
        <td v-for="(td, index3) in tr" :key="index3">
          {{ td }}
        </td>
      </tr>
    </table>
    </div>

    <table class="info-param">
      <tr v-for="(info, index) in paramsInfo.infos" :key="index">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
        <td></td>
      </tr>
    </table>
    <div class="info-img" v-if="paramsInfo.info.images !== 0">
      <img :src="paramsInfo.info.images[0]" alt="" />
    </div>
  </div>
</template>

<script>
export default {
    name:"detailParamsInfo",
    props:{
        paramsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped="scoped">
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.param-info table {
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr {
  height: 42px;
}

.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.param-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}
</style>