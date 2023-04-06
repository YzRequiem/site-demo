<script>
    import {inview} from 'svelte-inview';
    import  { fade } from 'svelte/transition';

    let percentage = 0;
  
    function increasePercentage() {
      percentage += 1;
      if (percentage <= 60) {
        requestAnimationFrame(increasePercentage);
      }
    }
  </script>
  
  <div>
    <span>{percentage}%</span>
    <div class="bar" style="width: {percentage}%"
         transition:fade={{duration: 500, easing: "easeOut"}}>
    </div>
  </div>
  
  <button on:click={increasePercentage}>Augmenter</button>
  