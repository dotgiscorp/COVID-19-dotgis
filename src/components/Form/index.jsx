import React from 'react';
import { store } from '../../store/store';
import PropTypes from 'prop-types';
import { Map } from 'mapbox-gl';
import { Geocoder } from '../Geocoder';
import { defineCustomElements } from '@carto/airship-components/dist/loader';
import { CARTO_ENDPOINT, CHECK_DATA_QUERY, UPDATE_DATA_QUERY } from '../../utils/config';
import fetchData from '../../utils/requests';
import zoneSvg from './img/zone.svg';
import symptomSvg from './img/symptom.svg';
import ageSvg from './img/age.svg';
import './style.scss';

defineCustomElements(window);

const Form = ({ mapObject }) => {
    const globalState = React.useContext(store);
    const { state, dispatch } = globalState;

    const symptomDropdownRef = React.useRef();
    const ageDropdownRef = React.useRef();
    const seeMapButtonRef = React.useRef();

    React.useEffect(() => {
        if(symptomDropdownRef && symptomDropdownRef.current) {
            symptomDropdownRef.current.options = [
                { text: 'No tuve síntomas', value: 0 },
                { text: 'Tuve síntomas, pero me hicieron el test', value: 1 },
                { text: 'Fuí positivo', value: 2 },
                { text: 'Soy positivo', value: 3 }
            ];

            symptomDropdownRef.current.addEventListener('optionChanged', event => {
                const value = event && event.detail;

                if(value) {
                    dispatch({ type: 'set step', payload: 'age' });
                    dispatch({ type: 'set info', payload: { info: 'userSymptom', value: value }});
                    dispatch({ type: 'switch layer', payload: `${value}_id` });
                }
            });

            symptomDropdownRef.current.style.setProperty('--as-dropdown--color--main', 'var(--color--primary)');
            symptomDropdownRef.current.style.setProperty('--as-dropdown--background-color', 'var(--color--secondary)');
            symptomDropdownRef.current.style.setProperty('--as-dropdown__list--border-color', 'var(--color--primary)');
            symptomDropdownRef.current.style.setProperty('--as-dropdown--color--hover', 'var(--color--secondary--hover)');
            symptomDropdownRef.current.style.setProperty('--as-dropdown--color', '#fff');
        }
    }, [symptomDropdownRef]);

    React.useEffect(() => {
        if(ageDropdownRef && ageDropdownRef.current) {
            ageDropdownRef.current.options = [
                { text: '<18 años', value: 1 },
                { text: '18-40 años', value: 2 },
                { text: '40-60 años', value: 3 },
                { text: '>60 años', value: 4 }
            ];

            ageDropdownRef.current.addEventListener('optionChanged', event => {
                const value = event && event.detail;

                if(value) {
                    dispatch({ type: 'set step', payload: 'thanks' });
                    dispatch({ type: 'set info', payload: { info: 'userAge', value: value }});
                }
            });
            
            ageDropdownRef.current.style.setProperty('--as-dropdown--color--main', 'var(--color--primary)');
            ageDropdownRef.current.style.setProperty('--as-dropdown--background-color', 'var(--color--secondary)');
            ageDropdownRef.current.style.setProperty('--as-dropdown__list--border-color', 'var(--color--primary)');
            ageDropdownRef.current.style.setProperty('--as-dropdown--color--hover', 'var(--color--secondary--hover)');
            ageDropdownRef.current.style.setProperty('--as-dropdown--color', '#fff');
        }
    }, [ageDropdownRef]);

    React.useEffect(() => {
        if(seeMapButtonRef && seeMapButtonRef.current) {
            seeMapButtonRef.current.style.setProperty('--as--btn--ui-color--primary', 'var(--color--secondary)');
            seeMapButtonRef.current.style.setProperty('--as--btn--ui-color--primary--hover', 'var(--color--secondary--hover)');
        }
    }, [seeMapButtonRef]);

    const checkHasData = () => {
        dispatch({ type: 'set loading', payload: true });

        const { userAddressXY, userSymptom } = state.userInfo;

        fetchData(CARTO_ENDPOINT(CHECK_DATA_QUERY(userSymptom, { lat: userAddressXY[0], long: userAddressXY[1] })))
          .then(response => response.json())
          .then(json => {
              if (json && json.rows) {
                if (Array.isArray(json.rows) && json.rows.length !== 0) {
                    const gridId = json.rows[0].id;
                    const totalType = json.rows[0][`type_${userSymptom}`];

                    fetchData(CARTO_ENDPOINT(UPDATE_DATA_QUERY(gridId, userSymptom, totalType === null ? 1 : totalType + 1)))
                        .then(response => {
                            if(response.ok) {
                                dispatch({ type: 'clean steps', payload: 'clean' });
                                dispatch({ type: 'set loading', payload: false });

                                mapObject.flyTo({
                                    center: userAddressXY,
                                    zoom: 15,
                                    essential: true // this animation is considered essential with respect to prefers-reduced-motion
                                })
                                .once('moveend', () => {
                                    dispatch({ type: 'force tiles update', payload: true });
                                    dispatch({ type: 'force tiles update', payload: false });
                                });
                            }
                        })
                        .catch(err => {
                            dispatch({ type: 'set loading', payload: false });
                            alert('¡Ups! Parece que tu zona no se encuentra disponible para realizar el conteo. Pero puedes echarle un vistazo al mapa.');
                        });
                } else {
                    dispatch({ type: 'clean steps', payload: 'clean' });
                    alert('¡Ups! Parece que tu zona no se encuentra disponible para realizar el conteo. Pero puedes echarle un vistazo al mapa.');
                }
              }
          })
          .catch(err => {
            dispatch({ type: 'set loading', payload: false });
            alert('¡Ups! Parece que tu zona no se encuentra disponible para realizar el conteo. Pero puedes echarle un vistazo al mapa.');
          });
    };

    return (
        <>
          <div className={`form__bg ${state.form ? 'form__bg--opened' : ''}`}></div>
            <div className={`form ${state.form ? 'form--opened' : '' }`}>
                <div className="form__images">
                    <img alt="zone-svg" src={zoneSvg} />
                    <img alt="symptom-svg" src={symptomSvg} style={{ opacity: state.steps.symptom || state.steps.age || state.steps.thanks ? 1 : 0.3 }} />
                    <img alt="age-svg" src={ageSvg} style={{ opacity: state.steps.age || state.steps.thanks ? 1 : 0.3 }} />
                </div>
                <div className="form__step where" style={{ display: state.steps.where ? 'block' : 'none' }}>
                    <h4>¿Dónde estás?</h4>
                    <Geocoder mapObject={mapObject} />
                </div>
                <div className="form__step symptom" style={{ display: state.steps.symptom ? 'block' : 'none' }}>
                    <h4>¿Tienes síntomas?</h4>
                    <as-dropdown
                        ref={symptomDropdownRef}
                        default-text="Síntomas"
                        can-clear="true">
                    </as-dropdown>
                </div>
                <div className="form__step age" style={{ display: state.steps.age ? 'block' : 'none' }}>
                    <h4>Y por último... ¿Tú edad?</h4>
                    <as-dropdown
                        ref={ageDropdownRef}
                        default-text="Edad"
                        can-clear="true">
                    </as-dropdown>
                </div>
                <div className="form__step thanks" style={{ display: state.steps.thanks ? 'block' : 'none' }}>
                    <h4>¡Gracias!</h4>
                    <button ref={seeMapButtonRef} className="as-btn as-btn--primary" onClick={checkHasData}>Ver mapa</button>
                </div>
            </div>
        </>
    );
} 

Geocoder.propTypes = {
    mapObject: PropTypes.instanceOf(Map).isRequired
};

export { Form };
