<template>
  <div id="app">

    <Header></Header>

    <div class="parcel">
        <Aside></Aside>
        <router-view/>
        <!-- <Main></Main> -->
    </div>
    
  </div>
</template>

<script>
  import Header from '@/components/Header/Header';
  import Aside from '@/components/Aside/Aside';
  import Main from '@/components/Main/Main';
  import $ from 'jquery';
  export default {
    name: 'App',
    components: {
      Header,
      Aside,
      Main
    }

  }
</script>

<style>
  .parcel{
    display: flex;
  }
</style>