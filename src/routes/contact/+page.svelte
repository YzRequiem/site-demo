<script>
 
import { superForm } from "sveltekit-superforms/client"
import { Button, Modal } from 'flowbite-svelte'
let defaultModal =false
import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
export let data;

const { form, errors, enhance, constraints } = superForm(data.form, {
   
   onResult: ({ result }) => { 
      if(result.type === 'success'){
         defaultModal = true
      };
   }
})

</script>

<!-- <SuperDebug data={$form} /> -->

<section class="dark:bg-gray-900 py-20 lg:py-[120px] overflow-hidden relative z-10">
   <div class="container">
      <div class="flex flex-wrap lg:justify-between -mx-4">
        <div class="w-full lg:w-1/2 xl:w-6/12 px-4">
            <div class="max-w-[570px] mb-12 lg:mb-0 px-10">
               <span class="block mb-4 dark:text-gray-50 font-semibold">
               Contactez Nous
               </span>
               <h2
                  class="
                  dark:text-white
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                  >
                  COMMENCEZ VOTRE ESSAI GRATUIT
               </h2>
               <p class=" dark:text-gray-300 leading-relaxed mb-9">
                  Vous avez des questions ? Vous souhaitez en savoir plus sur nos services ou bien essayer gratuitement l'application ? N'hésitez pas à nous contacter via ce formulaire.
               </p>

            </div>
         </div>
         <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
            <div class="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
               <form method="POST" use:enhance>
                  <div class="mb-6">
                     <input
                        name="name"
                        type="text"
                        bind:value={$form.name}
                        {...constraints.name}
                        placeholder="Nom"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        { $errors.name ? 'border-red-500' : '' }

                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                        {#if $errors.name}
                        <div class="text-red-500 text-sm mb-4">{$errors.name[0]}</div>
                        {/if}
                  </div>
                  <small></small>
                  <div class="mb-6">
                     <input
                        name="email"
                        type="email"
                        bind:value={$form.email}
                        {...constraints.email}
                        placeholder="Email"
                        class="
                        { $errors.email ? 'border-red-500' : '' }
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                        {#if $errors.email}
                        <div class="text-red-500 text-sm mb-4">{$errors.email[0]}</div>
                        {/if}
                  </div>
                  <div class="mb-6">
                     <input
                        name="phone"
                        type="text"
                        bind:value={$form.phone}
                        {...constraints.phone}
                        placeholder="Téléphone"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        { $errors.phone ? 'border-red-500' : '' }

                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                        {#if $errors.phone}
                        <div class="text-red-500 text-sm mb-4">{$errors.phone}</div>
                        {/if}
                  </div>
                  <div class="mb-6">
                     <textarea
                        name="message"
                        rows="6"
                        bind:value={$form.message}
                        {...constraints.message}
                        placeholder="Votre Message"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        { $errors.message ? 'border-red-500' : '' }

                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        ></textarea>
                        {#if $errors.message}
                        <div class="text-red-500 text-sm mb-4">{$errors.message}</div>
                        {/if}
                  </div>
                  <div>
                     <button
                        type="submit"
                        class="
                        w-full
                        bg-[#3056D3]
                        text-white
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                        >
                     Envoyer
                     </button>
                  </div>
               </form>
               <div>
                  <span class="absolute -top-10 -right-9 z-[-1]">
                    <img src="/svg/formSvg1.svg" alt="">
                  </span>
                  <span class="absolute -right-10 top-[90px] z-[-1]">
                     <img src="/svg/formSvg2.svg" alt="">
                  </span>
                  <span class="absolute -left-7 -bottom-7 z-[-1]">
                     <img src="/svg/formSvg3.svg" alt="">
                  </span>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<Modal title="Formulaire soumis" bind:open={defaultModal} autoclose>
   <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
     Votre message nous a été soumis avec succes.
   </p>
   <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
   Nous feront notre maximum pour vous répondre dans les plus brefs délais.
   </p>
   <svelte:fragment slot='footer'>
     <Button>Retour</Button>
   </svelte:fragment>
 </Modal>
<!-- ====== Contact Section End -->