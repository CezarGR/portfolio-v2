<template>
  <div>
    <nav class="container-nav-bar">
      <div>
        <router-link 
          v-for="link in links" 
          class="link-style" 
          v-bind:class="{ buttonActivated: link.isActive }" 
          :to="link.url"
          @click.native="selectedLink(link)"
        >
          {{link.title}}
        </router-link>
      </div>
      <div>
        <button class="link-style" @click.stop="dialog = true">
          CONTATO
        </button>
      </div>
    </nav>  
    <v-dialog v-model="dialog" class="container-dialog">
      <div class="contact">
        <div class="conatiner-button-close">
          <button color="green darken-1" text @click="dialog = false">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>

        <div class="container-contact-email">
          <p>Fazer contato pelo</p>
          <a type="email" href="cgabriel.lourenzo@gmal.com">cgabriel.lourenzo@gmal.com</a>
        </div>

        <div class="container-socil-media">
          <p>SOCIAL</p>
          <a target="_blank" class="icon icon-linkedin" href="https://www.linkedin.com/in/cesarrodrigues-/"></a>
        </div>
        
      </div>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',

    data: () => ({
      dialog: true,
      links: [
        {
          title: "INICIAL",
          url: "/",
          isActive: false
        },
        {
          title: "SOBRE",
          url: "/about",
          isActive: false
        },
        {
          title: "PROJETOS",
          url: "/projects",
          isActive: false
        },
        {
          title: "CARREIRAS",
          url: "/careers",
          isActive: false
        }
      ]
    }),
    methods: {
      selectedLink(link) {
        this.links.map(link => link.isActive = false);
        link.isActive = true;
      }
    }
  }
</script>

<style>
  .container-nav-bar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    padding: 20px;
    height: 80px;
    font-family: 'Heebo', sans-serif;
    font-weight: 900;
  }

  .container-nav-bar a {
    font-family: 'Heebo', sans-serif;
    font-weight: 900;
  }

  .link-style {
    margin: 10px;
    text-decoration: none;
    color: white !important;
  }

  .link-style:hover {
    color: rgba(0, 0, 0, 0.315) !important;
  }

  .buttonActivated {
    color: rgba(0, 0, 0, 0.315) !important;
  }

  .container-dialog {
    width: 90vh;
  }

  .contact {
    width: 100%;
    height: 90vh;
    /* background-color: white; */
    background-image: linear-gradient(to bottom right, white 0, white 65%, rgb(244 243 243) 35%);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 50px 10px;
  }

  .contact p,a {
    font-family: 'Heebo', sans-serif;
    font-weight: 600;
  }

  .contact a {
    text-decoration: none;
    color: black !important;
  }

  .contact button {
    color: black;
  }

  .container-contact-email {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .container-contact-email a {
    font-weight: 900;
    font-size: 4rem;
  }

  .container-socil-media {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .conatiner-button-close {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
  }

  .icon {
    content: '';
    position: absolute;
    width: 2%;
    height: 2%;
    bottom: 90px;
    display: flex;
  }

  .icon-linkedin {
    background: url(../assets/icon-linkedin.svg) no-repeat center center/100%;
  }
</style>
