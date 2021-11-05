function showMap(){
    var general = {lat: 31.4117, lng: 35.0818};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 8,
        center: general
    }); 
  
    new google.maps.Marker({
    position: general,
    map: map,
    title: "Israel",
    icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
  });
// start section of automatic search bar :
      var input = document.getElementById('search');
      var searchBox = new google.maps.places.SearchBox(input);

      map.addListener('bouns_changed', function() {
        searchBox.setBounds(map.getBounds());
      });

      var markers = [];

      searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if(places.length === 0)
        return;

        markers.forEach(function (m) { m.setMap(null); });
        markers = [];

        var bounds = new google.maps.LatLngBounds();

        places.forEach(function(p){
          if (!p.geometry)
           return;

          markers.push(new google.maps.Marker({
            map: map,
            title: p.name,
            position: p.geometry.location
          }));

          if (p.geometry.viewport)
            bounds.union(p.geometry.viewport);
          else
            bounds.extend(p.geometry.location);
        });
        map.fitBounds(bounds);
      });
// end section of automatic search bar.
}

// all academic locations + show on  map functions: 

var general_location = {lat: 31.4117, lng: 35.0818};
var hit_location = {lat: 32.016113, lng: 34.773037};
var sapir_location = {lat: 31.509259, lng: 34.595528};
var technion_location = {lat: 32.7736, lng: 35.021667};
var open_university_location = {lat: 32.188725, lng: 34.887922};
var bar_ilan_university_location = {lat: 32.067778, lng: 34.8425};
var mihlelet_afeka_location = {lat: 32.115046, lng: 34.817779};
var ariel_university_location = {lat: 32.103889, lng: 35.207806};
var tel_aviv_university_location = {lat: 32.113889, lng: 34.804167};
var ben_gurion_university_location = {lat: 31.262192, lng: 34.801511};
var mihlala_akademit_aravit_lehinuh_location = {lat: 32.798083, lng: 35.016333};
var mihlala_akademit_lehinuh_givat_washington_location = {lat: 31.817294, lng: 34.729482};
var mihlala_yerushalaim_location = {lat: 31.760556, lng: 35.192222};
var mihlala_akademit_ahva_location = {lat: 31.744245, lng: 34.774046};
var mihlala_akademit_beit_brel_location = {lat: 32.201144, lng: 34.926253};
var hemdat_hadarom_location = {lat: 31.431472, lng: 34.592667};
var mihlelet_oranim_location = {lat: 32.712164, lng: 35.108876};
var seminar_hakibutzim_location = {lat: 32.1019, lng: 34.7894};
var tel_hai_location = {lat: 33.2356, lng: 35.5789};
var mihlelet_sahnin_location = {lat: 32.8596093, lng: 35.3105603};
var mihlelet_sce_location = {lat: 31.249861, lng: 34.788833};
var haifa_university_location = {lat: 32.7615919996, lng: 35.019475484};
var hebrew_university_jerusalem_location = {lat: 31.775833, lng: 35.2};

function general(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 8,
    center: general_location
}); 
new google.maps.Marker({
  position: general_location,
  map,
  title: "Israel",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function hit(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 18,
    center: hit_location
}); 
new google.maps.Marker({
  position: hit_location,
  map,
  title: "HIT",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function sapir(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: sapir_location
}); 
new google.maps.Marker({
  position: sapir_location,
  map,
  title: "Sapir",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
}); 
}

function technion(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 13,
    center: technion_location
});
new google.maps.Marker({
  position: technion_location,
  map,
  title: "Technion",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
}); 
}

function open_university(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: open_university_location
}); 
new google.maps.Marker({
  position: open_university_location,
  map,
  title: "Open University",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function bar_ilan_university(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: bar_ilan_university_location
}); 
new google.maps.Marker({
  position: bar_ilan_university_location,
  map,
  title: "Bar Ilan University",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
}); 
}

