import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const communication = [
      {'id': 260,  'name': 'Refill Available Notice',
            'description': 'Notifies a member when one or more of their Rx\'s is eligible for refill',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 261,  'name': 'Order Received',
            'description': 'Notifies a member when their order is received',
            'programConfiguration': [1], 'clientConfiguration': [1]},
      {'id': 263,  'name': 'Refill Expiring Notice',
            'description': 'Notifies a member when one or more of their Rx\'s is about to expire but has at least 1 refill left',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 264,  'name': 'Order Shipped',
            'description': 'Notifies a member when their order is shipped',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 1229, 'name': 'Zero Refills Notice',
            'description': 'Notifies a member when one or more of their Rx\s has no more refills available',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 1230, 'name': 'RFM Auto Renewal ',
            'description': 'Notifies a member when we will be reaching out to their Dr. to get a new RX',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 1231, 'name': 'RFM Auto Refill ',
            'description': 'Notifies a member when we will be automatically refilling their Rx',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 1232, 'name': 'RFM MD Denied ',
            'description': 'Notifies a member when their Dr. Denied our request for a new Rx',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 1233, 'name': 'RFM MD Unresponsive ',
            'description': 'Notifies a member when their Dr. was unresponsive to our request for a new Rx',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 1341, 'name': 'RTP (Return to Participant) w/ MD Contact',
            'description': 'Notifies a member when their order cannot be filled and we tried to contact their Doctor',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 1342, 'name': 'RTP (Return to Participant) w/o MD Contact',
            'description': 'Notifies a member when their order cannot be filled but we did not reach out to their doctor',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 1343, 'name': 'Future Fill Held ',
            'description': 'Notifies a member when their order is held due to refill too soon',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 1344, 'name': 'Future Fill Split ',
            'description': 'Notifies a member when part of their order is held due to refill too soon',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 1859, 'name': 'Doctor Hold',
            'description': 'Notifies member when Order is Held by Doctor.',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 1861, 'name': 'Cannot Fill',
            'description': 'Notifies member when Order cannot be filled (previously RTP)',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 1904, 'name': 'Ship Consent Initial',
            'description': 'Initial consent from member',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 1905, 'name': 'Ship Consent Followup',
            'description': 'Followup consent from member',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 1906, 'name': 'Ship Consent Final',
            'description': 'Final followup consent from member',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 1907, 'name': 'Future Fill Release Reminder',
            'description': 'Notifies a member when a prescription is released from future fill',
            'programConfiguration' : [], 'clientConfiguration': []},
      {'id': 2514, 'name': 'Refill Available Reminder',
            'description': 'Notifies a member when one or more of their Rx\'s is eligible for refill',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 2515, 'name': 'Refill Available Warning',
            'description': 'Notifies a member when one or more of their Rx\'s is eligible for refill',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 2516, 'name': 'Refill Expiring Reminder',
            'description': 'Notifies a member when one or more of their Rx\'s is about to expire but has at least 1 refill left',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 2517, 'name': 'Refill Expiring Warning',
            'description': 'Notifies a member when one or more of their Rx\'s is about to expire but has at least 1 refill left',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 2518, 'name': 'Zero Refills Reminder',
            'description': 'Notifies a member when one or more of their Rx\'s has no more refills available',
            'programConfiguration': [], 'clientConfiguration': []},
      {'id': 2519, 'name': 'Zero Refills Warning',
            'description': 'Notifies a member when one or more of their Rx\'s has no more refills available',
            'programConfiguration': [], 'clientConfiguration': []}
    ];
    const program = [
      {'id': 1, 'name': 'Prescription Alerts',
       'description': 'PBM Communications including Order Status and Refill Reminder alerts',
       'programProfile': [1],
       'programProfileClientException': [1]
      },
      {'id': 2, 'name': 'Non-Prescription Alerts',
      'description': 'PBM non-transactional Communications like Portal Registration, Password Recovery',
       'programProfile': [
        {'id': 2, 'defaultOptIn': true, 'visibleInUi': false,
         'chanEmail': true, 'chanIvr': true, 'chanSms': true, 'chanSecure': true, 'chanMail': false, 'chanMobile': false,
         'effective': '2017-01-01', 'expiration': '9999-12-31', 'program': 2
        }
       ],
       'programProfileClientException': []
      }
    ];
    const programprofile = [
      {'id': 1,
       'defaultOptIn': true,
       'visibleInUi': true,
       'chanEmail': true,
       'chanIvr': true,
       'chanSms': true,
       'chanSecure': true,
       'chanMail': false,
       'chanMobile': false,
       'effective': '2017-01-01',
       'expiration': '9999-12-31',
       'program': 1
      }
    ];
    const programprofileclientexception = [
      {'id': 1,
       'defaultOptIn': true,
       'visibleInUi': true,
       'chanEmail': true,
       'chanIvr': true,
       'chanSms': true,
       'chanSecure': true,
       'chanMail': false,
       'chanMobile': false,
       'effective': '2017-01-01',
       'expiration': '9999-12-31',
       'program': 1,
       'client':
         {'id': 142, 'code': 'AMD', 'name': 'AT&T INC.',
          'programProfileClientException': [1],
          'clientConfiguration': [1]
         }
      }
    ];
    const programconfiguration = [
      {'id': 1,
       'name': 'Prescription Alerts Order Status',
       'description': 'Order Status Program-level Configuration',
       'chanEmailPriority': 2,
       'chanIvrPriority': 3,
       'chanSmsPriority': 1,
       'chanMailPriority': 0,
       'chanMobilePriority': 0,
       'chanMandatory': 'Email',
       'effective': '2017-1-1',
       'expiration': '9999-12-31',
       'program': 1,
       'communication': 261
      },
      {'id': 2,
       'name': 'Prescription Alerts Order Status',
       'description': 'Order Status Program-level Configuration',
       'chanEmailPriority': 2,
       'chanIvrPriority': 3,
       'chanSmsPriority': 1,
       'chanMailPriority': 0,
       'chanMobilePriority': 0,
       'chanMandatory': 'Email',
       'effective': '2017-1-1',
       'expiration': '9999-12-31',
       'program': 1,
       'communication': 264
      }
    ];
    const client = [
      {'id': 142,   'code': 'AMD',   'name': 'AT&T INC.',
       'programProfileClientException': [1],
       'clientConfiguration': [1]},
      {'id': 259,   'code': 'BCC',   'name': 'BLUE CROSS OF CONNECTICUT',
       'programProfileClientException': [], 'clientConfiguration': [2]},
      {'id': 339,   'code': 'BCAL',  'name': 'BLUE CROSS OF ALABAMA',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 428,   'code': 'BOH',   'name': 'BLUE CROSS OF OHIO',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 10203, 'code': 'BCBSN', 'name': 'BLUE CROSS BLUE SHIELD OF NC',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 11254, 'code': 'BCOGA', 'name': 'BLUE CROSS/BLUE SHIELD GEORGIA',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 11614, 'code': 'BCCAL', 'name': 'BLUE CROSS/BS OF CALIFORNIA',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 11643, 'code': 'BCOMI', 'name': 'BLUE CROSS OF MICHIGAN',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 12130, 'code': 'BCBSA', 'name': 'BLUE CROSS BLUE SHIELD ASSOC.',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 12675, 'code': 'BCORO', 'name': 'BLUE CROSS OF ROCHESTER',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 14481, 'code': 'ZC342', 'name': 'BLUE CROSS IDAHO-HMO',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 14482, 'code': 'ZC343', 'name': 'BLUE CROSS IDAHO-PPO',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 14606, 'code': 'ZCC01', 'name': 'BLUE CROSS BLUE SHIELD OF TENN',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 22912, 'code': 'X7700', 'name': 'AETNA-PPO',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 22913, 'code': 'X7705', 'name': 'AETNA-SRC',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 22914, 'code': 'X7710', 'name': 'AETNA-AGB',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 22915, 'code': 'X7715', 'name': 'AETNA-DISCOUNT CARE',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 22916, 'code': 'X7720', 'name': 'AETNA-ASH',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 22917, 'code': 'X7730', 'name': 'AETNA-HMO',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 22918, 'code': 'X7750', 'name': 'AETNA-MCPP - MEDICAL BNFT',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 22919, 'code': 'X7760', 'name': 'AETNA-HNO',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 22920, 'code': 'X7770', 'name': 'AETNA-MED-D PDP S5810',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 22921, 'code': 'X7771', 'name': 'AETNA-MED-D MAPD H0318',
       'programProfileClientException': [], 'clientConfiguration': []},
      {'id': 22922, 'code': 'X7772', 'name': 'AETNA-MED-D MAPD H0523',
       'programProfileClientException': [], 'clientConfiguration': []}
    ];
    const clientconfiguration = [
      {'id': 1,
       'name': 'Prescription Alerts Order Status',
       'description': 'Order Status Client-level Configuration',
       'chanEmailPriority': 2,
       'chanIvrPriority': 3,
       'chanSmsPriority': 1,
       'chanMailPriority': 0,
       'chanMobilePriority': 0,
       'chanMandatory': 'Email',
       'effective': '2017-01-01',
       'expiration': '9999-12-31',
       'client': 142,
       'communication': 261
      },
      {'id': 2,
       'name': 'Prescription Alerts Order Status',
       'description': 'Order Status Client-level Configuration',
       'chanEmailPriority': 3,
       'chanIvrPriority': 1,
       'chanSmsPriority': 2,
       'chanMailPriority': 0,
       'chanMobilePriority': 0,
       'chanMandatory': 'No',
       'effective': '2017-01-01',
       'expiration': '9999-12-31',
       'client': 259,
       'communication': 261
      }
    ];
    return {
      communication: communication,
      program: program,
      programprofile: programprofile,
      programprofileclientexception: programprofileclientexception,
      programconfiguration: programconfiguration,
      client: client,
      clientconfiguration: clientconfiguration
    };
  }
}
