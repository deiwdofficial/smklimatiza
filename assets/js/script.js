function startAnimation(){
    null==Interval&&(Interval=setInterval(animate,50))
}
function stopAnimation(){
    null!=Interval&&(clearInterval(Interval),Interval=null)
}
function animate(){
    rota+=1,
    aniPoints+=1,
    aniPoints>10&&40>aniPoints&&(endAnimation=!1,fast_+=(2-fast_)/10,rot1_1+=(rot1_2-rot1_1)/fast_,rot2_1+=(rot2_2-rot2_1)/fast_,rot3_1+=(rot3_2-rot3_1)/fast_,rot4_1+=(rot4_2-rot4_1)/fast_,
    leaver_1.setAttribute("transform","rotate("+rot1_1+" 14  200)"),
    leaver_2.setAttribute("transform","rotate("+rot2_1+" 38  80)"),
    leaver_3.setAttribute("transform","rotate("+rot3_1+" 147  26)"),
    leaver_4.setAttribute("transform","rotate("+rot4_1+" 182  63)")),
    aniPoints>30&&70>aniPoints&&(fast_2+=(2-fast_2)/10,rot4_1+=(rot4_3-rot4_1)/fast_2,
    leaver_4.setAttribute("transform","rotate("+rot4_1+" 182  63)")),
    aniPoints>70&&100>aniPoints&&(fast_3+=(2-fast_3)/10,rot5_1+=(rot5_2-rot5_1)/fast_3,rot6_1+=(rot6_2-rot6_1)/fast_3,
    leaver_5.setAttribute("transform","translate( 0 ,"+rot5_1+")"),
    leaver_6.setAttribute("y2",rot6_1)),aniPoints>100&&102>aniPoints&&liftBlock.setAttribute("visibility","hidden"),
    aniPoints>115&&190>aniPoints&&(fast_4+=(2-fast_4)/10,rot5_1+=(rot5_3-rot5_1)/fast_4,rot6_1+=(rot6_3-rot6_1)/fast_4,
    leaver_5.setAttribute("transform","translate( 0 ,"+rot5_1+")"),
    leaver_6.setAttribute("y2",rot6_1)),aniPoints>190&&230>aniPoints&&(fast_5+=(2-fast_5)/10,rot1_1+=(rot1_3-rot1_1)/fast_5,rot2_1+=(rot2_3-rot2_1)/fast_5,rot3_1+=(rot3_3-rot3_1)/fast_5,rot4_1+=(rot4_4-rot4_1)/fast_5,rot5_1+=(rot5_4-rot5_1)/fast_3,
    leaver_1.setAttribute("transform","rotate("+rot1_1+" 14  200)"),
    leaver_2.setAttribute("transform","rotate("+rot2_1+" 38  80)"),
    leaver_3.setAttribute("transform","rotate("+rot3_1+" 147  26)"),
    leaver_4.setAttribute("transform","rotate("+rot4_1+" 182  63)")),
    aniPoints>240&&280>aniPoints&&(fast_6+=(2-fast_6)/10,rot5_1+=(rot5_5-rot5_1)/fast_6,rot4_1+=(rot4_1-rot4_1)/fast_6,
    leaver_4.setAttribute("transform","rotate("+rot4_1+" 182 50)"),
    leaver_5.setAttribute("transform","translate(2, "+rot5_1+")"),rot6_1+=(rot6_4-rot6_1)/fast_6,
    leaver_6.setAttribute("y2",rot6_1)),aniPoints>280&&282>aniPoints&&liftBlock.setAttribute("visibility","visible"),
    aniPoints>300&&340>aniPoints&&(fast_7+=(2-fast_7)/10,rot5_1+=(rot5_3-rot5_1)/fast_7,rot4_1+=(rot4_1-rot4_1)/fast_7,
    leaver_4.setAttribute("transform","rotate("+rot4_1+" 182 50)"),
    leaver_5.setAttribute("transform","translate(0, "+rot5_1+")"),rot6_1+=(rot6_3-rot6_1)/fast_7,
    leaver_6.setAttribute("y2",rot6_1)),
    aniPoints>340&&!endAnimation&&(endAnimation=!0,aniPoints=0,fast_=50,fast_2=50,fast_3=50,fast_4=50,fast_5=50,fast_6=50,fast_7=50)
}
    