function mihlelet_afeka(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: mihlelet_afeka_location
}); 
new google.maps.Marker({
  position: mihlelet_afeka_location,
  map,
  title: "Afeka College",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function ariel_university(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: ariel_university_location
}); 
new google.maps.Marker({
  position: ariel_university_location,
  map,
  title: "Ariel University",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function tel_aviv_university(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: tel_aviv_university_location
}); 
new google.maps.Marker({
  position: tel_aviv_university_location,
  map,
  title: "Tel Aviv University",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
}); 
}

function ben_gurion_university(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: ben_gurion_university_location
}); 
new google.maps.Marker({
  position: ben_gurion_university_location,
  map,
  title: "Ben Gurion University",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
}); 
}

function mihlala_akademit_aravit_lehinuh(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: mihlala_akademit_aravit_lehinuh_location
}); 
new google.maps.Marker({
  position: mihlala_akademit_aravit_lehinuh_location,
  map,
  title: "Mihlala Akadameit Aravit Lehinuh",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function mihlala_akademit_lehinuh_givat_washington(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: mihlala_akademit_lehinuh_givat_washington_location
}); 
new google.maps.Marker({
  position: mihlala_akademit_lehinuh_givat_washington_location,
  map,
  title: "Hamihlala Ha-akadameit Lehinuh Givat Washington",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function mihlala_yerushalaim(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: mihlala_yerushalaim_location
}); 
new google.maps.Marker({
  position: mihlala_yerushalaim_location,
  map,
  title: "Mihlala Yerushalaim",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function mihlala_akademit_ahva(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: mihlala_akademit_ahva_location
}); 
new google.maps.Marker({
  position: mihlala_akademit_ahva_location,
  map,
  title: "Mihlala Ha-akadameit Ahva",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function mihlala_akademit_beit_brel(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: mihlala_akademit_beit_brel_location
}); 
new google.maps.Marker({
  position: mihlala_akademit_beit_brel_location,
  map,
  title: "Mihlala Ha-akadameit beit berl",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function hemdat_hadarom(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: hemdat_hadarom_location
}); 
new google.maps.Marker({
  position: hemdat_hadarom_location,
  map,
  title: "Hemdat Hadarom",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function mihlelet_oranim(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: mihlelet_oranim_location
}); 
new google.maps.Marker({
  position: mihlelet_oranim_location,
  map,
  title: "Mihlelet Oranim",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function seminar_hakibutzim(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: seminar_hakibutzim_location
}); 
new google.maps.Marker({
  position: seminar_hakibutzim_location,
  map,
  title: "Mihlelet Seminar Hakibutzim",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function tel_hai(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: tel_hai_location
}); 
new google.maps.Marker({
  position: tel_hai_location,
  map,
  title: "Tel Hai",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function mihlelet_sahnin(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: mihlelet_sahnin_location
}); 
new google.maps.Marker({
  position: mihlelet_sahnin_location,
  map,
  title: "Mihlelet Sahnin",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function mihlelet_sce(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: mihlelet_sce_location
}); 
new google.maps.Marker({
  position: mihlelet_sce_location,
  map,
  title: "Mihlelet SCE",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function haifa_university(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: haifa_university_location
}); 
new google.maps.Marker({
  position: haifa_university_location,
  map,
  title: "Haifa University",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

function hebrew_university_jerusalem(){
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: hebrew_university_jerusalem_location
}); 
new google.maps.Marker({
  position: hebrew_university_jerusalem_location,
  map,
  title: "Hebrew University Of Jerusalem",
  icon: "https://img.icons8.com/ios-filled/40/000000/student-center.png"
});
}

// end of locations + show on map functions // 

// start of initMap functions:

function initMapCS() {
  if (document.getElementById("מדעי_המחשב").value == 'דפולטיבי') {general()}
  else if (document.getElementById("מדעי_המחשב").value == 'מכללת_חולון') {hit()}
  else if (document.getElementById("מדעי_המחשב").value == 'מכללת_ספיר') {sapir()} 
  else if (document.getElementById("מדעי_המחשב").value == 'הטכניון') {technion()}
}

function initMapMadaeiHaruah() {
  if (document.getElementById("מדעי_הרוח").value == 'דפולטיבי') {general()}
  else if (document.getElementById("מדעי_הרוח").value == 'האוניברסיטה_הפתוחה'){open_university()}
  else if (document.getElementById("מדעי_הרוח").value == 'אוניברסיטת_בר_אילן') {bar_ilan_university()}
}

function initMapHandasatHashmal() {
  
  if (document.getElementById("הנדסת_חשמל").value == 'דפולטיבי') {general()}
  else if (document.getElementById("הנדסת_חשמל").value == 'מכללת_אפקה') {mihlelet_afeka()}
  else if (document.getElementById("הנדסת_חשמל").value == 'אוניברסיטת_בר_אילן') {bar_ilan_university()}
  else if (document.getElementById("הנדסת_חשמל").value == 'הטכניון') {technion()}
}

function initMapAdrihalut() {
  

  if (document.getElementById("אדריכלות").value == 'דפולטיבי') {general()}
  else if (document.getElementById("אדריכלות").value == 'אוניברסיטת_אריאל') {ariel_university()}
  else if (document.getElementById("אדריכלות").value == 'אוניברסיטת_תל_אביב') {tel_aviv_university()}
  else if (document.getElementById("אדריכלות").value == 'הטכניון') {technion()}
}

function initMapOmanut() {
  if (document.getElementById("אמנות").value == 'דפולטיבי') {general()}
  else if (document.getElementById("אמנות").value == 'האוניברסיטה_הפתוחה') {open_university()}
  else if (document.getElementById("אמנות").value == 'אוניברסיטת_בן_גוריון') {ben_gurion_university()}
}

function initMapAstronomia() {
  if (document.getElementById("אסטרונומיה").value == 'דפולטיבי') {general()}
  else if (document.getElementById("אסטרונומיה").value == 'אוניברסיטת_תל_אביב') {tel_aviv_university()}
}

function initMapAdrihalutNof() {
  if (document.getElementById("אדריכלות_נוף").value == 'דפולטיבי') {general()}
  else if (document.getElementById("אדריכלות_נוף").value == 'הטכניון') {technion()}
}


function initMapHoraatAnglit() {
  if (document.getElementById("הוראת_אנגלית").value == 'דפולטיבי') {general()}
  else if (document.getElementById("הוראת_אנגלית").value == 'המכללה_האקדמית_הערבית_לחינוך_בישראל') {mihlala_akademit_aravit_lehinuh()}
  else if (document.getElementById("הוראת_אנגלית").value == 'המכללה_האקדמית_לחינוך_גבעת_וושינגטון') {mihlala_akademit_lehinuh_givat_washington()}
  else if (document.getElementById("הוראת_אנגלית").value == 'מכללה_ירושלים') {mihlala_yerushalaim()}
  else if (document.getElementById("הוראת_אנגלית").value == 'המכללה_האקדמית_אחוה') {mihlala_akademit_ahva()}
  else if (document.getElementById("הוראת_אנגלית").value == 'המכללה_האקדמית_בית_ברל') {mihlala_akademit_beit_brel()}
  else if (document.getElementById("הוראת_אנגלית").value == 'חמדת_הדרום') {hemdat_hadarom()}
  else if (document.getElementById("הוראת_אנגלית").value == 'מכללת_אורנים') {mihlelet_oranim()}
  else if (document.getElementById("הוראת_אנגלית").value == 'מכללת_סמינר_הקיבוצים') {seminar_hakibutzim()}
}

function initMapHoraatBiologia() {
  if (document.getElementById("הוראת_ביולוגיה").value == 'דפולטיבי') {general()}
  else if (document.getElementById("הוראת_ביולוגיה").value == 'המכללה_האקדמית_הערבית_לחינוך_בישראל') {mihlala_akademit_aravit_lehinuh()}
  else if (document.getElementById("הוראת_ביולוגיה").value == 'מכללת_אורנים') {mihlelet_oranim()}
  else if (document.getElementById("הוראת_ביולוגיה").value == 'מכללת_סמינר_הקיבוצים') {seminar_hakibutzim()}
  else if (document.getElementById("הוראת_ביולוגיה").value == 'תל_חי(לשעבר אוהלו)') {tel_hai()}
}

function initMapHoraatMadaim() {
  if (document.getElementById("הוראת_מדעים").value == 'דפולטיבי') {general()}
  else if (document.getElementById("הוראת_מדעים").value == 'מכללה_ירושלים') {mihlala_yerushalaim()}
  else if (document.getElementById("הוראת_מדעים").value == 'חמדת_הדרום') {hemdat_hadarom()}
  else if (document.getElementById("הוראת_מדעים").value == 'הטכניון') {technion()}
}

function initMapHoraatMadaim() {
  if (document.getElementById("הוראת_מדעים").value == 'דפולטיבי') {general()}
  else if (document.getElementById("הוראת_מדעים").value == 'מכללה_ירושלים') {mihlala_yerushalaim()}
  else if (document.getElementById("הוראת_מדעים").value == 'חמדת_הדרום') {hemdat_hadarom()}
  else if (document.getElementById("הוראת_מדעים").value == 'הטכניון') {technion()}
}

function initMapHoraatMatmatika() {
  if (document.getElementById("הוראת_מתמטיקה").value == 'דפולטיבי') {general()}
  else if (document.getElementById("הוראת_מתמטיקה").value == 'המכללה_האקדמית_הערבית_לחינוך_בישראל') {mihlala_akademit_aravit_lehinuh()}
  else if (document.getElementById("הוראת_מתמטיקה").value == 'המכללה_האקדמית_לחינוך_גבעת_וושינגטון') {mihlala_akademit_lehinuh_givat_washington()}
  else if (document.getElementById("הוראת_מתמטיקה").value == 'מכללה_ירושלים') {mihlala_yerushalaim()}
  else if (document.getElementById("הוראת_מתמטיקה").value == 'מכללת_סכנין') {mihlelet_sahnin()}
  else if (document.getElementById("הוראת_מתמטיקה").value == 'מכללת_אורנים') {mihlelet_oranim()}
  else if (document.getElementById("הוראת_מתמטיקה").value == 'מכללת_סמינר_הקיבוצים') {seminar_hakibutzim()}
  else if (document.getElementById("הוראת_מתמטיקה").value == 'תל_חי(לשעבר אוהלו)') {tel_hai()}
}

function initMapHoraatAravit() {
  if (document.getElementById("הוראת_ערבית").value == 'דפולטיבי') {general()}
  else if (document.getElementById("הוראת_ערבית").value == 'מכללת_סכנין') {mihlelet_sahnin()}
  else if (document.getElementById("הוראת_ערבית").value == 'המכללה_האקדמית_הערבית_לחינוך_בישראל') {mihlala_akademit_aravit_lehinuh()}
  else if (document.getElementById("הוראת_ערבית").value == 'מכללת_אורנים') {mihlelet_oranim()}
}

function initMapHandasatBinian() {
  if (document.getElementById("הנדסת_בניין").value == 'דפולטיבי') {general()}
  else if (document.getElementById("הנדסת_בניין").value == 'מכללת_סמי_שמעון') {mihlelet_sce()}
  else if (document.getElementById("הנדסת_בניין").value == 'אוניברסיטת_בן_גוריון') {ben_gurion_university()}
  else if (document.getElementById("הנדסת_בניין").value == 'אוניברסיטת_אריאל') {ariel_university()}
  else if (document.getElementById("הנדסת_בניין").value == 'הטכניון') {technion()}
}

function initMapGeografia() {
  if (document.getElementById("גיאוגרפיה").value == 'דפולטיבי') {general()}
  else if (document.getElementById("גיאוגרפיה").value == 'אוניבריסטת_חיפה') {haifa_university()}
  else if (document.getElementById("גיאוגרפיה").value == 'אוניברסיטת_בן_גוריון') {ben_gurion_university()}
  else if (document.getElementById("גיאוגרפיה").value == 'אוניברסיטת_בר_אילן') {bar_ilan_university()}
  else if (document.getElementById("גיאוגרפיה").value == 'אוניברסיטת_תל_אביב') {tel_aviv_university()}
  else if (document.getElementById("גיאוגרפיה").value == 'האוניברסיטה_העברית') {hebrew_university_jerusalem()}
}

function initMapBiologia() {
  if (document.getElementById("ביולוגיה").value == 'דפולטיבי') {general()}
  else if (document.getElementById("ביולוגיה").value == 'אוניברסיטת_אריאל') {ariel_university()}
  else if (document.getElementById("ביולוגיה").value == 'אוניברסיטת_תל_אביב') {tel_aviv_university()}
  else if (document.getElementById("ביולוגיה").value == 'אוניבריסטת_חיפה') {haifa_university()}
  else if (document.getElementById("ביולוגיה").value == 'הטכניון') {technion()}
}

function initMapBalshanut() {
  if (document.getElementById("בלשנות").value == 'דפולטיבי') {general()}
  else if (document.getElementById("בלשנות").value == 'אוניברסיטת_בן_גוריון') {ben_gurion_university()}
  else if (document.getElementById("בלשנות").value == 'אוניברסיטת_תל_אביב') {tel_aviv_university()}
  else if (document.getElementById("בלשנות").value == 'האוניברסיטה_העברית') {hebrew_university_jerusalem()}
}

// end of initMap functions //




// start of auto complete degrees section :

var subjects = ["בלשנות","ביולוגיה","גיאוגרפיה","הנדסת בניין","הוראת ערבית","הוראת מתמטיקה","הוראת מדעים","הוראת ביולוגיה","הוראת אנגלית","אדריכלות נוף","אסטרונומיה","אמנות","מדעי המחשב","מדעי הרוח","הנדסת חשמל","אדריכלות"];


function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }


autocomplete(document.getElementById("myInput"), subjects);



const wrapper = document.querySelector('.wrapper'), 
      form    = wrapper.querySelectorAll('.myForm'),
      submitInput = form[0].querySelector('input[type="submit"]');

      function getDataForm(e){
          e.preventDefault();

          var formData = new FormData(form[0]);
          var chosenDegree = formData.get('degreeName');
          console.log(chosenDegree);
          
          if(chosenDegree == 'מדעי המחשב'){
            initMapCS();
            document.getElementById("CS_Form").hidden = false;
          }
          else if (chosenDegree == 'מדעי הרוח'){
            initMapMadaeiHaruah();
            document.getElementById("Madaei_Haruah_Form").hidden = false;
          }
          else if (chosenDegree == 'הנדסת חשמל'){
            initMapHandasatHashmal();
            document.getElementById("Handasat_Hashmal").hidden = false;
          }
          else if (chosenDegree == 'אדריכלות'){
            initMapAdrihalut();
            document.getElementById("Adrihalut").hidden = false;
          }
          else if (chosenDegree == 'אמנות'){
            initMapOmanut();
            document.getElementById("Omanut").hidden = false;
          }
          else if (chosenDegree == 'אסטרונומיה'){
            initMapAstronomia();
            document.getElementById("Astronomia").hidden = false;
          }
          else if (chosenDegree == 'אדריכלות נוף'){
            initMapAdrihalutNof();
            document.getElementById("Adrihalut_Nof").hidden = false;
          }
          else if (chosenDegree == 'הוראת אנגלית'){
            initMapHoraatAnglit();
            document.getElementById("Horaat_Anglit").hidden = false;
          }
          else if (chosenDegree == 'הוראת ביולוגיה'){
            initMapHoraatBiologia();
            document.getElementById("Horaat_Biologia").hidden = false;
          }
          else if (chosenDegree == 'הוראת מדעים'){
            initMapHoraatMadaim();
            document.getElementById("Horaat_Madaim").hidden = false;
          }
          else if (chosenDegree == 'הוראת מתמטיקה'){
            initMapHoraatMatmatika();
            document.getElementById("Horaat_Matmatika").hidden = false;
          }
          else if (chosenDegree == 'הוראת ערבית'){
            initMapHoraatAravit();
            document.getElementById("Horaat_Aravit").hidden = false;
          }
          else if (chosenDegree == 'הנדסת בניין'){
            initMapHandasatBinian();
            document.getElementById("Handasat_Binian").hidden = false;
          }
          else if (chosenDegree == 'גיאוגרפיה'){
            initMapGeografia();
            document.getElementById("Geografia").hidden = false;
          }
          else if (chosenDegree == 'ביולוגיה'){
            initMapBiologia();
            document.getElementById("Biologia").hidden = false;
          }
          else if (chosenDegree == 'בלשנות'){
            initMapBalshanut();
            document.getElementById("Balshanut").hidden = false;
          }
          else
            console.log(chosenDegree);
            

      }

      document.addEventListener('DOMContentLoaded', function(){
        submitInput.addEventListener('click', getDataForm, false);

      }, false);