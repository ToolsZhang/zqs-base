"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.production = exports.development = void 0;
const fs_1 = require("fs");
const environment = require("./environment");
exports.development = {
    options: {
        key: fs_1.readFileSync(environment.development.root + '/rsa/spdy/dev/privatekey.pem'),
        cert: fs_1.readFileSync(environment.development.root + '/rsa/spdy/dev/certificate.pem'),
    },
    port: 8443,
};
exports.production = {
    options: {
        key: '',
        cert: '',
    },
    port: 433,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BkeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvc3BkeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyQkFBa0M7QUFDbEMsNkNBQTZDO0FBRWhDLFFBQUEsV0FBVyxHQUFZO0lBQ2xDLE9BQU8sRUFBRTtRQUNQLEdBQUcsRUFBRSxpQkFBWSxDQUNmLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLDhCQUE4QixDQUM5RDtRQUNELElBQUksRUFBRSxpQkFBWSxDQUNoQixXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRywrQkFBK0IsQ0FDL0Q7S0FDRjtJQUNELElBQUksRUFBRSxJQUFJO0NBQ1gsQ0FBQztBQUVXLFFBQUEsVUFBVSxHQUFZO0lBQ2pDLE9BQU8sRUFBRTtRQUNQLEdBQUcsRUFBRSxFQUFFO1FBQ1AsSUFBSSxFQUFFLEVBQUU7S0FDVDtJQUNELElBQUksRUFBRSxHQUFHO0NBQ1YsQ0FBQyJ9