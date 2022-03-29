<template>
  <div>
    <p :class="{'active': list[0]}">
      {{ person.name.address }}
    </p>
    <div v-if="hasdownload && $route.meta.hasdownload && !isUplus && obj.name.age"></div> 
    <div v-for="item in list[0].product" :key="item.id.aaa">
      {{ item.abc.ccac }}
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      person: null,
      list: [],
      products: [],
      flag: false,
      data:{
        name: ''
      },
      name:''
    }
  }
}
</script>