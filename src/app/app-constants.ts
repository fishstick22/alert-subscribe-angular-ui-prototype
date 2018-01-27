
export class AppConstants {

  public static SAVESUCCESS: string = 'Close on succesful save';
  public static UNEXPIRED: string = '9999-12-31';

  public static ORDOPTS: Object[] = [
    {opt: '1', val: 1},
    {opt: '2', val: 2},
    {opt: '3', val: 3},
    {opt: '4', val: 4},
    {opt: '5', val: 5},
    {opt: '6', val: 6},
    {opt: '7', val: 7},
  ];
  public static YESNOOPTS: Object[] = [{opt: 'Yes', val: 'Y'}, {opt: 'No', val: 'N'}];
  public static PROMOTEOPTS: Object[] = [{opt: 'Yes', val: 'Y'}, {opt: 'No', val: 'N'}, {opt: 'Promote', val: 'P'}];
  public static PROGRAMPROFILEOPTIONS = [
    {'property': 'displayOrder', 'label': 'Order',   'opts': AppConstants.ORDOPTS, 'title': 'Display Order'},
    {'property': 'defaultOptIn', 'label': 'OptIn',   'opts': AppConstants.YESNOOPTS, 'title': 'Default Opt-In?'},
    {'property': 'visibleInUi',  'label': 'Visible', 'opts': AppConstants.PROMOTEOPTS, 'title': 'Visible in UI?'},
    {'property': 'chanEmail',    'label': 'Email',   'opts': AppConstants.YESNOOPTS, 'title': 'Program allows Email channel subscription'},
    {'property': 'chanIvr',      'label': 'Call',    'opts': AppConstants.YESNOOPTS, 'title': 'Program allows IVR channel subscription'},
    {'property': 'chanSms',      'label': 'Text',    'opts': AppConstants.YESNOOPTS, 'title': 'Program allows SMS channel subscription'},
    {'property': 'chanSecure',   'label': 'Secure',  'opts': AppConstants.YESNOOPTS, 'title': 'Program allows Secure channel subscription'},
    // {'property': 'chanMail',     'label': 'Mail',    'opts': AppConstants.YESNOOPTS,
    //   'title': 'Program allows Mail channel subscription'},
    // {'property': 'chanMobile',   'label': 'Mobile',  'opts': AppConstants.YESNOOPTS,
    //  'title': 'Program allows Mobile channel subscription'},
    // {'property': 'effective',    'label': 'Effective', 'title': 'Effective Date of Program'},
    // {'property': 'expiration',   'label': 'Expiration', 'title': 'Expiration Date of Program'}
  ];

  public static CHANNELPRIORTYOPTS: number[] = [0, 1, 2, 3];
  public static CHANNELSECUREPRIORTYOPTS: number[] = [0, 1];
  public static CHANDEFAULTOPTS: string[] = ['No', 'Email', 'Call', 'Text'];
  public static PROGRAMCONFIGURATIONOPTIONS = [
    { 'property': 'chanEmailPriority',  'label': 'Email', 'opts': AppConstants.CHANNELPRIORTYOPTS,
      'title': 'Program Email channel prority' },
    { 'property': 'chanIvrPriority',    'label': 'Call',  'opts': AppConstants.CHANNELPRIORTYOPTS,
      'title': 'Program IVR channel prority' },
    { 'property': 'chanSmsPriority',    'label': 'Text',  'opts': AppConstants.CHANNELPRIORTYOPTS,
      'title': 'Program SMS channel prority' },
    { 'property': 'chanSecurePriority', 'label': 'Secure', 'opts': AppConstants.CHANNELSECUREPRIORTYOPTS,
      'title': 'Program Secure channel prority' },
    // { 'property': 'chanMailPriority',   'label': 'Mail',   'opts': AppConstants.CHANNELPRIORTYOPTS,
    //   'title': 'Program Mail channel prority' },
    // { 'property': 'chanMobilePriority', 'label': 'Mobile', 'opts': AppConstants.CHANNELPRIORTYOPTS,
    //   'title': 'Program Mobile channel prority' },
    { 'property': 'chanDefault',        'label': 'Default', 'opts': AppConstants.CHANDEFAULTOPTS,
      'title': 'Program default channel' },
    { 'property': 'required',           'label': 'Reqd',   'opts': AppConstants.YESNOOPTS,
      'title': 'Program communication required' },
    { 'property': 'mandatory',          'label': 'Mand',   'opts': AppConstants.YESNOOPTS,
      'title': 'Program communication mandatory' },
    // {'property': 'effective',    'label': 'Effective', 'title': 'Effective Date of Program Configuration'},
    // {'property': 'expiration',   'label': 'Expiration', 'title': 'Expiration Date of Program Configuration'}
  ];

}
