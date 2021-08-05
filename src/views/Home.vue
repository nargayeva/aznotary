<template>
    <div>
        <!-- Banner -->
        <div id="banner" class="mt-2 mt-sm-4 container"></div>

        <div class="container mt-4 p-0">
            <div class="row">
                <div class="col-12 mb-4 text-center">
                    <span class="title-president">“BİZİM HƏDƏFİMİZ ƏRAZİ BÜTÖVLÜYÜMÜZÜN BƏRPA EDİLMƏSİ İDİ, BUNA NAİL OLDUQ”</span>
                    <span class="president d-block text-right">İlham Əliyev</span>
                </div>
            </div>
        </div>
        
        <div class="container p-0">
            <div class="row mb-4 box-container justify-content-md-between justify-content-center align-items-center">

                <div class="col-7 d-md-flex d-none">
                    <img src="../../public/images/shehid.jpg" alt="Avatar" class="image">
                </div>

                <div class="col-md-4 col-9 box text-center" id="teymur">
                    <img src="../../public/images/teymur.jpg" alt="Avatar" class="image">
                    <div class="overlay">
                        <router-link to="teymur" class="more_button">ƏTRAFLI</router-link>
                    </div>
                </div>

            </div>
        </div>

        
        <!-- Boxes -->
        <div class="container mt-4 p-0">
            <div class="row">
                <div class="col-12 mb-4 text-center">
                    <span class="title">VƏTƏN MÜHARİBƏSİ İŞTİRAKÇISI OLMUŞ ƏMƏKDAŞLARIMIZI TANIYAQ</span>
                </div>
            </div>
            
            <div class="row mb-4 box-container justify-content-md-between justify-content-center">

            <div class="col-md-3 col-9 box text-center mb-5" id="ziya">
                <img src="../../public/images/ziya.jpg" alt="Avatar" class="image">
                <div class="overlay">
                    <router-link to="ziya" class="more_button">ƏTRAFLI</router-link>
                </div>
            </div>

            <div class="col-md-3 col-9 box text-center mb-5" id="shamxal">
                <img src="../../public/images/shamxal.jpg" alt="Avatar" class="image">
                <div class="overlay">
                    <router-link to="shamxal" class="more_button">ƏTRAFLI</router-link>
                </div>
            </div>

             <div class="col-md-3 col-9 box text-center mb-5" id="ayxan">
                <img src="../../public/images/ayxan.jpg" alt="Avatar" class="image">
                <div class="overlay">
                    <router-link to="ayxan" class="more_button">ƏTRAFLI</router-link>
                </div>
            </div>

        </div>
        
        <div class="row mb-0 mb-md-4 box-container justify-content-md-between justify-content-center">

            <div class="col-md-3 col-9 box text-center mb-5" id="nofer">
                    <img src="../../public/images/nofer.jpg" alt="Avatar" class="image">
                    <div class="overlay">
                        <router-link to="nofer" data-bs-toggle="modal" data-bs-target="#exampleModal" class="more_button">ƏTRAFLI</router-link>
                    </div>
                </div>

            <div class="col-md-3 col-9 box text-center mb-5" id="ozal">
                <img src="../../public/images/ozal.jpg" alt="Avatar" class="image">
                <div class="overlay">
                    <router-link to="ozal" class="more_button">ƏTRAFLI</router-link>
                </div>
            </div>
            
            <div class="col-md-3 col-9 box text-center mb-5" id="eli">
                <img src="../../public/images/eli.jpg" alt="Avatar" class="image">
                <div class="overlay">
                    <router-link to="eli" class="more_button">ƏTRAFLI</router-link>
                </div>
            </div>
        </div>
    </div>

</div>


</template>

<script>
    import '../assets/css/index.css'
    import '../assets/css/main.css'
    
    export default {
        name: "Home"
    }
</script>

<style scoped>
    #banner {
        background:url('../../public/images/banner2.jpg') no-repeat;
        background-size: cover;
        /* filter: brightness(-60); */
        min-height: 500px;
    }
    
    .banner-title {
        font-size: 2em;
        color: white !important;
    }

    .title {
        font-family: CalibriBold;
        color: #3A7292;
    }

    
    @media (max-width: 576px) {
    #banner {
        background:url('../../public/images/banner3.jpg') no-repeat center center;
        background-size: cover;
        /* filter: brightness(-60); */
        min-height: 400px;
    }
        .banner-title {
            font-size: 1.2em;
            color: white;
        }

        .title {
            font-size: 2rem;
        }
        
    }
</style>
