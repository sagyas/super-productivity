export const IS_ANDROID_WEB_VIEW = !!(window as any).SUPAndroid;
export const IS_F_DROID_APP = !!(window as any).SUPFDroid;
export const ANDROID_APP_VERSION: string | undefined = (window as any)
  .SUP_ANDROID_VERSION;

export const IS_ANDROID_NEW_DATA_INTERFACE: boolean =
  !!ANDROID_APP_VERSION && +(ANDROID_APP_VERSION as any) >= 16;
