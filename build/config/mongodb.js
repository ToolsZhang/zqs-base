"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.production = exports.development = void 0;
exports.development = {
    uri: 'mongodb://localhost/sample',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    promise: global.Promise,
};
exports.production = {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/sample',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    promise: global.Promise,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29kYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvbW9uZ29kYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFYSxRQUFBLFdBQVcsR0FBWTtJQUNsQyxHQUFHLEVBQUUsNEJBQTRCO0lBQ2pDLE9BQU8sRUFBRTtRQUNQLGVBQWUsRUFBRSxJQUFJO1FBQ3JCLGtCQUFrQixFQUFFLElBQUk7S0FDekI7SUFDRCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87Q0FDeEIsQ0FBQztBQUVXLFFBQUEsVUFBVSxHQUFZO0lBQ2pDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSw0QkFBNEI7SUFDNUQsT0FBTyxFQUFFO1FBQ1AsZUFBZSxFQUFFLElBQUk7UUFDckIsa0JBQWtCLEVBQUUsSUFBSTtLQUN6QjtJQUNELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztDQUN4QixDQUFDIn0=