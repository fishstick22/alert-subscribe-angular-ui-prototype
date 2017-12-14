
export class AppConstants {

    public static SAVESUCCESS: string = 'Close on succesful save';
    public static UNEXPIRED: string = '9999-12-31';

    public static PROGRAMPROFILEOPTIONS = [
        {'property': 'defaultOptIn', 'label': 'OptIn',   'title': 'Default Opt-In?'},
        {'property': 'visibleInUi',  'label': 'Visible', 'title': 'Visible in UI?'},
        {'property': 'chanEmail',    'label': 'Email',   'title': 'Program allows Email channel subscription'},
        {'property': 'chanIvr',      'label': 'IVR',     'title': 'Program allows IVR channel subscription'},
        {'property': 'chanSms',      'label': 'SMS',     'title': 'Program allows SMS channel subscription'},
        {'property': 'chanSecure',   'label': 'Secure',  'title': 'Program allows Secure channel subscription'},
        {'property': 'chanMail',     'label': 'Mail',    'title': 'Program allows Mail channel subscription'},
        {'property': 'chanMobile',   'label': 'Mobile',  'title': 'Program allows Mobile channel subscription'},
        // {'property': 'effective',    'label': 'Effective', 'title': 'Effective Date of Program'},
        // {'property': 'expiration',   'label': 'Expiration', 'title': 'Expiration Date of Program'}
      ];
}
