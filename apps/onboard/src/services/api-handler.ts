import axios from 'axios';
import { padStart } from 'lodash';
import CodePush from 'react-native-code-push';
import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';

// eslint-disable-next-line no-undef
if (__DEV__) {
  // eslint-disable-next-line no-console
  console.info(`BASE_API_URL=${Config.BASE_API_URL}`);
}

const logEnabled = Config.DEBUG_API_LOG === '1';

export interface Cookie {
  [key: string]: any;
}

export interface TokenCookie extends Cookie {
  nfAccessTokenAPP?: string;
  nfRefreshTokenAPP?: string;
}

export interface CsrfCookie extends Cookie {
  nfXsrfToken?: string;
}

const getIncrementalVersion = (version?: string): string => {
  try {
    return parseInt(
      (version || DeviceInfo.getVersion())
        .split('.')
        .map(x => padStart(x, 3, '0'))
        .join(''),
      10,
    ).toString();
  } catch {
    return DeviceInfo.getBuildNumber();
  }
};

export const defaultHeaders = {
  'Content-Type': 'application/json',
  nfParty: Config.NF_PARTY || 'APP',
  nfRealm: 'LLA',
  'support-job-multiple-stops': 'true',
  'support-shc-paging': 'true',
  'app-version': DeviceInfo.getVersion(),
  'app-readable-version': DeviceInfo.getReadableVersion(),
  'app-build-number': DeviceInfo.getBuildNumber(),
  'app-incremental-number': getIncrementalVersion(),
};

axios.defaults.baseURL = Config.BASE_API_URL;
axios.defaults.timeout = 61000;
Object.assign(axios.defaults.headers, defaultHeaders);
axios.defaults.withCredentials = true;

export const setApiHandlerHeaderPackageHash = async (): Promise<void> => {
  const metadata = await CodePush.getUpdateMetadata(
    CodePush.UpdateState.RUNNING,
  ).catch(() => null);
  Object.assign(defaultHeaders, {
    'codepush-package-hash': metadata?.packageHash ?? 'none',
    'codepush-label': metadata?.label ?? 'none',
  });
  Object.assign(axios.defaults.headers, defaultHeaders);
};
setApiHandlerHeaderPackageHash();

// request interceptor
axios.interceptors.request.use(
  async (config: any) => {
    return config;
  },
  (error: any) => Promise.reject(error),
);

// response interceptor
axios.interceptors.response.use(
  async (response: any) => {
    // Any status code that lie within the range of 2xx
    // cause this function to trigger
    // eslint-disable-next-line no-console
    if (logEnabled) {
      console.info(
        '\x1b[38m',
        'OK',
        `[${response?.config?.method?.toUpperCase()}]`,
        response?.config?.url,
        JSON.stringify(response?.data),
      );
    }

    return response;
  },
  async (error: any) => {
    // Any status codes that falls outside the range of 2xx
    // cause this function to trigger
    // eslint-disable-next-line no-console
    if (logEnabled) {
      console.info(
        '\x1b[31m',
        'ERROR',
        `[${error?.config?.method?.toUpperCase()}]`,
        error?.config?.url,
        error?.status ?? error?.code,
      );
    }

    const rejectError = error.response?.data || error;

    return Promise.reject(rejectError);
  },
);

export default axios;
