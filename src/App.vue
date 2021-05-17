<template>
    <div class="container">
        <NavBar />
        <div id="die-trash-container">
            <img
                id="die-trash"
                src="./assets/images/dieTrash.jpg"
                alt="lol"
            >
            <p id="die-trash-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae odio nemo repellendus ad at possimus nihil? Voluptates enim cumque qui temporibus ut dolores beatae similique animi quisquam? Voluptatibus est accusamus non nisi totam quibusdam voluptatum provident necessitatibus quisquam cum a nostrum placeat impedit id veritatis atque eum, architecto laboriosam quidem assumenda aut! Voluptate corrupti nam soluta, quam quibusdam aliquid consequatur, quia eos aut itaque dolor totam molestias impedit. Et esse accusamus ea quas architecto fuga unde nostrum facere ipsum harum deleniti, quia perspiciatis! Asperiores voluptate fugit, explicabo exercitationem expedita ipsum tempora atque numquam mollitia nisi quos aspernatur dolores, voluptas, in hic accusantium porro provident adipisci et nobis est? Consequatur recusandae repudiandae voluptatem eius commodi amet eaque, repellendus vero velit incidunt natus sunt modi nesciunt explicabo cumque tempore eligendi vel itaque omnis totam quibusdam iusto neque corrupti? Eaque, ad incidunt mollitia officiis culpa saepe harum voluptate praesentium? Adipisci, odit facere corrupti commodi tempore molestiae magni exercitationem error, nemo unde praesentium, ipsum optio vel recusandae quibusdam asperiores consequatur inventore. Quae, quam vel asperiores minima quasi, nostrum consectetur commodi odio odit eveniet dolore fuga temporibus? Expedita accusantium itaque reiciendis mollitia vitae impedit quisquam, rerum necessitatibus totam dolorem atque dolor temporibus quasi quia commodi maiores aliquid saepe amet nam numquam? Nisi, tempore animi. Magni eligendi in laborum voluptates illo rem, odit sit dolorum omnis consequatur laudantium exercitationem. Nihil rem eveniet rerum quos aliquam eos tempora numquam, illo ipsum sint sapiente eligendi earum ducimus nisi libero accusantium obcaecati, sequi nostrum harum laborum nam similique!
            </p>
        </div>
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
    name: "App",
    components: { NavBar }
});
</script>