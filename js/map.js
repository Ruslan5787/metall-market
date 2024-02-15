ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [55.7621135,37.6011323],
        zoom: 11,
        controls: [],
      },
      { autoFitToViewport: "always", suppressMapOpenBlock: true }
    ),
    myPlacemark = new ymaps.Placemark(
      [55.77, 37.61],
      {
        hintContent: "Наша компания",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../images/map-mark.png",
        iconImageSize: [56, 64],
        iconImageOffset: [-5, -38],
      }
    );


  myMap.geoObjects.add(myPlacemark);
}
