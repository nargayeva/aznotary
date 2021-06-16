<template>
        <!-- Banner -->
        <div id="banner" class="mt-2 mt-sm-4 container">
            <div class="container">
                <div class="row">
                    <div class="col-10 col-md-6 ml-5">
                        <span class="banner-title">
                            Vətən Müharibəsi iştirakçısı olmuş əməkdaşlarımızı tanıyaq
                        </span>
                    </div>
                </div>
            </div>
        </div>

    <div class="mt-5 mt-sm-4 mb-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-12 p-0">
                    <img src="../../public/images/nofer.jpg" alt="" class="images">
                </div>

                <div class="col-md-5 mr-1 col-12 align-self-center justify-content-center">
                    <span class="title">Xodayev Nofər</span>
                    <hr>
                    <p>Mən, Xodayev Nofər Nemət oğlu, 24.05.1996-cı ildə Balakən rayonunun Katex kəndində anadan olmuşam. Orta təhsilə 2002-ci ildə Katex 1 saylı tam orta məktəbdə başlamış, 2013-cü ildə həmin məktəbi bitirmişəm. 2013-cü ildə Azərbaycan Dövlət İqtisad Universitetinin İnformatika və İdarəetmə fakültəsinin Menecment ixtisasına daxil olmuşam. 2017-ci ildə həmin universiteti bitirmişəm. 2017-2018-ci illərdə hərbi xidmətdə olmuşam. 23.09.2019-cu il tarixdə 2 saylı Bakı “Asan xidmət” mərkəzinin notariat ofisində baş mütəxəssis (böyük inspektor) vəzifəsində işləməyə başlamışam. 28.09.2020-ci il tarixdə Nəsimi rayon hərbi komisarlığı tərəfindən Silahlı Qüvvələrin təliminə cəlb olunmuşam. 03.10.2020-ci il tarixdə Ali Baş Komandanın əmrinə əsasən işğal olunmuş torpaqlarımızın azad olunması uğrunda döyüşlərə qatılmışam. Füzuli, Cəbrayıl və Xocavənd döyüşlərində iştirak etmişəm. Cəbrayıl və Xocavəndin azad olunmasına görə və vətən müharibəsi iştirakçısı medalları ilə, o cümlədən Fəxri fərman və təşəkkürnamələrlə təltif olunmuşam. 12.01.2021-ci il tarixdə Azərbaycan Respublikası Ədliyyə Naziri cənab Fikrət Məmmədov tərəfindən “Fəxri Fərman”a layiq görülmüşəm. </p>
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
</template>

<script>
    import '../assets/css/index.css'

    export default {
        name: "nofer"
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
        font-size: 3rem;
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
        background:linear-gradient(to right,#3a729298, #b19e7f80), url('../../public/images/soldier3.jpeg') no-repeat;
        /* filter: brightness(-60); */
        min-height: 450px;
    }

    .banner-title{
        font-size: 2em;
        color: white !important;
    }


</style>
