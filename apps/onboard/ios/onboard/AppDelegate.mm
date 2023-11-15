#import "AppDelegate.h"
#import "RNSplashScreen.h"
#import <CodePush/CodePush.h>
#import "RNCConfig.h"
#import <Firebase.h>

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"onboard";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  NSString *codePushApiKey = [RNCConfig envFor:@"APPCENTER_CODEPUSH_IOS_API_KEY"];
  if (codePushApiKey && codePushApiKey.length) {
    [CodePush setDeploymentKey:codePushApiKey];
  }
  
  [FIRApp configure];

  bool didFinish=[super application:application didFinishLaunchingWithOptions:launchOptions];
  
  [RNSplashScreen show];  // here
  return didFinish;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  NSString *codePushApiKey = [RNCConfig envFor:@"APPCENTER_CODEPUSH_IOS_API_KEY"];
  if (codePushApiKey && codePushApiKey.length) {
    return [CodePush bundleURL];
  }
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

/// This method controls whether the `concurrentRoot`feature of React18 is turned on or off.
///
/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html
/// @note: This requires to be rendering on Fabric (i.e. on the New Architecture).
/// @return: `true` if the `concurrentRoot` feature is enabled. Otherwise, it returns `false`.
- (BOOL)concurrentRootEnabled
{
  return true;
}

@end
