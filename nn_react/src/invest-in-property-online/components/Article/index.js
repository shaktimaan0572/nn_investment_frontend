import React from 'react';

const Article = props => {
    return (
        <div style={{
            marginTop: '30px',
            padding: '4.16%',
        }}>
            <div style={{
                fontWeight: '600',
                fontSize: '16px',
                lineHeight: '160%',
                letterSpacing: '.015em',
                color: '#2f363f',

            }}>
                Have a look at our guide
            </div>
            <iframe
                src='https://www.99acres.com/microsite/articles/commercial-property-investment/'
                style={{
                    border: 'none',
                    width: '100%',
                    height: '600px',
                }}
            >
            </iframe>
        </div>
    )
};

export default Article;
