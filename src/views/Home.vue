<template>
    <div>
        <!-- Banner -->
        <div id="banner" class="mt-2 mt-sm-4 container">
                <div class="row">
                    <div class="col-10 col-md-8 ml-5">
                    </div>
                </div>
        </div>
        
        <!-- Boxes -->
        <div class="container mt-5 p-0">
            <div class="row">
                <div class="col-12 mb-3">
                    <span class="title">Vətən Müharibəsi iştirakçısı olmuş əməkdaşlarımızı tanıyaq</span>
                </div>
            </div>
            
            <div class="row mb-4 box-container justify-content-md-between justify-content-center">

                <div class="col-md-3 col-9 box text-center mb-5" id="nofer">
                    <img src="../../public/images/nofer.jpg" alt="Avatar" class="image">
                    <div class="overlay">
                        <router-link to="nofer" data-bs-toggle="modal" data-bs-target="#exampleModal" class="more_button">ƏTRAFLI</router-link>
                    </div>
                </div>
            
            <div class="col-md-3 col-9 box text-center mb-5" id="ayxan">
                <img src="../../public/images/ayxan.jpg" alt="Avatar" class="image">
                <div class="overlay">
                    <router-link to="ayxan" class="more_button">ƏTRAFLI</router-link>
                </div>
            </div>
            
            <div class="col-md-3 col-9 box text-center mb-5 mb-sm-0" id="eli">
                <img src="../../public/images/eli.jpg" alt="Avatar" class="image">
                <div class="overlay">
                    <router-link to="eli" class="more_button">ƏTRAFLI</router-link>
                </div>
            </div>
        </div>
        
        <div class="row mb-4 box-container justify-content-md-between justify-content-center">
            <div class="col-md-3 col-9 box text-center mb-5 mr-md-5 ml-sm-0" id="ozal">
                <img src="../../public/images/ozal.jpg" alt="Avatar" class="image">
                <div class="overlay">
                    <router-link to="ozal" class="more_button">ƏTRAFLI</router-link>
                </div>
            </div>
            
            <div class="col-md-3 col-9 box text-center mb-5" id="ziya">
                <img src="../../public/images/ziya.jpg" alt="Avatar" class="image">
                <div class="overlay">
                    <router-link to="ziya" class="more_button">ƏTRAFLI</router-link>
                </div>
            </div>
            
            
            <div class="col-md-3 col-9 box text-center mb-5 ml-md-5 ml-sm-0" id="shamxal">
                <img src="../../public/images/shamxal.jpg" alt="Avatar" class="image">
                <div class="overlay">
                    <router-link to="shamxal" class="more_button">ƏTRAFLI</router-link>
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
        
    }
</style>
