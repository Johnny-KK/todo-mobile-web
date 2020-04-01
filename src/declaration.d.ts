declare module 'echarts';

// 绑定plus
declare global {
  interface Window {
    plus: {
      io: { resolveLocalFileSystemURL: Function };
    };
  }
}

export {};
