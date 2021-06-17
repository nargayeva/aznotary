<template>
        <!-- Banner -->
        <div class="container">
        <div id="banner" class="mt-2 mt-sm-4">
            <div class="container">
                <div class="row">
                    <div class="col-10 col-md-6 ml-5">
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-5 p-0">
            <div class="row">
                <div class="col-12 mb-3">
                    <span class="title">Vətən Müharibəsi iştirakçısı olmuş əməkdaşlarımızı tanıyaq</span>
                </div>
            </div>

    <div class="mb-5">
        <div class="container">
            <div class="row justify-content-evenly">
                <div class="col-md-5 col-12 p-0">
                    <img :src="getImageUrl('nofer.jpg')" alt="" class="images">
                </div>
                <div class="col-md-6 ml-1 col-12 align-self-center">
                    <span class="title text-center text-md-start">{{title}}</span>
                    <hr>
                    <p>
                        {{body}}
                    </p>
                </div>
                
            </div>

            <div class="row mt-3 justify-content-between">
                <div class="button">
                    ƏVVƏLKİ
                </div>
               <div class="button">
                    SONRAKI
                </div>
            </div>
        </div>
    </div>
        </div>
        </div>
</template>

<script>
    import '../../assets/css/index.css'

    export default {
        name: "nofer",
        props : {
           coverImage : {
               required:true
           },
           title: {
                required:true,
                type:String
           }, 
           body: {
                required:true,
                type:String
           }
        }, 
        methods : {
            getImageUrl(image){
                let img = "../../../public/images/" + image;

                alert(img)

                return img
            }
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    .images {
        width: 100%;
    }

    .title {
        font-size: 2rem;
    }

    hr {
        border-top:1px solid #3A7292;
        width: 100%;
    }

    .button {
        cursor: pointer;
        background-color: #3A7292;
        color: white;
        font-size: 16px;
        padding: 16px 32px;
    }

      .button:hover {
      color: white;
      text-decoration: none;
      background-color: #B19E7F;
  }

    #banner {
        background:url('../../../public/images/banner2.jpg') no-repeat;
        background-size: cover;
        /* filter: brightness(-60); */
        min-height: 500px;
    }

    .banner-title{
        font-size: 1.2em;
        color: white !important;
    }

       @media (max-width: 576px) {
    #banner {
        background:url('../../../public/images/banner3.jpg') no-repeat center center;
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
