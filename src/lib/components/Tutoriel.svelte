    <script>
        import ButtonOne from './ButtonOne.svelte'
        export let title 
        export let texte
        export let videoSrc
         let buttonAttributs = {
        href: '/pdf/ConfigurerlesmailsetlesSMS.pdf',
        text: "Installer le PDF",
    };    </script>

    <section class="flex flex-col gap-5 justify-evenly items-center">
        <article>
            <h1>{title}</h1>
        </article>
        <article id="video" class="flex justify-center" >
            <video class="w-96 md:w-6/12" controls>
                <source src={videoSrc} type="video/mp4">
                <track kind="captions">
                Your browser does not support the video tag.
            </video>
        </article>
        <article>
            <p>
                {texte}
            </p>
            <button class="btn ">Télechargez le tutoriel sous forme de pdf</button>
        </article>
        <article>
            <ButtonOne buttonAttributs />
        </article>

    </section>