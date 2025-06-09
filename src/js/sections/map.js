
export function map() {
    ymaps.ready(init);
    function init() {
        var map = new ymaps.Map("map", {
            center: [41.26734596342667, 69.31929077909814],
            zoom: 17
        });


        var myPlacemark = new ymaps.Placemark(
            [59.943543, 30.338928],
            {
                balloonContent:
                    `
            <div class="balloon">
                <div class="ballon__address">Ул. Джаркурганская, 4.</div>
                <div class="ballon__contacts">
                    <a href="tel:REALNOMER">+(97) 350-88-88</a>
                </div>
            </div>
            `
            },
            {
                iconLayout: 'default#image',
                iconImageHref: '.././img/map/location-pin.svg',
                icon_imagesize: [40, 40],
                iconImageOffset: [-20, -40]
            });


        map.controls.remove("geolocationControl");// удаляем геолокацию
        map.controls.remove("searchControl"); // удаляем поиск
        map.controls.remove("trafficControl"); // удаляем контроль трафика
        map.controls.remove("typeSelector"); // удаляем тип
        // map.controls.remove("fullscreenControl"); // удаляем кнопу перехода в полноэкранный режим
        // map.controls.remove("zoomControl"); // удаляем контроль зумированния 
        map.controls.remove("rulerControl"); // удаляем  контрол правил
        map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
        map.geoObjects.add(myPlacemark);
    }


}