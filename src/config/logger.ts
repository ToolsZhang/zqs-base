import { IConfig, IConfigLogType} from 'zqs-core/lib/logger';

export const development: IConfig = {
  roles: ['user', 'admin', 'super'],
  allowPath: [
    {
      url: '/',
      logType: IConfigLogType.operate,
      operlogParams: {
        method: ['GET'],
        title: '默认首页',
        businessTypes: [1],
      },
    },
    {
      url: '/auth/basic/signin',
      logType: IConfigLogType.login,
      loginforParams: {
        params: 'username',
        title: '账号密码登录',
      },
    },
  ],
  errors: {
    empty: 'Empty data or url',
    emptyAuth: 'Auth cannot be blank',
    emptyUsername: 'Username cannot be blank',
    emptyOperateLogID: 'OperateLogID cannot be blank',
    emptyLoginInforID: 'OperateLogID cannot be blank',
    operateLogNotFound: 'Operate Log NotFound',
    loginInforNotFound: 'Login Infor NotFound',
  },
};

export const production: IConfig = {
  roles: ['user', 'admin', 'super'],
  allowPath: [
    {
      url: '/',
      logType: IConfigLogType.operate,
      operlogParams: {
        method: ['GET'],
        title: '默认首页',
        businessTypes: [1],
      },
    },
    {
      url: '/auth/basic/signin',
      logType: IConfigLogType.login,
      loginforParams: {
        params: 'username',
        title: '账号密码登录',
      },
    },
  ],
  errors: {
    empty: 'Empty data or url',
    emptyAuth: 'Auth cannot be blank',
    emptyUsername: 'Username cannot be blank',
    emptyOperateLogID: 'OperateLogID cannot be blank',
    emptyLoginInforID: 'OperateLogID cannot be blank',
    operateLogNotFound: 'Operate Log NotFound',
    loginInforNotFound: 'Login Infor NotFound',
  }
};
