<template>
    <div>
        <!-- <p>This number does move-y things. -->
        <animated-counter :value="myValue"></animated-counter>
        <!-- </p>
                <p>You can change the tweened number here: <input type="text" v-model="myValue" /></p> -->
        <!-- It transitions like magic! Magic with a bunch of code behind it, that is. -->
    </div>
</template>

<script>
import AnimatedCounter from './AnimatedCounter.vue';

export default {
    components: {
        AnimatedCounter
    },

    data: () => ({
        myValue: 100
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
