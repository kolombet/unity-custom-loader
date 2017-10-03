<template>
    <span class="tweened-number">
        {{ tweeningValueVue }}
    </span>
</template>

<script>
import * as TWEEN from '@tweenjs/tween.js';

export default {
    props: {
        // The value that we'll be tweening to.
        value: {
            type: Number,
            required: true
        },

        // How long the tween should take. (In milliseconds.)
        tweenDuration: {
            type: Number,
            default: 100000
        }
    },

    watch: {
        // Whenever `props.value` changes, update the tween.
        value(newVal, oldVal) {
            this.tween(oldVal, newVal)
        }
    },

    // This holds the temporary state of the tweened value.
    data: () => ({
        tweeningValueVue: 0
    }),

    mounted() {
        this.tween(0, this.value)
    },

    methods: {
        // This is our main logic block. It handles tweening from a start value to an end value.
        tween(start, end) {
            let tweeningValueVueLocal = this.tweeningValueVue;
            let frameHandler;

            // Handles updating the tween on each frame.
            const animate = function(currentTime) {
                TWEEN.update(currentTime)
                frameHandler = requestAnimationFrame(animate)
            }

            console.log("tween start: " + start);
            let tweenData = { tweeningValueVue: start };
            const myTween = new TWEEN.Tween(tweenData);
            myTween.to({ tweeningValueVue: end }, this.tweenDuration);

            myTween.onComplete(() => {
                cancelAnimationFrame(frameHandler)
            });

            myTween.onUpdate(() => {
                this.tweeningValueVue = tweenData.tweeningValueVue.toFixed(2);
            });

            myTween.start();

            frameHandler = requestAnimationFrame(animate);
        }
    }
}
</script>