/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'e2e/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/onboard/Build/Products/Debug-iphonesimulator/DEV onboard.app',
      build: 'xcodebuild ARCHS=x86_64 ONLY_ACTIVE_ARCH=NO -workspace ios/onboard.xcworkspace -configuration \"Debug\" -scheme \"onboard (DEV)\" -sdk iphonesimulator -derivedDataPath ios/build/onboard'
    },
    'ios.release': {
      type: 'ios.app',
      binaryPath: 'ios/build/onboard/Build/Products/Release-iphonesimulator/DEV onboard.app',
      build: 'xcodebuild ARCHS=x86_64 ONLY_ACTIVE_ARCH=NO -workspace ios/onboard.xcworkspace -configuration \"Release\" -scheme \"onboard (DEV)\" -sdk iphonesimulator -derivedDataPath ios/build/onboard'
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/dev/debug/app-dev-debug.apk',
      build: 'rm -rf android/app/build && npx jetify && cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..',
      reversePorts: [
        8081
      ]
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/dev/release/app-dev-release.apk',
      build: 'rm -rf android/app/build && npx jetify && cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd ..'
    }
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 14'
      }
    },
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*'
      }
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_5_API_31'
      }
    }
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug'
    },
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release'
    },
    'android.att.debug': {
      device: 'attached',
      app: 'android.debug'
    },
    'android.att.release': {
      device: 'attached',
      app: 'android.release'
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug'
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release'
    }
  }
};
