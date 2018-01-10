export class FormStaticHelper {
  public static setReadOnlyOption(configObject: any[], configPropName: string): string {
    // this.staticReadonlyOption = this.configuration[this.configurationProperty];
    let staticReadonlyOption = 'ERR';
    if (typeof configObject[configPropName] === 'boolean') {
      staticReadonlyOption = configObject[configPropName] ? 'Yes' : 'No';

    } else if (typeof configObject[configPropName] === 'number') {
      staticReadonlyOption = configObject[configPropName];

    } else if (typeof configObject[configPropName] === 'string' &&
               configObject[configPropName].length > 1) {
        staticReadonlyOption = configObject[configPropName];

    } else {
      switch (configObject[configPropName]) {
        case 'Y': {
          staticReadonlyOption = 'Yes';
          break;
        }
        case 'N': {
          staticReadonlyOption = 'No';
          break;
        }
        case 'P': {
          staticReadonlyOption = 'Promo';
          break;
        }
        default: {
          staticReadonlyOption = 'ERR ' + configObject[configPropName];
          break;
        }
      }
    }
    return staticReadonlyOption;
  }
}
