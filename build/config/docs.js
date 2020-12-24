"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.production = exports.development = void 0;
const config = require("./environment");
exports.development = {
    path: '/api',
    options: {
        swagger: '1.0',
        info: {
            title: 'Restful API Documentation',
            description: 'by Zq.',
            version: '1.0.0',
            contact: {
                email: '2369185957@qq.com',
            },
            license: {
                name: 'Apache 2.0',
                url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
            },
        },
        host: `${config.development.domain}:${config.development.port}`,
        schemes: ['http'],
        basePath: '/',
        produces: ['application/json', 'application/xml'],
    },
};
exports.production = {
    path: '/api',
    options: {
        swagger: '1.0',
        info: {
            title: 'Restful API Documentation',
            description: 'by Zq.',
            version: '1.0.0',
            contact: {
                email: '2369185957@qq.com',
            },
            license: {
                name: 'Apache 2.0',
                url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
            },
        },
        host: `${config.production.domain}:${config.production.port}`,
        schemes: ['http'],
        basePath: '/',
        produces: ['application/json', 'application/xml'],
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvZG9jcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3Q0FBd0M7QUFFM0IsUUFBQSxXQUFXLEdBQVk7SUFDbEMsSUFBSSxFQUFFLE1BQU07SUFDWixPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSwyQkFBMkI7WUFDbEMsV0FBVyxFQUFFLFFBQVE7WUFDckIsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRSxtQkFBbUI7YUFDM0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEdBQUcsRUFBRSxpREFBaUQ7YUFDdkQ7U0FDRjtRQUVELElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO1FBQy9ELE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNqQixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDO0tBQ2xEO0NBQ0YsQ0FBQztBQUVXLFFBQUEsVUFBVSxHQUFZO0lBQ2pDLElBQUksRUFBRSxNQUFNO0lBQ1osT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsMkJBQTJCO1lBQ2xDLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUUsbUJBQW1CO2FBQzNCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxZQUFZO2dCQUNsQixHQUFHLEVBQUUsaURBQWlEO2FBQ3ZEO1NBQ0Y7UUFFRCxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtRQUM3RCxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDakIsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQztLQUNsRDtDQUNGLENBQUMifQ==