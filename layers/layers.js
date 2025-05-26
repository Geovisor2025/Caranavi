var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PerimetroABAs_1 = new ol.format.GeoJSON();
var features_PerimetroABAs_1 = format_PerimetroABAs_1.readFeatures(json_PerimetroABAs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetroABAs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetroABAs_1.addFeatures(features_PerimetroABAs_1);
var lyr_PerimetroABAs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetroABAs_1, 
                style: style_PerimetroABAs_1,
                popuplayertitle: 'Perimetro ABAs',
                interactive: true,
                title: '<img src="styles/legend/PerimetroABAs_1.png" /> Perimetro ABAs'
            });
var format_PrediosINRA_2 = new ol.format.GeoJSON();
var features_PrediosINRA_2 = format_PrediosINRA_2.readFeatures(json_PrediosINRA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrediosINRA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrediosINRA_2.addFeatures(features_PrediosINRA_2);
var lyr_PrediosINRA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrediosINRA_2, 
                style: style_PrediosINRA_2,
                popuplayertitle: 'Predios INRA',
                interactive: true,
    title: 'Predios INRA<br />\
    <img src="styles/legend/PrediosINRA_2_0.png" /> Sin Relación<br />\
    <img src="styles/legend/PrediosINRA_2_1.png" /> Rel. Parcial<br />\
    <img src="styles/legend/PrediosINRA_2_2.png" /> Rel. Media<br />\
    <img src="styles/legend/PrediosINRA_2_3.png" /> Rel. Exacta<br />' });
var format_ActualizacinCampo_3 = new ol.format.GeoJSON();
var features_ActualizacinCampo_3 = format_ActualizacinCampo_3.readFeatures(json_ActualizacinCampo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActualizacinCampo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActualizacinCampo_3.addFeatures(features_ActualizacinCampo_3);
cluster_ActualizacinCampo_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ActualizacinCampo_3
});
var lyr_ActualizacinCampo_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ActualizacinCampo_3, 
                style: style_ActualizacinCampo_3,
                popuplayertitle: 'Actualización Campo',
                interactive: true,
    title: 'Actualización Campo<br />\
    <img src="styles/legend/ActualizacinCampo_3_0.png" /> UPA<br />\
    <img src="styles/legend/ActualizacinCampo_3_1.png" /> VIVIENDA<br />' });
var format_PrediosCPV_4 = new ol.format.GeoJSON();
var features_PrediosCPV_4 = format_PrediosCPV_4.readFeatures(json_PrediosCPV_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrediosCPV_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrediosCPV_4.addFeatures(features_PrediosCPV_4);
cluster_PrediosCPV_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PrediosCPV_4
});
var lyr_PrediosCPV_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PrediosCPV_4, 
                style: style_PrediosCPV_4,
                popuplayertitle: 'Predios CPV',
                interactive: true,
                title: '<img src="styles/legend/PrediosCPV_4.png" /> Predios CPV'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PerimetroABAs_1.setVisible(false);lyr_PrediosINRA_2.setVisible(false);lyr_ActualizacinCampo_3.setVisible(false);lyr_PrediosCPV_4.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_PerimetroABAs_1,lyr_PrediosINRA_2,lyr_ActualizacinCampo_3,lyr_PrediosCPV_4];
lyr_PerimetroABAs_1.set('fieldAliases', {'DEPTO': 'DEPTO', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', 'COMUNIDAD': 'COMUNIDAD', });
lyr_PrediosINRA_2.set('fieldAliases', {'Comunidad': 'Comunidad', 'Municipio': 'Municipio', 'Benef': 'Benef', 'Corr': 'Corr', });
lyr_ActualizacinCampo_3.set('fieldAliases', {'Comunidad': 'Comunidad', 'Tipo': 'Tipo', 'Nombre': 'Nombre', });
lyr_PrediosCPV_4.set('fieldAliases', {'COMUNIDAD': 'COMUNIDAD', 'JEFE HOGAR': 'JEFE HOGAR', });
lyr_PerimetroABAs_1.set('fieldImages', {'DEPTO': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'COMUNIDAD': 'TextEdit', });
lyr_PrediosINRA_2.set('fieldImages', {'Comunidad': '', 'Municipio': 'TextEdit', 'Benef': 'TextEdit', 'Corr': 'TextEdit', });
lyr_ActualizacinCampo_3.set('fieldImages', {'Comunidad': 'TextEdit', 'Tipo': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_PrediosCPV_4.set('fieldImages', {'COMUNIDAD': 'TextEdit', 'JEFE HOGAR': 'TextEdit', });
lyr_PerimetroABAs_1.set('fieldLabels', {'DEPTO': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', 'COMUNIDAD': 'inline label - always visible', });
lyr_PrediosINRA_2.set('fieldLabels', {'Comunidad': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Benef': 'inline label - always visible', 'Corr': 'inline label - always visible', });
lyr_ActualizacinCampo_3.set('fieldLabels', {'Comunidad': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Nombre': 'inline label - always visible', });
lyr_PrediosCPV_4.set('fieldLabels', {'COMUNIDAD': 'inline label - always visible', 'JEFE HOGAR': 'inline label - always visible', });
lyr_PrediosCPV_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});