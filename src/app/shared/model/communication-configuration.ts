export interface CommunicationConfiguration {
    id: number;
    // name: string;
    // description: string;
    chanEmailPriority: number;
    chanIvrPriority: number;
    chanSmsPriority: number;
    chanSecurePriority: number;
    chanMailPriority: number;
    chanMobilePriority: number;
    chanDefault: 'No' | 'Email' | 'IVR' | 'SMS';
    required: 'Y' | 'N';
    mandatory: 'Y' | 'N';
    effective: string;
    expiration: string;
}
