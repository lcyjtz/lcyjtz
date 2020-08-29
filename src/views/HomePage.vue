<template>
    <div id="main" style="font-family:'朝忆梨花暮忆雪'; margin: 0 auto; width:100vw; height:auto">
          <code><pre>
    </pre></code>
    <script src="assets/jquery.min.js?v=3.3.1"></script>
    <script src="assets/jquery-ui.min.js?v=1.12.1"></script>
    <script src="js/jquery.ckLine.js"></script>
    <!--Live2D-->
    <div class="waifu" style="z-index: 99 ;">
        <div class="waifu-tips"></div>
        <canvas id="live2d" class="live2d"></canvas>
        <div class="waifu-tool">
            <span class="fui-home"></span>
            <span class="fui-chat"></span>
            <span class="fui-eye"></span>
            <span class="fui-user"></span>
            <span class="fui-photo"></span>
            <span class="fui-info-circle"></span>
            <span class="fui-cross"></span>
        </div>
    </div>
    <!--特效盒子-->
    <div class="wrap">
        <div class="cube">
            <div class="out_front">
                <img src="./img/77597977_p0.jpg" class="pic">
            </div>
            <div class="out_back">
                <img src="./img/77621862_p0.jpg" class="pic">
            </div>
            <div class="out_left">
                <img src="./img/78191926_p0.jpg" class="pic">
            </div>
            <div class="out_right">
                <img src="./img/79377679_p0.jpg" class="pic">
            </div>
            <div class="out_top">
                <img src="./img/78191926_p2.jpg" class="pic">
            </div>
            <div class="out_bottom">
                <img src="./img/78191926_p3.jpg" class="pic">
            </div>
            <span class="in_front">
            <img src="./img/78191926_p3.jpg" class="in_pic">
         </span>
            <span class="in_back">
            <img src="./img/78191926_p2.jpg" class="in_pic">
        </span>
            <span class="in_left">
            <img src="./img/79377679_p0.jpg" class="in_pic">
        </span>
            <span class="in_right">
            <img src="./img/78191926_p3.jpg" class="in_pic">
        </span>
            <span class="in_top">
            <img src="./img/77621862_p0.jpg" class="in_pic">
        </span>
            <span class="in_bottom">
            <img src="./img/77597977_p0.jpg" class="in_pic">
        </span>
        </div>
    </div>
    <!--背景波动-->
    <div class="waveWrapper waveAnimation" style="z-index: -1;">
        <div class="waveWrapperInner bgTop">
            <div class="wave waveTop" style="background-image: url('img/wave-top.png')"></div>
        </div>
        <div class="waveWrapperInner bgMiddle">
            <div class="wave waveMiddle" style="background-image: url('img/wave-mid.png')"></div>
        </div>
        <div class="waveWrapperInner bgBottom">
            <div class="wave waveBottom" style="background-image: url('img/wave-bot.png')"></div>
        </div>
    </div>
    <!--text time-->
    <div id="peopletext">
        <label id="time"></label><br><label class="pagemain">绿辉的个人博客</label>
    </div>
    <div class="arrow"></div>
    <!--主要内容-->
    <div id="content" style="margin-top: 3vh;">
        <div id="textContent">
            <div id="mainpart" style=" position: absolute;">
                <svg id="ckLine" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"></svg>
            </div>
            <ul class="colors">
                <li data-color="#2ecc71 "></li>
                <li data-color="#D64A4B "></li>
                <li data-color="#8e44ad "></li>
                <li class="active-color " data-color="#46a1de"></li>
                <li data-color="#bdc3c7 "></li>
            </ul>
            <section class="wrapper">
                <ul class="tabs">
                    <li id="consult" class="active">咨询</li>
                    <li class="video">视频</li>
                    <li class="picture">图片</li>
                    <li class="personal">博主的个人信息</li>
                </ul>
                <ul class="tab__content">
                    <li class="active">
                        <div class="content__wrapper">
                            <h2 class="text-color">文章</h2>
                        </div>
                        <div class="content__wrapper">
                            <h2 class="text-color">文章</h2>
                        </div>
                        <div class="content__wrapper">
                            <h2 class="text-color">文章</h2>
                        </div>
                        <div class="content__wrapper">
                            <h2 class="text-color">文章</h2>
                        </div>
                        <div class="content__wrapper">
                            <h2 class="text-color">文章</h2>
                        </div>
                        <div class="content__wrapper">
                            <h2 class="text-color">文章</h2>
                        </div>
                    </li>
                    <li>
                        <div class="content__wrapper">
                            <h2 class="text-color">绿辉的视频</h2>
                        </div>
                    </li>
                    <li>
                        <div class="content__wrapper">
                            <h2 class="text-color">绿辉的图片</h2>
                            <div class="container">
                                <div class="item">
                                    <img src="./img/蕾姆.jpg" alt="cat">
                                    <h2 class="text-color">猫（Felis silvestris catus）</h2>
                                </div>
                                <div class="item">
                                    <img src="http://localhost:8080/assets/Picture/66819724_p0.png" alt="cat">
                                    <h2 class="text-color">猫（Felis silvestris catus）</h2>
                                </div>
                                <div class="item">
                                    <img src="./img/1112.jpg" alt="cat">
                                    <h2 class="text-color">猫（Felis silvestris catus）</h2>
                                </div>
                                <div class="item">
                                    <img src="http://localhost:8080/assets/Picture/66819724_p0.png" alt="cat">
                                    <h2 class="text-color">猫（Felis silvestris catus）</h2>
                                </div>
                                <div class="item">
                                    <img src="https://s2.ax1x.com/2019/07/09/Z6J13t.md.jpg" alt="cat">
                                    <h2 class="text-color">猫（Felis silvestris catus）</h2>
                                </div>
                                <div class="item">
                                    <img src="https://s2.ax1x.com/2019/07/09/Z6JM4A.md.jpg" alt="cat">
                                    <h2 class="text-color">猫（Felis silvestris catus）</h2>
                                </div>
                                <div class="item">
                                    <img src="http://localhost:8080/assets/Picture/66819724_p0.png" alt="cat">
                                    <h2 class="text-color">猫（Felis silvestris catus）</h2>
                                </div>
                                <div class="item">
                                    <img src="./img/拉姆.jpg" alt="cat">
                                    <h2 class="text-color">猫（Felis silvestris catus）</h2>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="content__wrapper">
                            <div><img src="#">
                                <h2 class="text-color">博主的个人信息</h2>
                                <p>Created by <a class="text-color" href="#">Lewi Hussey</a></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <!--尾页-->
            <div id="ContentTail" style="font-family:'个性宅';">
                <label>感谢来到我的个人博客，博客的最终解释权归绿辉zzZ以及落宸zzZ所有，禁止转载以及一切商业活动。如遇到任何问题，请通过QQ或者E-mail联系我。</label><br>
                <label>绿辉的QQ：1242306431、E-mail：lhyjtz@qq.com。落宸的QQ：2094196162、E-mail：lcyjtz@qq.com</label>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped less>
  @font-face {
        font-family: '个性宅';
        src: url('font/个性宅.ttf');
    }
    
    @font-face {
        font-family: '朝忆梨花暮忆雪';
        src: url('font/朝忆梨花暮忆雪.ttf');
    }
</style>
<script>
export default {
    
}
</script>