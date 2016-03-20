angular.module('factories', [])

.factory('factory', function () {
    var comun = {};
    var array = [
        {
            nombre: 'Jose',
            apellido: 'Estrada'
        },
        {
            nombre: 'Jeyson',
            apellido: 'Montenegro'
        },
        {
            nombre: 'Jere',
            apellido: 'Ortega'
        },
        {
            nombre: 'Francisco',
            apellido: 'Ardón'
        },
        {
            nombre: 'Keneth',
            apellido: 'Ubeda'
        },
        {
            nombre: 'Tamy',
            apellido: 'Vivas'
        }
    ];

    var clientes = [
        {
            nombre: 'Miel Estrada',
            logo: 'http://previews.123rf.com/images/didora/didora1409/didora140900543/32021099-abeja-de-la-miel-y-el-panal-de-miel-icono-de-dise-o-plano-Foto-de-archivo.jpg'
    }, {
            nombre: 'Facebook',
            logo: 'http://previews.123rf.com/images/didora/didora1409/didora140900543/32021099-abeja-de-la-miel-y-el-panal-de-miel-icono-de-dise-o-plano-Foto-de-archivo.jpg'
    }, {
            nombre: 'google',
            logo: 'http://previews.123rf.com/images/didora/didora1409/didora140900543/32021099-abeja-de-la-miel-y-el-panal-de-miel-icono-de-dise-o-plano-Foto-de-archivo.jpg'
    }, {
            nombre: 'twiter',
            logo: 'http://previews.123rf.com/images/didora/didora1409/didora140900543/32021099-abeja-de-la-miel-y-el-panal-de-miel-icono-de-dise-o-plano-Foto-de-archivo.jpg'
    }, {
            nombre: 'Chaplist',
            logo: 'http://previews.123rf.com/images/didora/didora1409/didora140900543/32021099-abeja-de-la-miel-y-el-panal-de-miel-icono-de-dise-o-plano-Foto-de-archivo.jpg'
    }
                   ];

    var testimonios = [
        {
            color: '#E1BEE7',
            nombre: 'Jose Estrada',
            foto: 'https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg',
            cuerpo: 'Muy Buena experiencia, es exelente, adios mucho mgusto',
            id: ''
    }, {
            color: '##B2DFDB',
            nombre: 'TAmy Vivas',
            foto: 'https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg',
            cuerpo: 'Muy Buena experiencia, me parecen exelentes apps',
            id: ''
    }, {
            color: '#BBDEFB',
            nombre: 'Jeyson Montenegro',
            foto: 'https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg',
            cuerpo: 'Muy Buen trabajo departe de los muchachos!',
            id: ''
    }, {
            color: '#F0F4C3',
            nombre: 'Jeremias Ortega',
            foto: 'https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg',
            cuerpo: 'Exelente!!!!!!!',
            id: ''
    }, {
            color: '#FFE0B2',
            nombre: 'Francisco Ardon',
            foto: 'https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg',
            cuerpo: 'Generando buenas ideas!!!!',
            id: ''
    }
                      ];

    comun.panchoElTriste = function () {
        return 'estoy triste';
    }

    comun.getMembers = function () {
        return array;
    }

    comun.getClientes = function () {
        return clientes;
    }

    comun.getTestimonios = function () {
        return testimonios;
    }

    return comun
});
