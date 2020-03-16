import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const PopupTemplate = ({ content }) => {
  const [infos, setInfos] = React.useState([]);

  React.useEffect(() => {
    if (content) {
      setInfos(Object.values(content));
    }
  }, [content]);

  const formatInfo = value =>
    typeof value === 'number' ? `${new Intl.NumberFormat('es').format(value)}` : value;

  return (
    <div className="popup-template">
      {infos &&
        infos.map((info, index) => (
          <Fragment key={`dynamic-${index}`}>
            <span className={`popup-template--static popup-template--static-${index + 1}`}>
              {info.fieldLabel}
            </span>
            <div className={`popup-template--dynamic popup-template--dynamic-${index + 1}`}>
              <span>{formatInfo(info.value)}</span>
              <span>{info.label}</span>
            </div>
          </Fragment>
        ))}
    </div>
  );
};

PopupTemplate.propTypes = {
  content: PropTypes.oneOfType([PropTypes.object]).isRequired
};

function arePropsEqual(prevProps, nextProps) {
  return prevProps.content === nextProps.content;
};

const component = React.memo(PopupTemplate, arePropsEqual);

export { component as PopupTemplate };