let endInterval=0,
    rot1_1=0,
    rot1_2=30,
    rot1_3=-10,
    rot1_4=-5,
    rot2_1=0,
    rot2_2=-20,
    rot2_3=0,
    rot2_4=20,
    rot3_1=0,
    rot3_2=-10,
    rot3_3=0,
    rot3_4=-70,
    rot4_1=0,
    rot4_2=-5,
    rot4_3=0,
    rot4_4=10,
    rot5_1=0,
    rot5_2=90,
    rot5_3=0,
    rot5_4=0,
    rot5_5=150,
    rot6_1=95,
    rot6_2=190,
    rot6_3=95,
    rot6_4=245,
    sand_1=0,
    sand_2=0,
    fast_=50,
    fast_2=50,
    fast_3=50,
    fast_4=50,
    fast_5=50,
    fast_6=50,
    fast_7=50,
    rota=0,
    endAnimation=!1,
    aniPoints=0,
    main_obj = document.getElementById("main_obj"),
    leaver_1 = document.getElementById("leaver_1"),
    leaver_2 = document.getElementById("leaver_2"),
    leaver_3 = document.getElementById("leaver_3"),
    leaver_4 = document.getElementById("leaver_4"),
    leaver_5 = document.getElementById("leaver_5"),
    leaver_6 = document.getElementById("thread"),
    liftBlock = document.getElementById("liftBlock"),
    sand_flow = document.getElementById("maskObj"),
    obj3 = document.getElementById("obj3"),
    checkAni=!1,Interval=null;

main_obj.setAttribute("transform","translate( 100, 40)")
startAnimation();


!function(){
    function m(a){
        h[a].curLength += (h[a].curTarget - h[a].curLength) / b,
        h[a].target.setAttribute("stroke-dashoffset", h[a].curLength),
        h[a].curLength > h[a].curTarget - .3 && h[a].curLength < h[a].curTarget + .3 &&
        (h[a].curTarget == 2 * l ? h[a].curTarget = l : h[a].curTarget = 2 * l)
    }
    function n(){
        requestAnimationFrame(n),
        g += c,
        i.setAttribute("transform", "rotate(" + g + ")"),
        m(0),
        m(1),
        k.transform.baseVal.appendItem(j.createSVGTransformFromMatrix(j.createSVGMatrix().rotate(a)))
    }
    
    for (var a = .5, b = .5, c = .5, d = 0, e = ["ms", "moz", "webkit", "o"], f = 0; f < e.length && !window.requestAnimationFrame; ++f)
        window.requestAnimationFrame = window[e[f] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[e[f] + "CancelAnimationFrame"] || window[e[f] + "CancelRequestAnimationFrame"];

    window.requestAnimationFrame || (window.requestAnimationFrame = function(a, b) {
        var c = (new Date).getTime(),
        e = Math.max(0, 16 - (c - d)),
        f = window.setTimeout(function() {
            a(c + e)
        }, e);
        return d = c + e, f
    }), 
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
        clearTimeout(a)
    }), 
    b = Math.max(1 / b * 7, 3);
    
    var g = 0,
    h = [],
    i = document.getElementById("SVGWI02_cloud_part"),
    j = document.getElementById("SVGWI02"),
    k = document.getElementById("SVGWI02_ray_set"),
    l = document.getElementById("SVGWI02_ray1").getTotalLength();

    h.push({
        curLength: l,
        curTarget: l,
        target: document.getElementById("SVGWI02_ray1")
    }), 
    h.push({
        curLength: 2 * l,
        curTarget: 2 * l,
        target: document.getElementById("SVGWI02_ray2")
    }), 
    h[0].target.setAttribute("stroke-dasharray", l),
    h[0].target.setAttribute("stroke-dashoffset", l),
    h[1].target.setAttribute("stroke-dasharray", l),
    h[1].target.setAttribute("stroke-dashoffset", l),
    n()
}();

window.addEventListener("click", close_Show)

function close_Show(e){
    let verify_Buttons = e.target.nodeName !== 'BUTTON'
    let verify_Show = !e.target.offsetParent?.classList.contains('show')

    console.log()
    if(verify_Buttons && verify_Show){
        document.querySelector('.show')?.classList.remove('show')
    }
}