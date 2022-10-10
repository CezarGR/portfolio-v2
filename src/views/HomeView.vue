<template>
  <div class="container-main">
    <div class="conatiner-home">
      <div class="container-title">
        <h1>
          {{this.infoTitle.modifiedTitle}}
        </h1>
        <h3>
          {{this.infoTitle.subTitle}}
        </h3>
      </div>
      <div>
        <span class="material-symbols-outlined icon-arrow">expand_more</span>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
      NavBar
    },

    data: () => ({
      infoTitle: {
        modifiedTitle: '',
        title: 'CESAR RODRIGUES.',
        subTitle: 'um desenvolvedor de sonhos'
      }
    }),

    watch: {
      animeteTitle: {
        immediate: true,
        handler() {
          let titleSplit = this.infoTitle.title.split('')
          titleSplit.forEach((l, i) => {
            setTimeout(() => this.infoTitle.modifiedTitle += l, 100 * i)
          })
        },
      }
    }
  }
</script>

<style>
  .container-main {
    background-color: #FFA800;
  }

  .conatiner-home {
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    align-content: space-around;
  }

  .container-title {
    padding-top: 300px;
    color: white;
    font-family: 'Bangers', cursive;
    text-transform: uppercase;
    text-align-last: center;
  }

  .container-title h1 {
    font-size: 6rem;
    letter-spacing: .2rem;
    transition: .5s;
  }

  .container-title h1:hover {
    font-size: 6.5rem;
    letter-spacing: .4rem;
  }

  .container-title h3 {
    font-size: 2rem;
    letter-spacing: .1rem;
    color: rgba(0, 0, 0, 0.315) !important;
    transition: .5s;
  }

  .container-title h3:hover {
    font-size: 3rem;
    letter-spacing: .4rem;
  }

  .icon-arrow {
    color: white;
    font-weight: 900;
    font-size: 2rem;
    animation: increasesAndDecreasesIcon .9s infinite;
  }

  @keyframes increasesAndDecreasesIcon{
    0% {
        font-size: 2rem;
    }
    20% {
        font-size: 2.1rem;
    }
    40% {
        font-size: 2.2rem;
    }
    60% {
        font-size: 2.3rem;
    }
    70% {
        font-size: 2.2rem;
    }
    80% {
        font-size: 2.1rem;
    }
    100%{
        font-size: 2rem;
    }
}
</style>
