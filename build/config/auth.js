"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.production = exports.development = void 0;
exports.development = {
    messages: {
        errors: {
            empty_username: 'Username cannot be blank',
            empty_password: 'Password cannot be blank',
            username_already_in_use: 'The specified username is already in use.',
            username_not_registered: 'This username is not registered.',
            invalid_password: 'Invalid password',
            unauthorized: 'Unauthorized',
            invalid_token: 'Invalid token',
            no_permission: 'No permission to access',
        },
    },
    secret: 'This is a secret',
    enableBasicAuth: true,
    defaultRoles: ['user', 'admin', 'super'],
};
exports.production = {
    messages: {
        errors: {
            empty_username: 'Username cannot be blank',
            empty_password: 'Password cannot be blank',
            username_already_in_use: 'The specified username is already in use.',
            username_not_registered: 'This username is not registered.',
            invalid_password: 'Invalid password',
            unauthorized: 'Unauthorized',
            invalid_token: 'Invalid token',
            no_permission: 'No permission to access',
        },
    },
    secret: 'This is a secret',
    enableBasicAuth: true,
    defaultRoles: ['user', 'admin', 'super'],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvYXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFYSxRQUFBLFdBQVcsR0FBWTtJQUNsQyxRQUFRLEVBQUU7UUFDUixNQUFNLEVBQUU7WUFDTixjQUFjLEVBQUUsMEJBQTBCO1lBQzFDLGNBQWMsRUFBRSwwQkFBMEI7WUFDMUMsdUJBQXVCLEVBQUUsMkNBQTJDO1lBQ3BFLHVCQUF1QixFQUFFLGtDQUFrQztZQUMzRCxnQkFBZ0IsRUFBRSxrQkFBa0I7WUFDcEMsWUFBWSxFQUFFLGNBQWM7WUFDNUIsYUFBYSxFQUFFLGVBQWU7WUFDOUIsYUFBYSxFQUFFLHlCQUF5QjtTQUN6QztLQUNGO0lBQ0QsTUFBTSxFQUFFLGtCQUFrQjtJQUMxQixlQUFlLEVBQUUsSUFBSTtJQUNyQixZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztDQUN6QyxDQUFDO0FBRVcsUUFBQSxVQUFVLEdBQVk7SUFDakMsUUFBUSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ04sY0FBYyxFQUFFLDBCQUEwQjtZQUMxQyxjQUFjLEVBQUUsMEJBQTBCO1lBQzFDLHVCQUF1QixFQUFFLDJDQUEyQztZQUNwRSx1QkFBdUIsRUFBRSxrQ0FBa0M7WUFDM0QsZ0JBQWdCLEVBQUUsa0JBQWtCO1lBQ3BDLFlBQVksRUFBRSxjQUFjO1lBQzVCLGFBQWEsRUFBRSxlQUFlO1lBQzlCLGFBQWEsRUFBRSx5QkFBeUI7U0FDekM7S0FDRjtJQUNELE1BQU0sRUFBRSxrQkFBa0I7SUFDMUIsZUFBZSxFQUFFLElBQUk7SUFDckIsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7Q0FDekMsQ0FBQyJ9