const smartgrid = require('smart-grid');

smartgrid('./src/default/css', {
    mobileFirst: false,
    columns: 24,
    offset: "20px",
    outputStyle: "scss",
    container: {
        maxWidth: "100%",
        fields: "90px",
    },
    breakPoints: {
        xlg: {
            width: "1919.98px",
            fields: "40px",
        },
        lg: {
            width: "1279.98px",
            fields: "20px",
        },
        md: {
            width: "991.98px",
            fields: "20px",
        },
        sm: {
            width: "767.98px",
            fields: "15px",
        },
        xs: {
            width: "575.98px",
            fields: "15px",
        }
    },
});