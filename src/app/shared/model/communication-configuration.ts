export interface CommunicationConfiguration {
    id: number;
    name: string;
    description: string;
    chanEmailPriority: number;
    chanIvrPriority: number;
    chanSmsPriority: number;
    chanMailPriority: number;
    chanMobilePriority: number;
    chanMandatory: 'No' | 'Email' | 'IVR' | 'SMS';
    effective: string;
    expiration: string;
}
