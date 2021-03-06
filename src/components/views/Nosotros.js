import React from 'react';
import './Nosotros.css';
import { FormattedMessage } from 'react-intl';

export default class Nosotros extends React.Component {
  render() {
    return (
      <div className='nosotros-view'>
        <div className='nosotros-content'>
          <div className='nosotros-wrapper'>
            <div className='nosotros-text'>
              <h2>
                <FormattedMessage id="nosotros.hmision" defaultMessage='Misión' /></h2>
              <p>
                <FormattedMessage id='nosotros.mision' defaultMessage='
                El Museo de Historia Natural ANDES tiene como propósito ser un
                pilar docente e investigativo asociado a todos los laboratorios de
                investigación del Departamento de Ciencias Biológicas de la
                Universidad de los Andes. El museo proporciona infraestructura y
                equipos básicos de almacenamiento para todos los especímenes y
                tejidos colectados en los diferentes proyectos de investigación y
                docencia.' />
              </p>
            </div>
            <div className='nosotros-img'>
              <img
                src='/images/mission.jpg'
                alt='bloque M Universidad de los Andes'
              />
            </div>
          </div>
          <hr />
          <div className='nosotros-wrapper'>
            <div className='nosotros-text'>
              <h2>
                <FormattedMessage id="nosotros.hhistoria" defaultMessage="Historia"/>
              </h2>
              <p>
                <FormattedMessage id="nosotros.historia" defaultMessage='
                Las colecciones en el Departamento de Ciencias Biológicas las
                comenzó el profesor emérito Cornelis Johannes Marinkelle, en las
                decadas de los años 60 y 70. El profesor colectó numerosos
                especímenes principalmente de murcielagos y aves, esto con el fin
                de investigar los parasitos presentes en estos organismos. Gran
                parte de la colección de aves incluyendo una numerosa colección de
                huevos fueron donadas hace algunos años al Instituto Alexander von
                Humboldt. Actualmente el Museo ANDES se encuentra curando y
                catalogando todos los especímenes y tejidos derivados de las
                investigaciones de diez laboratorios del Departamento y algunos
                externos. Recientemente se crearon las colecciones de Hongos
                Microscópicos y Bacterias.'/>
              </p>
            </div>
            <div className='nosotros-img'>
              <img
                src='/images/history.jpg'
                alt='colección de huevos donada por Marinkelle'
              />
            </div>
          </div>
          <hr />
          <div className='nosotros-wrapper'>
            <div className='nosotros-text'>
              <h2>
                <FormattedMessage id='nosotros.hcolecciones' defaultMessage='Colecciones'/>
                </h2>
              <p>
                <FormattedMessage id="nosotros.colecciones" defaultMessage='
                El museo ANDES comprende colecciones de peces, anfibios, reptiles,
                aves y mamíferos. Además de estas, se están adelantando las
                colecciones de foraminíferos, polen y arácnidos. La principal
                preocupación de los curadores es tener una colección de referencia
                muy bien curada con tejidos e imágenes asociados a cada
                especímen.Actualmente la colección se compone de cerca de 24 000
                especímenes.'/>
              </p>
            </div>
            <div className='nosotros-img'>
              <img
              src='/images/collections.jpg'
                alt='especímenes de colecciones'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
