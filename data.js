let url = "https://gator4041.hostgator.com:2083/cpsess6626010094/3rdparty/phpMyAdmin/tbl_sql.php?db=joranadz_apyranke&table=apyranke&token=df99bc62fdef64f0e2fd0c2804eba137";
let jasonObjektas = {};

function surinktiDuomenis() {
    jasonObjektas.pirmas = $('[id="pirmas"]').select().val();
    jasonObjektas.antras = $('[id="antras"]').select().val();
    jasonObjektas.trecias = $('[id="trecias"]').select().val();
    jasonObjektas.ketvirtas = $('[id="ketvirtas"]').select().val();
    jasonObjektas.penktas = $('[id="penktas"]').select().val();
    jasonObjektas.sestas = $('[id="sestas"]').select().val();
    jasonObjektas.septintas = $('[id="septintas"]').select().val();
    jasonObjektas.astuntas = $('[id="astuntas"]').select().val();
    jasonObjektas.devintas = $('[id="devintas"]').select().val();
    jasonObjektas.desimtas = $('[id="desimtas"]').select().val();
    jasonObjektas.vienuoliktas = $('[id="vienuoliktas"]').select().val();
    jasonObjektas.dvyliktas = $('[id="dvyliktas"]').select().val();
    jasonObjektas.tryliktas = $('[id="tryliktas"]').select().val();
    jasonObjektas.keturioliktas = $('[id="keturioliktas"]').select().val();
    jasonObjektas.penkioliktas = $('[id="penkioliktas"]').select().val();
    jasonObjektas.sesioliktas = $('[id="sesioliktas"]').select().val();
    jasonObjektas.septynioliktas = $('[id="septynioliktas"]').select().val();
    jasonObjektas.astuonioliktas = $('[id="astuonioliktas"]').select().val();
}
function siustiDuomanis() {
    surinktiDuomenis();
    console.log("siunciam: " + JSON.stringify(jasonObjektas));

    $.post(url, jasonObjektas)
        .done(function (data) {
            console.log("Response: " + JSON.stringify(data));
        })
        .fail(function (data) {
            console.log("Klaida: " + JSON.stringify(data))
        })
}
$('[type="submit"]').click(function () {
    siustiDuomenis();
    
});
let g=document.getElementById("pozicija1");
g.addEventListener('click', change1);
function change1() {
    document.getElementById("pozicija1").src="foto/eror.png";
}
let a=document.getElementById("pozicija2");
a.addEventListener('click', change2);
function change2() {
    alert("Pasirinkite iš sąrašo kairėje");
}
