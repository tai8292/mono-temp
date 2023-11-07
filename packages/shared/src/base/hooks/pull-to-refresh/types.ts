/* eslint-disable no-unused-vars */

export enum PullToRefreshEventType {
    INIT = 'INIT',
    FOCUS = 'FOCUS',
    PULL_TO_REFRESH = 'PULL_TO_REFRESH',
    ACTIVE_FROM_BACKGROUND = 'ACTIVE_FROM_BACKGROUND',
    SOCKET = 'SOCKET',
  }
  
  export type PullToRefreshCallbackOptions = {
    type: PullToRefreshEventType;
  };
  
  export type PullToRefreshCallback = (
    options?: PullToRefreshCallbackOptions,
  ) => void;
  
  export type PullToRefreshOptions = {
    enabledOnInit?: boolean;
    enabledOnFocus?: boolean;
    enabledOnPullToRefresh?: boolean;
    enabledOnAppStateChanged?: boolean;
  };
  
  export type PullToRefreshHook = {
    public: () => void;
  };
  